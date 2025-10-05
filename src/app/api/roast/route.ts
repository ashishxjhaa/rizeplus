import { NextResponse } from "next/server";
import OpenAI from "openai";

// Ensures Node APIs are available for pdf-parse
export const runtime = "nodejs"; 

export async function POST(req: Request) {
    try {
        // Step 1: Read file from form data
        const formData = await req.formData();
        const file = formData.get("file");

        if (!file || !(file instanceof Blob)) {
            return NextResponse.json(
                { error: "No file uploaded." }, 
                { status: 400 }
            );
        }

        // Step 3: Convert file to Buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Step 4: Extract text from PDF
        const pdfParse = (await import("pdf-parse/lib/pdf-parse.js" as any)).default;
        const data = await pdfParse(buffer);
        const resumeText = data.text;

        if (!resumeText.trim()) {
            return NextResponse.json(
                { error: "Could not extract text from PDF." },
                { status: 400 }
            );
        }

        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

        // Step 5: Send text to LLM (OpenAI)
        const prompt = 
        ` You are a brutally honest and witty career coach. 
        Roast this resume in a humorous, sarcastic, and playful way. 
        Be funny but not offensive. 
        Point out mistakes, cringe words, formatting issues, and clichés. 
        Write it as a **continuous paragraph** like a Twitter roast, not in numbered sections.
        Resume: ${resumeText}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini", // fast + cost-efficient model
            messages: [
                { role: "user", content: prompt }
            ],
        });

        const roast = completion.choices[0].message?.content || "No roast generated.";

        // Step 6: Return roast text
        return NextResponse.json({ roast });
    } catch (err: any) {
        console.error("Error roasting resume:", err);
        return NextResponse.json(
            { error: "Something went wrong while roasting the resume." },
            { status: 500 }
        );
    }
}

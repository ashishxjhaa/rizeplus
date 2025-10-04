import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";


export default function Home() {
  return (
    <div className="min-h-screen w-full bg-neutral-900 flex flex-col items-center justify-center">
      <div className="w-2xl">
        <FileUpload />
      </div>
      <div className="mt-10">
        <Button variant="outline">Roast Me</Button>
      </div>
    </div>
  );
}

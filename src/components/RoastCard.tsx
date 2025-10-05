"use client";

import React from "react";

export default function RoastCard({ roast }: { roast: string }) {
    return (
        <div className="mt-8 p-6 rounded-lg bg-neutral-800 shadow-md w-full max-w-2xl">
            <h2 className="text-lg font-semibold mb-2 tracking-wide text-[#FFDA37]">Your Roast</h2>
            <p className="text-sm whitespace-pre-wrap leading-relaxed tracking-wide text-white">{roast}</p>
        </div>
    );
}

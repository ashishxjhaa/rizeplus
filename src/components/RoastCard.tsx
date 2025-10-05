"use client";

import React from "react";
import { IoShareOutline } from "react-icons/io5";

export default function RoastCard({ roast }: { roast: string }) {
    return (
        <div className="mt-8 p-6 rounded-lg bg-neutral-800 shadow-md w-full max-w-2xl">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold tracking-wide text-[#FFDA37] my-3">Your Roast</h2>
                <button className="flex items-center justify-center gap-2 border border-white/30 hover:bg-neutral-700 h-9 px-5 text-white tracking-wide rounded-lg font-medium text-sm cursor-pointer">
                    <IoShareOutline />
                    <div>Share on X</div>
                </button>
            </div>
            <p className="text-sm whitespace-pre-wrap leading-relaxed tracking-wide text-white">{roast}</p>
        </div>
    );
}

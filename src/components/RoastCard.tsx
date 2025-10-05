"use client";

import React from "react";
import { useRef } from 'react';
import { IoShareOutline } from "react-icons/io5";


export default function RoastCard({ roast }: { roast: string }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleShare = async () => {
        const text = "Just got brutally roasted by AI 💀🔥\nCheck out this tool by @ashishxjha \n\n Check yours at: \n";
        const url = "https://rizeplus.vercel.app";
        
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(tweetUrl, '_blank');
    };

    return (
        <div ref={cardRef} className="mt-8 p-6 rounded-lg bg-neutral-800 shadow-md w-full max-w-2xl">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold tracking-wide text-[#FFDA37] my-3">Your Roast</h2>
                <button onClick={handleShare} className="flex items-center justify-center gap-2 border border-white/30 hover:bg-neutral-700 h-9 px-5 text-white tracking-wide rounded-lg font-medium text-sm cursor-pointer">
                    <IoShareOutline />
                    <div>Share on X</div>
                </button>
            </div>
            <p className="text-sm whitespace-pre-wrap leading-relaxed tracking-wide text-white">{roast}</p>
        </div>
    );
}

"use client";

import React from 'react';

interface GaugeProps {
  percentage?: number;
}

export default function ResultBar({ percentage = 60 }: GaugeProps) {
  return (
    <div className="relative w-48 h-24">
      {/* SVG for the gauge */}
      <svg className="w-full h-full" viewBox="0 0 100 50">
        {/* Background arc */}
        <path
          d="M5 50a45 45 0 0 1 90 0"
          className="stroke-gray-100"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* Colored progress arc */}
        <path
          d="M5 50a45 45 0 0 1 90 0"
          stroke="url(#gradient)"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${(percentage / 100) * 141.4}, 141.4`}
        />
      </svg>


      {/* Percentage display */}
      <div className=" w-full absolute top-5 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full bg-white shadow-inner flex items-center justify-center">
          <span className="text-4xl font-bold">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

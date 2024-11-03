"use client"

import { useState } from "react"
import ResultBar from "../components/ProgressBar"


// Mock data for the quiz results
const mockResults = {
  percentage: 60,
  correct: 3,
  incorrect: 2,
}

export default function Results() {
  const [results] = useState(mockResults)

  return (
    <div className="relative w-full h-full max-w-md mx-auto">

      {/* Main content */}
      <div className="w-full bg-white rounded-3xl overflow-hidden py-14 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">Your result</h1>
        <div className="w-full flex justify-center items-center mb-20">
          <ResultBar />
        </div>
       

        {/* Stats */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-xl font-bold">{results.correct}</span>
              <span className="text-xl text-gray-600">Correct</span>
            </div>
          </div>
          <div className="rounded-2xl bg-red-50 p-4">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-xl font-bold">{results.incorrect}</span>
              <span className="text-xl text-gray-600">Incorrect</span>
            </div>
          </div>
        </div>

        {/* button */}
        <button className="mt-8 w-full rounded-full bg-red-500 p-6 text-xl font-semibold text-white hover:bg-red-600">
          Start Again
        </button>
      </div>
    </div>
  )
}
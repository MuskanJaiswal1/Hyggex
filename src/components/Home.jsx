import React from 'react'
import Img1 from './publihedBy_Hyggex.png'

export default function Home() {
    return (
        <>
            <div class="p-10">
                <a href="/"><i class="fa-solid fa-house"></i></a>
                <i class="fa-solid fa-chevron-right px-1"></i>
                <a href="/">Flashcard</a>
                <i class="fa-solid fa-chevron-right px-1"></i>
                <a href="/">Mathematics</a>
                <i class="fa-solid fa-chevron-right px-1"></i>
                <a href="/">Relations And Mathematics</a>
            </div>
            <h3 class="text-sky-700 font-bold px-10 pb-6">Relations and Functions (Mathematics)</h3>
            <div class="px-10">
                <ul class="flex justify-center">
                    <li><a href="/" class="px-6 hover:underline underline-offset-4 decoration-sky-600 hover:font-semibold font-semibold underline text-sky-800">Study</a></li>
                    <li><a href="/" class="px-6 hover:underline underline-offset-4 decoration-sky-600 hover:font-semibold text-sky-800">Quiz</a></li>
                    <li><a href="/" class="px-6 hover:underline underline-offset-4 decoration-sky-600 hover:font-semibold text-sky-800">Test</a></li>
                    <li><a href="/" class="px-6 hover:underline underline-offset-4 decoration-sky-600 hover:font-semibold text-sky-800">Game</a></li>
                    <li><a href="/" class="px-6 hover:underline underline-offset-4 decoration-sky-600 hover:font-semibold text-sky-800">Others</a></li>
                </ul>
                <div className="bg-gradient-to-b from-sky-700 via-sky-600 to-sky-400 w-2/5 h-72 mt-8 rounded-2xl flex justify-center items-center m-auto text-white font-bold text-3xl">
                    <a href="/"><i class="fa-regular fa-lightbulb relative bottom-24 right-24"></i></a>
                    9 + 6 + 7x - 2x - 3
                    <a href="/"><i class="fa-solid fa-volume-low relative bottom-24 left-24"></i></a>
                </div>
                <div class="mt-6 text-sky-900 text-2xl flex justify-center items-center m-auto">
                <a href="/"><i class="fa-solid fa-rotate-right"></i></a>
                <div class="mx-36">
                <a href="/"><i class="fa-solid fa-circle-chevron-left px-5"></i></a>
                01/10
                <a href="/"><i class="fa-solid fa-circle-chevron-right px-5"></i></a>
                </div>
                <a href="/"><i class="fa-solid fa-expand"></i></a>
                </div>
                <div class=" mt-6 px-10 flex justify-between text-sky-900">
                    <img src={Img1} alt="publishedBy Hyggex" class="w-48 h-28"/>
                    <div>
                    <a href="/"><i class="fa-solid fa-circle-plus text-4xl p-3"></i></a>
                    <span class="relative bottom-2 text-xl font-semibold">Create Flashcard</span>
                    </div>
                </div>
            </div>
        </>
    )
}

import React from 'react'
import Logo from './logo.png'

export default function Navbar() {
  return (
    <div class="mt-6">
        <ul class="flex justify-between mx-12">
            <div>
            <li><a href="/"><img src={Logo} alt="Hyggex" class="w-32 h-7" /></a></li>
            </div>
            <div class="flex">
            <li><a href="/" class="px-6 hover:underline underline-offset-2 decoration-sky-600 hover:font-semibold">Home</a></li>
            <li><a href="/" class="px-6 hover:underline underline-offset-2 decoration-sky-600 hover:font-semibold">Flashcard</a></li>
            <li><a href="/" class="px-6 hover:underline underline-offset-2 decoration-sky-600 hover:font-semibold">Contact</a></li>
            <li><a href="/" class="px-6 hover:underline underline-offset-2 decoration-sky-600 hover:font-semibold">FAQ</a></li>
            <li><button><a href="/" class="px-6 py-1 rounded-2xl bg-gradient-to-b from-sky-700 via-sky-600 to-sky-400 hover:border border-sky-600">Login</a></button></li>
            </div>
        </ul>
    </div>
  )
}

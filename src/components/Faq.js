import React from 'react'

export default function Faq() {
    return (
        <>
            <span class="block mt-14 text-3xl pl-28 text-sky-900 font-semibold">FAQ</span>
            <div class="px-28 py-5">
                <details class="border rounded-xl border-sky-600 p-3 w-4/5 flex justify-between mt-5">
                    <summary>
                        Can education flashcards be used for all age groups?
                        </summary>
                    <div>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum explicabo distinctio beatae! Non culpa consequatur temporibus ipsum? Omnis, at ullam. Nesciunt quas repudiandae quos, vitae aliquid numquam aperiam. Qui, quibusdam!
                    </div>
                </details>
                <details class="border rounded-xl border-sky-600 p-3 w-4/5 flex justify-between mt-5">
                    <summary>How do education flashcards work?</summary>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo ratione sed incidunt delectus quasi, quo obcaecati dolores? Pariatur expedita veniam sint. Eveniet, assumenda explicabo.
                    </div>
                </details>
                <details class="border rounded-xl border-sky-600 p-3 w-4/5 flex justify-between mt-5">
                    <summary>Can education flashcards be used for test preparation?</summary> 
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatem!
                    </div>
                </details>
            </div>
        </>
    )
}

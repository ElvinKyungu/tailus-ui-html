import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl px-6">
        <div class="text-center">
            <h2 class="text-title text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
            <p class="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

            <form action="post" class="mx-auto mt-10 max-w-sm lg:my-12">
                <div class="bg-ui relative grid items-center rounded-[calc(var(--btn-radius)+0.5rem)] border pr-2 shadow shadow-gray-950/5 outline-2 outline-offset-2 outline-primary-600 [grid-template-columns:1fr_auto] has-[input:focus]:outline">
                    <svg class="text-caption pointer-events-none absolute inset-y-0 left-4 my-auto size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                    </svg>

                    <input autocomplete="email" placeholder="Your mail address" class="h-12 w-full bg-transparent pl-11 text-sm focus:outline-none" type="email" />
                    <div class="md:pr-1.5 lg:pr-0">
                        <button title="Start buying" class="btn variant-primary sz-sm w-fit">
                            <span class="btn-label hidden md:block"> Get Started</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="relative mx-auto size-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>`

const nextjsCode = `import Link from 'next/link';

export default function CallToAction(){
    return (
        <section className="bg-gradient-to-b py-32 dark:from-primary-950">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                    <p className="text-body mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                    <form action="post" class="mx-auto mt-10 max-w-sm lg:my-12">
                        <div class="bg-ui relative grid items-center rounded-[calc(var(--btn-radius)+0.5rem)] border pr-2 shadow shadow-gray-950/5 outline-2 outline-offset-2 outline-primary-600 [grid-template-columns:1fr_auto] has-[input:focus]:outline">
                            <svg class="text-caption pointer-events-none absolute inset-y-0 left-4 my-auto size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                            </svg>

                            <input autocomplete="email" placeholder="Your mail address" class="h-12 w-full bg-transparent pl-11 text-sm focus:outline-none" type="email" />
                            <div class="md:pr-1.5 lg:pr-0">
                                <button title="Start buying" class="btn variant-primary sz-sm w-fit">
                                    <span class="btn-label hidden md:block"> Get Started</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="relative mx-auto size-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const mailCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}
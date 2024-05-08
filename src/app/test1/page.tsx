"use client"
import { useState } from 'react';

export default function Test1() {
    return (
        <main className="flex min-h-screen flex-col items-start space-y-10 pt-24 px-24 pb-5">
            <h1 className="text-lg font-bold">
                Fix a request counter. Try not to use anything other than useState
            </h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    You’re working on an art marketplace app that lets the
                    user submit multiple orders for an art item at the same
                    time. Each time the user presses the “Buy” button, the
                    “Pending” counter should increase by one. After three
                    seconds, the “Pending” counter should decrease, and the
                    “Completed” counter should increase.However, the “Pending”
                    counter does not behave as intended. When you press “Buy”,
                    it decreases to -1 (which should not be possible!). And if
                    you click fast twice, both counters seem to behave
                    unpredictably. Why does this happen? Fix both counters.

                </p>

            </div>
            <div>
                <RequestTracker />
            </div>

        </main>
    );
}

function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        setPending(pending + 1);
        await delay(3000);
        setPending(pending - 1);
        setCompleted(completed + 1);
    }

    return (
        <div className='flex flex-col space-y-3 p-3 border'>
            <h3>
                Pending: {pending}
            </h3>
            <h3>
                Completed: {completed}
            </h3>
            <button onClick={handleClick} className=" px-3 py-1 border border-gray-900">
                Buy
            </button>
        </div>
    );
}

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export default function Test1() {
    return (
        <main className="flex min-h-screen flex-col items-start space-y-10 pt-24 px-24 pb-5">
            <h1 className="text-lg font-bold">
                Implement the state queue.
            </h1>
            <div className="z-10 w-full max-w-5xl items-center justify-between gap-5 font-mono text-sm lg:flex flex-col border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <p className="w-full">
                    This exercise is to test your basic javascript skills and react understanding. 
                    You have to implement a state queue. 

                    Your task is to implement the <span className="font-bold">getFinalState</span> function so that it returns
                    the correct result for each of those cases. If you implement it
                    correctly, all four tests should pass.

                    You will receive two arguments: baseState which is the initial state (like 0), and
                    the queue is an array which contains a mix of numbers (like 5) and updater
                    functions (like n =&gt; n + 1) in the order they were added.
                </p>
                <p className="w-full">
                PS: From baseState, apply the state sequentially to get the final value.
                </p>
            </div>
            <div>
                <TestCases />
            </div>

        </main>
    );
}

function TestCases() {
    return (
        <div className='flex flex-col space-y-14'>
            <TestCase base={0} queue={"[1, 1, 1]"} exRes={1} />
            <TestCase base={0} queue={"[n => n+1, n => n+1, n => n+1]"} exRes={3} />
            <TestCase base={0} queue={"[5, n => n+1]"} exRes={6} />
            <TestCase base={0} queue={"[5, n => n+1, 42]"} exRes={42} />
        </div>
    );
}

function TestCase({ base, queue, exRes }: any) {
    return (
        <div className='flex flex-col space-y-3'>
            <h3>
                Base state: <span className=" font-bold">{base}</span>
            </h3>
            <h3>
                Queue: <span className=" font-bold">{queue}</span>
            </h3>
            <h3>
                Expected result: <span className=" font-bold">{exRes}</span>
            </h3>
        </div>
    )
}
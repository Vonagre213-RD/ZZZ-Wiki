export default function SqueletonCard( ) {
 
    return (
        <article className=" min-w-[22rem] max-w-[22rem] bg-zinc-700 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-fosfo-500 transition-all duration-300 flex flex-col items-center gap-5 text-center font-titles text-zinc-500 animate-pulse">
            
            <div className="w-32 h-32 object-cover rounded-full border-4 border-fosfo-500 bg-zinc-500">
            </div>

            <div className="flex flex-col gap-2">
                <div className="text-2xl font-semibold bg-zinc-500 min-w-40 rounded-4xl ">aa</div>
                <div className="text-sm text-fosfo-400  bg-zinc-500 min-w-22 h-4 rounded-4xl">aa</div>
            </div>

            <div className="flex justify-center gap-8 w-full mt-2">

                <div className="flex flex-col items-center gap-1 w-8 h-8 bg-zinc-500 rounded-4xl"> 
                  
                </div>

                <div className="flex flex-col items-center gap-1 w-8 h-8 bg-zinc-500 rounded-4xl">
                  
                </div>

                <div className="flex flex-col items-center gap-1 w-8 h-8 bg-zinc-500 rounded-4xl">
                  
                </div>
            </div>
        </article>
    )
}

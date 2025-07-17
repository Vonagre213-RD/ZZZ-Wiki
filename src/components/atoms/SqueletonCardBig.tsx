export default function SkeletonCardBig() {
  return (
    <article className="w-full min-w-[95vw] flex flex-row bg-zinc-800 border-2 border-fosfo-500 rounded-2xl overflow-hidden shadow-xl animate-pulse">
      <aside className="text-white w-1/3 bg-zinc-900 flex flex-col items-center p-6 border-r-2 border-fosfo-500 relative">
        <div className="absolute  -translate-x-36 -translate-y-2  bg-fosfo-600 rounded-lg w-8 h-8"></div>

        <div className="rounded-lg w-full h-[40vw] bg-zinc-600 object-cover"></div>

        <div className="absolute translate-x-36 -translate-y-2  h-8 w-8 bg-zinc-300 rounded-lg hover:scale-105 transition-transform duration-200"></div>
      </aside>

      <section className="w-2/3 flex flex-col p-6 gap-6">
        <h2 className="text-3xl h-6 bg-zinc-500 w-[60%] mx-auto rounded-lg"></h2>

        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-zinc-500 rounded-full"></div>
          <p className="h-6 w-[120px] bg-zinc-500 rounded-md"></p>
        </div>

        <div className="grid grid-cols-4 gap-4 text-white font-titles">
          <div className="h-4 bg-zinc-500 rounded w-full"></div>
          <div className="h-4 bg-zinc-500 rounded w-full"></div>
          <div className="h-4 bg-zinc-500 rounded w-full"></div>
          <div className="h-4 bg-zinc-500 rounded w-full"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center font-titles">
          <div>
            <h4 className="h-4 bg-zinc-500 rounded w-[60%] mx-auto mb-2"></h4>
            <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
          </div>
          <div>
            <h4 className="h-4 bg-zinc-500 rounded w-[60%] mx-auto mb-2"></h4>
            <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
          </div>
          <div>
            <h4 className="h-4 bg-zinc-500 rounded w-[60%] mx-auto mb-2"></h4>
            <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-xl p-4 text-white text-sm font-sans leading-relaxed shadow-inner">
          <div className="h-2 w-[80%] mb-2 bg-zinc-500 rounded"></div>
          <div className="h-2 w-[78%] mb-2 bg-zinc-500 rounded"></div>
          <div className="h-2 w-[76%] mb-2 bg-zinc-500 rounded"></div>
          <div className="h-2 w-[74%] mb-2 bg-zinc-500 rounded"></div>
          <div className="h-2 w-[72%] mb-2 bg-zinc-500 rounded"></div>
        </div>
      </section>
    </article>
  );
}

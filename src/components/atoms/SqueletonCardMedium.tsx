export default function SkeletonCardMedium() {
  return (
    <article className="relative flex flex-col animate-pulse max-w-[90vw] bg-zinc-800 border-2 border-fosfo-500 rounded-2xl overflow-hidden shadow-lg">
      <div className="h-8 w-8 absolute right-6 top-36 bg-zinc-500 rounded-md hover:scale-105 transition-transform duration-200"></div>

      <section className="flex flex-col p-4 gap-4">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-3/5 bg-zinc-600 rounded-2xl"></div>
          <div className="h-5 w-2/5 bg-zinc-600 rounded-xl"></div>
        </div>

        <div className="w-full h-[300px] bg-zinc-600 rounded-lg"></div>
      </section>

      <section className="p-4 flex flex-col items-center gap-2 border-y-2 border-fosfo-500">
        <div className="h-6 w-16 bg-zinc-500 rounded-md"></div>
        <div className="w-14 h-14 bg-zinc-500 rounded-full"></div>
      </section>

      <table className="w-full text-white font-titles border-b-2 border-fosfo-500">
        <thead>
          <tr className="text-center">
            <th className="border-r-2 border-fosfo-500 p-2">
              <div className="h-4 w-16 bg-zinc-600 rounded-md mx-auto"></div>
            </th>
            <th className="p-2">
              <div className="h-4 w-16 bg-zinc-600 rounded-md mx-auto"></div>
            </th>
            <th className="border-l-2 border-fosfo-500 p-2">
              <div className="h-4 w-16 bg-zinc-600 rounded-md mx-auto"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border-r-2 border-fosfo-500 p-2">
              <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
            </td>
            <td className="border-2 border-fosfo-500 p-2">
              <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
            </td>
            <td className="border-l-2 border-fosfo-500 p-2">
              <div className="w-10 h-10 bg-zinc-500 rounded-full mx-auto"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full text-white font-titles">
        <tbody>
          <tr>
            <td className="p-2 border-b-2 border-fosfo-500">
              <div className="h-4 w-32 bg-zinc-500 rounded"></div>
            </td>
            <td className="p-2 border-b-2 border-l-2 border-fosfo-500">
              <div className="h-4 w-32 bg-zinc-500 rounded"></div>
            </td>
          </tr>
          <tr>
            <td className="p-2 border-b-2 border-fosfo-500">
              <div className="h-4 w-32 bg-zinc-500 rounded"></div>
            </td>
            <td className="p-2 border-b-2 border-l-2 border-fosfo-500">
              <div className="h-4 w-32 bg-zinc-500 rounded"></div>
            </td>
          </tr>
          <tr>
            <td colSpan={2} className="p-2 border-b-2 border-fosfo-500">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-zinc-500 rounded-full"></div>
                <div className="h-4 w-24 bg-zinc-500 rounded"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <section className="text-white flex flex-col p-4 gap-2">
        <div className="h-2 w-[80%] bg-zinc-500 rounded"></div>
        <div className="h-2 w-[78%] bg-zinc-500 rounded"></div>
        <div className="h-2 w-[76%] bg-zinc-500 rounded"></div>
        <div className="h-2 w-[70%] bg-zinc-500 rounded"></div>
        <div className="h-2 w-[60%] bg-zinc-500 rounded"></div>
      </section>
    </article>
  );
}

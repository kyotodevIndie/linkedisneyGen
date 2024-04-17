export const CopyArea = ({ filterPrompont }: { filterPrompont: string }) => {
  return (
    <div className="flex flex-row w-full">
      <div className=" h-8 border border-solid border-slate-400 flex flex-col items-start justify-center border border-zinc-600 text-slate-200 text-sm rounded-[10px_0px_0px_10px] p-5 bg-zinc-800 border-zinc-600 min-w-72">
        {filterPrompont}
      </div>
      {/* <button
        data-tooltip-target="tooltip-light"
        className="w-fit h-8 border border-solid border-slate-400 flex flex-col items-start justify-center border border-zinc-600 text-slate-200 text-sm rounded-[0px_10px_10px_0px]  p-5 bg-zinc-800 border-zinc-600 "
      > */}
      <button
        data-tooltip-target="tooltip-default"
        type="button"
        className="  border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-zinc-800 border-zinc-600 text-slate-200 text-sm rounded-[0px_10px_10px_0px] hover:bg-zinc-700 me-2 mb-2"
      >
        <img src="./assets/icons/copy.svg" alt="copy icon" />
      </button>

      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

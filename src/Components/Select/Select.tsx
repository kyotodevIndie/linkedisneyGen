export const Select = ({ options, label }: any) => {
  return (
    <>
      {console.log(options)}
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 text-white"
      >
        {label}
      </label>
      <select
        id="countries"
        className=" border border-zinc-600 text-slate-200 text-sm rounded-lg block w-full p-2.5 bg-zinc-800 border-zinc-600 placeholder-zinc-400 focus:ring-zinc-500 focus:border-zinc-500"
      >
        {options.map((option: any) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </>
  );
};

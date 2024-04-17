export const TextField = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange?: () => void;
}) => {
  return (
    <>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id="first_name"
        value={value}
        onChange={onChange}
        className="border border-zinc-300 text-slate-200 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-2.5 bg-zinc-800 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-800 focus:border-zinc-500"
        placeholder="..."
      />
    </>
  );
};

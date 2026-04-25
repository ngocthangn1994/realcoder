interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder='Search by title, slug, or tag...'
      className='w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-slate-300 placeholder:text-slate-400 focus:ring-2'
    />
  );
}

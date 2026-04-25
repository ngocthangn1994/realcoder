interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search by title, slug, or tag..."
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm outline-none ring-slate-300 transition focus:ring"
    />
  );
}

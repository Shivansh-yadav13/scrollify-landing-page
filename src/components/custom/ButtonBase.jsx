export default function ButtonBase({ children }) {
  return (
    <button className="text-sm font-medium border border-zinc-900 bg-linear-to-b from-zinc-700 via-zinc-800 to-zinc-900 to-90% text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition">
      {children}
    </button>
  );
}

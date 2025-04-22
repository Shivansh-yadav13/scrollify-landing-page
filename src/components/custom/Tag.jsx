export default function Tag({ children }) {
  return (
    <div className="w-fit mx-auto bg-linear-to-b from-zinc-50 via-zinc-100 to-zinc-100 flex justify-between gap-1 items-center py-1 px-2 rounded-full border border-border text-xs">
      {children}
    </div>
  );
}

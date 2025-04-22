export default function FeatureCard({icon, title, description}) {
  return (
    <div className="bg-linear-to-tl from-zinc-50 via-zinc-100 to-zinc-200 border border-border shadow-xs rounded-2xl p-5 flex items-start gap-4 max-w-md hover:shadow-sm transition">
      <div className="border border-cyan-500 text-white bg-linear-to-br from-cyan-300 via-cyan-500 to-cyan-400 p-3 rounded-xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-para">{description}</p>
      </div>
    </div>
  );
}

export default function Button({ children }) {
  return (
    <button className="w-fit text-sm font-medium bg-white text-black border border-gray-300 p-4 shadow-xs rounded-lg hover:bg-gray-100 transition">
      { children }
    </button>
  );
}
export default function TopBar() {
  return (
    <div className="flex justify-end items-center gap-4 mb-6">
      <input
        className="px-4 py-2 rounded bg-white shadow"
        placeholder="Search here"
      />
      <span className="text-xl">🔔</span>
    </div>
  );
}

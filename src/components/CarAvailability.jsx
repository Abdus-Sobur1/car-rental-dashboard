export default function CarAvailability() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="font-semibold mb-4">Car Availability</h3>
      <div className="flex gap-4 flex-wrap">
        <input className="border px-3 py-2 rounded" placeholder="Car number" />
        <input className="border px-3 py-2 rounded" value="Nov 20, 2022" />
        <input className="border px-3 py-2 rounded" value="10 AM" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Check
        </button>
      </div>
    </div>
  );
}

export default function TableRow({ car, index }) {
  const statusColor = {
    Completed: "bg-green-500",
    Pending: "bg-yellow-500",
    "In route": "bg-red-500"
  };

  return (
    <tr className="border-b">
      <td className="py-3">{index + 1}</td>
      <td>{car.carNo}</td>
      <td>{car.driver}</td>
      <td className="flex items-center gap-2 py-3">
        <span className={`w-3 h-3 rounded-full ${statusColor[car.status]}`} />
        {car.status}
      </td>
      <td>{car.earning}</td>
      <td>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Details
        </button>
      </td>
    </tr>
  );
}

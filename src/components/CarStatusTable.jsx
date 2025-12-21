import TableRow from "./TableRow";
import { cars } from "../data/cars";

export default function CarStatusTable() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-4">Live Car Status</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th>No.</th>
            <th>Car no.</th>
            <th>Driver</th>
            <th>Status</th>
            <th>Earning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <TableRow key={car.id} car={car} index={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StatCard({ stat }) {
  if (stat.list) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-3">{stat.title}</h3>
        {stat.list.map((item) => (
          <div key={item.label} className="flex justify-between mb-2">
            <span className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
              {item.label}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-gray-500">{stat.title}</h3>
      <div className="text-2xl font-bold">{stat.amount}</div>
      <div className={`text-sm ${stat.color}`}>{stat.change}</div>
      <p className="text-sm text-gray-400">{stat.note}</p>
      <p className="text-xs text-gray-500 mt-2">{stat.footer}</p>
    </div>
  );
}

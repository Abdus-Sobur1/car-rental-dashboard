export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold p-6">CAR RENT</h1>
        <nav className="space-y-2 px-4">
          {["Dashboard", "Drivers", "Bookings", "Notifications", "Settings"].map(
            (item) => (
              <button
                key={item}
                className={`w-full text-left px-4 py-2 rounded ${
                  item === "Dashboard"
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                }`}
              >
                {item}
              </button>
            )
          )}
          <div className="mt-4 text-sm text-gray-400">Report</div>
          {["Payment Details", "Transactions", "Car Report"].map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-2 hover:bg-gray-800 rounded"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <button className="m-4 bg-gray-700 py-2 rounded hover:bg-gray-600">
        Logout
      </button>
    </aside>
  );
}

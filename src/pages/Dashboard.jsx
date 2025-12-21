import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import StatCard from "../components/StatCard";
import CarAvailability from "../components/CarAvailability";
import CarStatusTable from "../components/CarStatusTable";
import { stats } from "../data/stats";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <TopBar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>

          <div className="lg:col-span-2">
            <CarAvailability />
            <CarStatusTable />
          </div>
        </div>
      </main>
    </div>
  );
}

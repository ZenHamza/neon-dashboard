"use client";
import { useState, useEffect } from "react";

interface Stat { label: string; value: string; change: string; up: boolean; }
const stats: Stat[] = [
  { label: "Total Users", value: "12,847", change: "+12.3%", up: true },
  { label: "Page Views", value: "84,291", change: "+8.1%", up: true },
  { label: "Bounce Rate", value: "32.4%", change: "-2.4%", up: false },
  { label: "Avg. Session", value: "4m 12s", change: "+5.7%", up: true },
];

export default function Dashboard() {
  const [data, setData] = useState<{ name: string; views: number }[]>([]);
  useEffect(() => {
    setData([
      { name: "Mon", views: 4000 }, { name: "Tue", views: 3000 },
      { name: "Wed", views: 5200 }, { name: "Thu", views: 4800 },
      { name: "Fri", views: 6100 }, { name: "Sat", views: 3900 },
      { name: "Sun", views: 2800 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-void-base p-8">
      <h1 className="text-2xl font-bold text-cyan-400 mb-8">Neon Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-void-elevated rounded-xl border border-white/10 p-5">
            <p className="text-gray-500 text-sm">{s.label}</p>
            <p className="text-3xl font-bold text-gray-100 mt-1">{s.value}</p>
            <p className={`text-sm mt-1 ${s.up ? "text-green-400" : "text-red-400"}`}>{s.change}</p>
          </div>
        ))}
      </div>
      <div className="bg-void-elevated rounded-xl border border-white/10 p-6">
        <h2 className="text-lg font-semibold text-gray-200 mb-4">Weekly Page Views</h2>
        <div className="flex items-end gap-3 h-48">
          {data.map((d) => (
            <div key={d.name} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-cyan-400/80 rounded-t" style={{ height: `${(d.views / 6100) * 100}%` }} />
              <span className="text-xs text-gray-500">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

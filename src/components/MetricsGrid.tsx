"use client";

import StatCard from "./StatCard";

export default function MetricsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 12,
        marginTop: 20,
      }}
    >
      <StatCard title="Конкуренция" value="Средняя" />
      <StatCard title="Объявлений" value="124" />
      <StatCard title="Средняя цена" value="3 490 ₽" />
      <StatCard title="Потенциал" value="Высокий" />
    </div>
  );
}
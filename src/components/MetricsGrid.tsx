import StatCard from "./StatCard";

export default function MetricsGrid({ data }: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: 12,
        marginTop: 24,
      }}
    >
      <StatCard title="Конкуренция" value={data.competition} />
      <StatCard title="Объявлений" value={data.listings} />
      <StatCard title="Средняя цена" value={`${data.avg_price} ₽`} />
      <StatCard title="Потенциал" value={data.potential} />
    </div>
  );
}
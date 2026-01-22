type Props = {
  data: any;
};

export default function AnalysisReport({ data }: Props) {
  const score = data.competition_score;

  return (
    <div className="report">
      <h2>🔍 {data.query} · {data.platform}</h2>

      <section>
        <h3>📊 Конкуренция</h3>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${score}%` }} />
        </div>
        <p>{data.competition} ({score}%)</p>
      </section>

      <section>
        <h3>📦 Рынок</h3>
        <p>Объявлений: <b>{data.listings}</b></p>
        <p>Продавцов: <b>{data.sellers}</b></p>
      </section>

      <section>
        <h3>💰 Цены</h3>
        <p>Средняя: <b>{data.avg_price} ₽</b></p>
        <p>Медиана: <b>{data.median_price} ₽</b></p>
      </section>

      <section>
        <h3>⚠️ Риск</h3>
        <p><b>{data.risk}</b></p>
        <p>{data.recommendation}</p>
      </section>
    </div>
  );
}
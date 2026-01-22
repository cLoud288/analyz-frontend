type Props = {
  data: {
    platform: string;
    query: string;
    competition: string;
    competition_score: number;
    listings: number;
    sellers: number;
    avg_price: number;
    median_price: number;
    potential: string;
    risk: string;
    recommendation: string;
  };
};

export default function AnalysisReport({ data }: Props) {
  return (
    <div className="report">
      <div className="header">
        <span className="badge">{data.platform}</span>
        <h2>{data.query}</h2>
      </div>

      <section>
        <h3>Конкуренция</h3>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${data.competition_score}%` }}
          />
        </div>
        <p>
          {data.competition} · {data.competition_score}%
        </p>
      </section>

      <section className="grid">
        <div className="card">
          <span>Объявлений</span>
          <b>{data.listings}</b>
        </div>
        <div className="card">
          <span>Продавцов</span>
          <b>{data.sellers}</b>
        </div>
        <div className="card">
          <span>Средняя цена</span>
          <b>{data.avg_price} ₽</b>
        </div>
        <div className="card">
          <span>Медиана</span>
          <b>{data.median_price} ₽</b>
        </div>
      </section>

      <section className="alert">
        <b>Риск: {data.risk}</b>
        <p>{data.recommendation}</p>
      </section>

      <section className="potential">
        Потенциал ниши: <b>{data.potential}</b>
      </section>
    </div>
  );
}
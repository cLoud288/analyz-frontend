"use client";

import { useState } from "react";
import { theme } from "@/lib/theme";
import MetricsGrid from "./MetricsGrid";

type Result = {
  competition: string;
  listings: number;
  avg_price: number;
  potential: string;
};

export default function NicheForm() {
  const [platform, setPlatform] = useState("Avito");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function handleAnalyze() {
    if (!query.trim()) {
      setError("Введите запрос");
      return;
    }

    setError(null);
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/analyze`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            platform,
            query,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Ошибка анализа");
      }

      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError("Не удалось выполнить анализ");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.bg,
        padding: 16,
        color: theme.text,
      }}
    >
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          background: theme.panel,
          borderRadius: theme.radius,
          padding: 20,
          border: `1px solid ${theme.border}`,
        }}
      >
        <h1 style={{ fontSize: 26, marginBottom: 20 }}>
          Анализ ниши
        </h1>

        {/* Filters */}
        <div style={{ display: "grid", gap: 14 }}>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: theme.radius,
              background: theme.bg,
              color: theme.text,
              border: `1px solid ${theme.border}`,
            }}
          >
            <option>Avito</option>
            <option>WB</option>
            <option>Ozon</option>
          </select>

          <input
            placeholder="Например: куртка"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: theme.radius,
              background: theme.bg,
              color: theme.text,
              border: `1px solid ${theme.border}`,
            }}
          />

          <button
            onClick={handleAnalyze}
            disabled={loading}
            style={{
              padding: "12px",
              borderRadius: theme.radius,
              background: theme.primary,
              color: "white",
              border: "none",
              fontSize: 16,
              cursor: "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Анализируем..." : "Анализировать"}
          </button>

          {error && (
            <div style={{ color: theme.danger }}>{error}</div>
          )}
        </div>

        {result && <MetricsGrid data={result} />}
      </div>
    </div>
  );
}
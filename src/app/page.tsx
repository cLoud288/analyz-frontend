"use client";

import { useState } from "react";
import AnalysisReport from "@/components/AnalysisReport";

type Status = "idle" | "loading" | "done" | "error";

export default function Page() {
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<any>(null);

  async function analyze() {
    try {
      setStatus("loading");

      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/analyze",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            platform: "WB",
            query: "куртка",
          }),
        }
      );

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setResult(data);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="container">
      <h1 className="title">Анализ ниши</h1>

      {status === "idle" && (
        <button className="primary" onClick={analyze}>
          Проверить нишу
        </button>
      )}

      {status === "loading" && (
        <div className="loading">
          <div className="spinner" />
          <p>Анализируем рынок…</p>
        </div>
      )}

      {status === "done" && (
        <>
          <AnalysisReport data={result} />
          <button className="secondary" onClick={analyze}>
            Проверить ещё раз
          </button>
        </>
      )}

      {status === "error" && (
        <>
          <p className="error">Не удалось выполнить анализ</p>
          <button className="primary" onClick={analyze}>
            Повторить
          </button>
        </>
      )}
    </main>
  );
}
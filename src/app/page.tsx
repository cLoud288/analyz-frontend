"use client";

import { useState } from "react";
import AnalysisReport from "@/components/AnalysisReport";

export default function Page() {
  const [result, setResult] = useState<any>(null);

  async function analyze() {
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

    const data = await res.json();
    setResult(data);
  }

  return (
    <main style={{ padding: 16 }}>
      <button onClick={analyze}>Проверить нишу</button>
      {result && <AnalysisReport data={result} />}
    </main>
  );
}
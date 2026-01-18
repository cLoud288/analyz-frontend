"use client";

import { useEffect, useState } from "react";
import { initTelegram } from "@/lib/telegram";
import { analyzeNiche } from "@/lib/api";

export default function NicheForm() {
  const [initData, setInitData] = useState<string | null>(null);
  const [telegramError, setTelegramError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // ⬇️ FIX: default platform
  const [platform, setPlatform] = useState("avito");
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const tg = initTelegram();
      if (!tg?.initData) {
        throw new Error("Откройте приложение из Telegram");
      }
      setInitData(tg.initData);
    } catch (e: any) {
      setTelegramError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) return null;

  if (telegramError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {telegramError}
      </div>
    );
  }

  async function onCheck() {
    const cleanPlatform = platform.trim();
    const cleanQuery = query.trim();

    if (!cleanPlatform || !cleanQuery) {
      setError("Заполните все поля");
      return;
    }

    setError(null);
    const data = await analyzeNiche(cleanPlatform, cleanQuery, initData!);
    setResult(data);
  }

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold">Анализ ниши</h1>

      {error && <div className="text-red-500">{error}</div>}

      <select
        className="w-full border p-2"
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="avito">Avito</option>
        <option value="ozon">Ozon</option>
        <option value="wb">Wildberries</option>
      </select>

      <input
        className="w-full border p-2"
        placeholder="Куртка"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        className="w-full bg-black text-white p-2"
        onClick={onCheck}
      >
        Проверить
      </button>

      {result && (
        <pre className="bg-gray-100 p-2 text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
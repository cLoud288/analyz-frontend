"use client";

import { useEffect, useState } from "react";

export default function NicheForm() {
  const [ready, setReady] = useState(false);
  const [initData, setInitData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const tg = (window as any)?.Telegram?.WebApp;

    if (!tg) {
      setError("Откройте приложение из Telegram");
      return;
    }

    tg.ready();
    tg.expand();

    if (!tg.initData) {
      setError("Нет initData от Telegram");
      return;
    }

    setInitData(tg.initData);
    setReady(true);
  }, []);

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>
        {error}
      </div>
    );
  }

  if (!ready) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        Загрузка…
      </div>
    );
  }

  return (
    <div>
      {/* ТВОЯ ФОРМА ТУТ */}
      <h1>Анализ ниши</h1>
    </div>
  );
}
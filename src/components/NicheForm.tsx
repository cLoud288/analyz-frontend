"use client";

import { theme } from "@/lib/theme";

export default function NicheForm() {
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
          maxWidth: 420,
          margin: "0 auto",
          background: theme.card,
          borderRadius: theme.radius,
          padding: 20,
          border: `1px solid ${theme.border}`,
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 24 }}>Анализ ниши</h1>

        {/* Площадка */}
        <label style={{ fontSize: 14, color: theme.muted }}>
          Площадка
        </label>
        <select
          style={{
            width: "100%",
            marginTop: 6,
            padding: "10px 12px",
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

        {/* Запрос */}
        <label
          style={{
            fontSize: 14,
            color: theme.muted,
            marginTop: 16,
            display: "block",
          }}
        >
          Запрос
        </label>
        <input
          placeholder="Например: куртка"
          style={{
            width: "100%",
            marginTop: 6,
            padding: "10px 12px",
            borderRadius: theme.radius,
            background: theme.bg,
            color: theme.text,
            border: `1px solid ${theme.border}`,
          }}
        />

        {/* Кнопка */}
        <button
          style={{
            width: "100%",
            marginTop: 20,
            padding: "12px",
            borderRadius: theme.radius,
            background: theme.primary,
            color: "white",
            border: "none",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Проверить нишу
        </button>
      </div>
    </div>
  );
}
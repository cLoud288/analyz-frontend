"use client";

import { theme } from "@/lib/theme";
import MetricsGrid from "./MetricsGrid";

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
          <div>
            <label style={{ fontSize: 13, color: theme.muted }}>
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
          </div>

          <div>
            <label style={{ fontSize: 13, color: theme.muted }}>
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
          </div>

          <button
            style={{
              marginTop: 10,
              padding: "12px",
              borderRadius: theme.radius,
              background: theme.primary,
              color: "white",
              border: "none",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Анализировать
          </button>
        </div>

        {/* Results */}
        <MetricsGrid />
      </div>
    </div>
  );
}
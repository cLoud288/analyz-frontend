"use client";

import { theme } from "@/lib/theme";

type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div
      style={{
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderRadius: theme.radius,
        padding: 16,
      }}
    >
      <div style={{ fontSize: 13, color: theme.muted }}>{title}</div>
      <div style={{ fontSize: 22, marginTop: 6 }}>{value}</div>
    </div>
  );
}
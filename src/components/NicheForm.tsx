"use client";

export default function NicheForm() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: 20,
        minHeight: "100vh",
      }}
    >
      <h1>Анализ ниши</h1>

      <div style={{ marginTop: 20 }}>
        <label>Площадка</label>
        <select style={{ display: "block", width: "100%", marginTop: 8 }}>
          <option>Avito</option>
          <option>WB</option>
          <option>Ozon</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Запрос</label>
        <input
          style={{ display: "block", width: "100%", marginTop: 8 }}
          placeholder="Например: куртка"
        />
      </div>

      <button style={{ marginTop: 20 }}>Проверить</button>
    </div>
  );
}
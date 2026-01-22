async function safeJson(res: Response) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    console.error("Invalid JSON:", text);
    throw new Error("Invalid backend response");
  }
}

export async function analyzeNiche(
  platform: string,
  query: string,
  initData: string
) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const res = await fetch(`${API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Init-Data": initData,
    },
    body: JSON.stringify({ platform, query }),
  });

  if (!res.ok) {
    throw new Error("Analyze request failed");
  }

  return safeJson(res);
}
"use server";

interface ApiResult {
  タイトル: string;
  内容: string;
}

export async function submitForm(
  prevState: ApiResult | null,
  formData: FormData
): Promise<ApiResult | null> {
  const text = formData.get("text") as string;

  if (!text?.trim()) {
    return null;
  }

  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_N8N_URL ||
        "https://ren21.app.n8n.cloud/webhook-test/f3f298fe-185e-44b3-9a0e-09bb7a5347c0",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      }
    );

    if (!res.ok) {
      throw new Error("API request failed");
    }

    const data = await res.json();
    return data[0]?.output || null;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

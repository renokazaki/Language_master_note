"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const SubmitButton = ({ word }: { word: string }) => {
  const [response, setResponse] = useState<
    object | string | number | boolean | null
  >(null);
  async function callN8nApi(word: string) {
    const baseUrl =
      process.env.NEXT_PUBLIC_N8N_URL ||
      "https://ren21.app.n8n.cloud/webhook-test/f3f298fe-185e-44b3-9a0e-09bb7a5347c0";
    const res = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ word }),
      cache: "no-store",
    });
    return res.json();
  }
  return (
    <div>
      <Button
        onClick={async () => {
          const res = await callN8nApi(word);
          setResponse(res);
        }}
      >
        【{word}】を使ってAIに例文を考えてもらう
      </Button>
      {response !== null && response !== undefined && (
        <pre
          style={{ marginTop: "1em", background: "#f5f5f5", padding: "1em" }}
        >
          {typeof response === "object"
            ? JSON.stringify(response, null, 2)
            : String(response)}
        </pre>
      )}
    </div>
  );
};

export default SubmitButton;

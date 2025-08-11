"use client";

import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { submitForm } from "./action";

interface ApiResult {
  タイトル: string;
  内容: string;
}

export default function N8ntest() {
  const [result, formAction] = useActionState<ApiResult | null, FormData>(
    submitForm,
    null
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">N8ntest Page</h1>

      <form
        className="flex flex-col gap-2 p-4 bg-amber-300 rounded-lg mb-6"
        action={formAction}
      >
        <input
          type="text"
          name="text"
          placeholder="Enter text"
          className="p-2 rounded border"
          required
        />
        <Button type="submit">Submit</Button>
      </form>

      {result && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">API取得結果</h2>
          <div className="mb-4">
            <h3 className="font-semibold text-blue-600">タイトル:</h3>
            <p className="bg-gray-50 p-3 rounded">{result.タイトル}</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600">内容:</h3>
            <div className="bg-gray-50 p-3 rounded whitespace-pre-wrap">
              {result.内容}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

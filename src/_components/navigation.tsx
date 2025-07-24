import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="p-4 md:p-6 space-y-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Language Master Notes</h1>
      <div className="flex gap-2">
        <Link href="/new">
          <Button className="bg-blue-500 text-white">新規追加</Button>
        </Link>
      </div>
    </div>
  );
}

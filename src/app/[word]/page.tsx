import Link from "next/link";
import SubmitButton from "./SubmitButton";

export default async function WordPage({
  params,
}: {
  params: Promise<{ word: string }>;
}) {
  const { word } = await params;

  return (
    <div>
      WordPage {word}
      <SubmitButton word={word} />
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}

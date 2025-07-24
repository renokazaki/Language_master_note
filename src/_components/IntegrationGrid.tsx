import type { Integration } from "../data/integrations";
import IntegrationCard from "./IntegrationCard";
import Link from "next/link";

type IntegrationGridProps = {
  integrations: Integration[];
};

export default function IntegrationGrid({
  integrations,
}: IntegrationGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {integrations.map((integration) => (
        <Link key={integration.id} href={`/${integration.name}`}>
          <IntegrationCard integration={integration} />
        </Link>
      ))}
    </div>
  );
}

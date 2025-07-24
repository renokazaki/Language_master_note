import type { Integration } from "../data/integrations";
import { Card, CardContent } from "@/components/ui/card";

type IntegrationCardProps = {
  integration: Integration;
};

export default function IntegrationCard({ integration }: IntegrationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex flex-col items-center text-center space-y-2 mb-2">
          <h3 className="font-semibold text-sm">{integration.name}</h3>
        </div>
      </CardContent>
    </Card>
  );
}

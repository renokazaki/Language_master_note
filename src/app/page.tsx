import { integrations } from "../data/integrations";

import IntegrationGrid from "../_components/IntegrationGrid";

export default function IntegrationsPage() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto px-4 md:px-6">
          <IntegrationGrid integrations={integrations} />
        </div>
        <div className="p-4 md:p-6 border-t"></div>
      </main>
    </div>
  );
}

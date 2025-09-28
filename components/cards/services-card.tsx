import { Globe, Smartphone, Zap, Database, Code, Server } from "lucide-react";
import { BaseCard } from "@/components/base";
import { AnimatedList } from "@/components/common/animated-list";

export function ServicesCard() {
  const services = {
    frontend: [
      {
        id: "responsividade",
        name: "Responsividade",
        icon: Globe,
        color: "text-blue-400",
      },
      {
        id: "apps-mobile",
        name: "Apps Mobile",
        icon: Smartphone,
        color: "text-green-400",
      },
      {
        id: "ui-ux",
        name: "UI/UX Design",
        icon: Code,
        color: "text-purple-400",
      },
    ],
    backend: [
      {
        id: "apis",
        name: "APIs RESTful",
        icon: Server,
        color: "text-orange-400",
      },
      {
        id: "banco-dados",
        name: "Banco de Dados",
        icon: Database,
        color: "text-indigo-400",
      },
      {
        id: "performance",
        name: "Performance",
        icon: Zap,
        color: "text-yellow-400",
      },
    ],
  };

  return (
    <BaseCard
      title="Serviços"
      icon={Globe}
      className="lg:text-2xl"
      id="services-card"
    >
      <div className="space-y-6">
        {/* Frontend Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Frontend
            </h4>
          </div>
          <AnimatedList
            items={services.frontend}
            renderItem={(service) => {
              const IconComponent = service.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${service.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {service.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        {/* Backend Services */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-green-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Backend
            </h4>
          </div>
          <AnimatedList
            items={services.backend}
            renderItem={(service) => {
              const IconComponent = service.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${service.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {service.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 gap-2"
          />
        </div>
      </div>
    </BaseCard>
  );
}

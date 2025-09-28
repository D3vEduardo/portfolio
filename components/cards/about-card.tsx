import { Badge } from "@/components/ui/components";
import { User, Target, Code, TrendingUp } from "lucide-react";
import { BaseCard } from "../base/index";
import AnimatedText, { SplitTypesEnum } from "../common/animated-text";
import { AnimatedList } from "../common/animated-list";

export function AboutCard() {
  const highlights = [
    { id: 1, icon: Target, text: "Foco em UX/UI" },
    { id: 2, icon: Code, text: "Código limpo" },
    { id: 3, icon: TrendingUp, text: "Performance otimizada" },
    { id: 4, icon: User, text: "Aprendizado contínuo" },
  ];

  return (
    <BaseCard title="Sobre" icon={User} id="about-card">
      <div className="space-y-4">
        <AnimatedText
          splitType={SplitTypesEnum.words}
          wrapper="p"
          text="Desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. Atuo desde 2023 transformando
          ideias em experiências web incríveis."
          className="text-card-foreground leading-relaxed text-pretty"
        />

        <div className="space-y-3">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Highlights
          </h4>
          <AnimatedList
            items={highlights}
            renderItem={(highlight) => (
              <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                <highlight.icon className="w-4 h-4 text-primary" />
                <span className="text-sm">{highlight.text}</span>
              </div>
            )}
            className="grid grid-cols-2 gap-2"
          />
        </div>

        <div className="pt-2">
          <Badge variant="secondary" className="text-xs">
            Ativo desde 2023
          </Badge>
        </div>
      </div>
    </BaseCard>
  );
}

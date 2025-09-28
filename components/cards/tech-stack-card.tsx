import { Code, Server, Wrench } from "lucide-react";
import { BaseCard } from "@/components/base";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiFastify,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiVite,
  SiReactquery,
  SiReacthookform,
} from "react-icons/si";
import { AnimatedList } from "@/components/common/animated-list";

export function TechStackCard() {
  const techStack = {
    frontend: [
      { id: "react", name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      {
        id: "nextjs",
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-foreground",
      },
      {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-[#3178C6]",
      },
      {
        id: "tailwind",
        name: "TailwindCSS",
        icon: SiTailwindcss,
        color: "text-[#06B6D4]",
      },
      { id: "html5", name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
    ],
    backend: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#339933]",
      },
      {
        id: "fastify",
        name: "Fastify",
        icon: SiFastify,
        color: "text-foreground",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-[#336791]",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      { id: "prisma", name: "Prisma", icon: SiPrisma, color: "text-[#2D3748]" },
    ],
    tools: [
      { id: "git", name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { id: "vite", name: "Vite", icon: SiVite, color: "text-[#646CFF]" },
      {
        id: "react-query",
        name: "React Query",
        icon: SiReactquery,
        color: "text-[#FF4154]",
      },
      {
        id: "react-hook-form",
        name: "React Hook Form",
        icon: SiReacthookform,
        color: "text-[#EC5990]",
      },
    ],
  };

  return (
    <BaseCard
      title="Stack Tecnológica"
      icon={Code}
      className="lg:text-2xl"
      id="tech-stack-card"
    >
      <div className="space-y-6">
        {/* Frontend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Frontend
            </h4>
          </div>
          <AnimatedList
            items={techStack.frontend}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          />
        </div>

        {/* Backend */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-green-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Backend
            </h4>
          </div>
          <AnimatedList
            items={techStack.backend}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
                  </span>
                </div>
              );
            }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          />
        </div>

        {/* Ferramentas */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-orange-400" />
            <h4 className="font-semibold text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
              Ferramentas
            </h4>
          </div>
          <AnimatedList
            items={techStack.tools}
            renderItem={(tech) => {
              const IconComponent = tech.icon;
              return (
                <div className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-secondary/50">
                  <IconComponent
                    className={`text-base sm:text-lg ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium truncate">
                    {tech.name}
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

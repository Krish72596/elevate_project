import React, { useState } from "react";
import ContestCard, { Contest } from "@/components/ContestCard";

const generateSample = () =>
  Array.from({ length: 6 }).map((_, i) => ({
    id: `h-${i + 1}`,
    title: `Hackathon ${i + 1}`,
    shortLabel: "HACK",
    time: "10:00-18:00",
    date: "10/10/2025",
    description:
      "Hackathon details: themes, prizes, teams allowed, submission deadline and links. (Placeholder content.)",
    tags: ["Open", "Team"],
    location: "In-person / Online",
    registerUrl: "#",
  })) as Contest[];

const Hackathons = () => {
  const items = generateSample();
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const handleToggle = (id: string | number) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold text-white mb-6">Hackathons</h1>
      <section className="max-w-6xl mx-auto">
        {items.map((it) => (
          <ContestCard key={it.id} item={it} expanded={expandedId === it.id} onToggle={handleToggle} />
        ))}
      </section>
    </main>
  );
};

export default Hackathons;
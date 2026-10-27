import SkillCard from "@/components/SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    level: "Learning",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Full-Stack Foundations",
    level: "Growing",
    skills: ["TypeScript", "Git & GitHub", "APIs", "Component Design"],
  },
  {
    category: "Course Focus",
    level: "WDD 430",
    skills: ["App Router", "Server Components", "Portfolio Development"],
  },
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m Luis Emilio Nathanael De la rosa Meneses, a student in WDD 430
        Web Full-Stack Development. I enjoy building useful web applications,
        learning modern frameworks like Next.js, and improving through
        hands-on projects and teamwork.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-900">
        Technical Skills
      </h3>
      <section className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.category}
            category={group.category}
            skills={group.skills}
            level={group.level}
          />
        ))}
      </section>
    </main>
  );
}

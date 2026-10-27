interface SkillCardProps {
  category: string;
  skills: string[];
  level: string;
}

export default function SkillCard({ category, skills, level }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-900">{category}</h3>
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {level}
        </span>
      </div>
      <ul className="list-disc space-y-1 pl-5 text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}

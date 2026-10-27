import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "WDD 430 Portfolio",
    description:
      "My course portfolio site built with the Next.js App Router, TypeScript, and Tailwind CSS. It showcases reusable server components, file-based routing, and a simple API route.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Lendherm/wdd430-portfolio",
  },
  {
    title: "React DOM Practice",
    description:
      "A Week 01 learning activity comparing direct DOM manipulation with React components, using Babel standalone to transpile JSX in the browser.",
    technologies: ["React", "JavaScript", "Babel", "HTML"],
    link: "https://github.com/Lendherm/wdd430-portfolio/tree/main/week01/react-dom-practice",
  },
  {
    title: "Stripe Dashboard Tech Stack Research",
    description:
      "Research and architecture diagram exploring how Stripe Dashboard connects frontend, backend, and data layers in a real full-stack product.",
    technologies: ["Technical Writing", "Architecture", "Full-Stack Concepts"],
    link: "https://github.com/Lendherm/wdd430-portfolio/tree/main/week01/forum",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I&apos;m Luis Emilio Nathanael De la rosa Meneses, a full-stack
          developer learning Next.js and React. Here are some of my recent
          projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}

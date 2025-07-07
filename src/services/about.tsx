export type About = {
  index: number;
  numberOfItems: number;
  title: string;
  description: string;
  date: string;
};

export const abouts: About[] = [
  {
    index: 1,
    numberOfItems: 3,
    title: "Passionate about creating meaningful digital experiences",
    description:
      "With over 5 years of experience in web development, I specialize in building modern, responsive applications that solve real-world problems. My journey in tech started with a curiosity about how things work on the web.",
    date: "Mar 25, 2022",
  },
  {
    index: 2,
    numberOfItems: 3,
    title: "Full-stack developer with a focus on user experience",
    description:
      "I believe that great software is built at the intersection of clean code and intuitive design. My expertise spans React, TypeScript, Node.js, and modern web technologies that deliver exceptional user experiences.",
    date: "Mar 25, 2024",
  },
  {
    index: 3,
    numberOfItems: 3,
    title: "Committed to continuous learning and innovation",
    description:
      "Technology evolves rapidly, and I stay current with the latest trends and best practices. From performance optimization to accessibility, I ensure every project meets the highest standards of quality and maintainability.",
    date: "Mar 20, 2025",
  },
];

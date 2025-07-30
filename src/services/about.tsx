export type About = {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  link: string;
};

export const aboutMock: About[] = [
  {
    title: "Education",
    description:
      "I am currently a third-year undergraduate student majoring in Information Technology at the University of Transport and Communications – Ho Chi Minh City Campus.",
    startTime: "June 2022",
    endTime: "Now",
    link: "https://www.google.com",
  },
  {
    title: "Certifications",
    description:
      "Google UX Design Professional Certificate\nIssued by Coursera / Google\nCompleted: [Tháng/Năm]\nCredential ID: [Mã chứng chỉ nếu có]\nLink to Certificate (nếu có thể chia sẻ công khai)",
    startTime: "April 2024",
    endTime: "May 2024",
    link: "https://www.google.com",
  },
];

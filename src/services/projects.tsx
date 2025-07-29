export type Project = {
  id: string;
  name: string;
  time: string;
  image: string;
  description: string;
  link: string;
};

export const projectsMock: Project[] = [
  {
    id: "1",
    name: "Noir",
    time: "Sep 10, 2024",
    image:
      "https://static.wixstatic.com/media/bb0466_b29ff5e5635748d8a412656cf9a09bc2~mv2.png/v1/fill/w_1310,h_754,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Noir.png",
    description:
      "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    link: "https://www.google.com",
  },
  {
    id: "2",
    name: "Noir",
    time: "Sep 10, 2024",
    image:
      "https://static.wixstatic.com/media/bb0466_b29ff5e5635748d8a412656cf9a09bc2~mv2.png/v1/fill/w_1310,h_754,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Noir.png",
    description:
      "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    link: "https://www.google.com",
  },
];

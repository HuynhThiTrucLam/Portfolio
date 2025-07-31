export type Project = {
  id: string;
  name: string;
  time: string;
  image: string;
  subImage: string;
  description: string;
  linkToLive: string;
  linkToFigma: string;
};

export const projectsMock: Project[] = [
  {
    id: "1",
    name: "Yup",
    time: "Sep 10, 2024",
    image:
      "https://ik.imagekit.io/mku5dcybr/Yup!%20Everything%20on%20Your%20Phone!%20(1).svg?updatedAt=1753927203711",
    subImage:
      "https://ik.imagekit.io/mku5dcybr/Yup!%20Everything%20on%20Your%20Phone!%20(1).svg?updatedAt=1753927203711",
    description:
      "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    linkToLive: "",
    linkToFigma:
      "https://www.figma.com/design/PQE6TnDsO6tFkvvtfbPBpu/Yup?node-id=2263-1862&t=whoxc93T1RaT9Pxu-1",
  },
  {
    id: "2",
    name: "Noir",
    time: "Sep 10, 2024",
    image:
      "https://static.wixstatic.com/media/bb0466_b29ff5e5635748d8a412656cf9a09bc2~mv2.png/v1/fill/w_1310,h_754,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Noir.png",
    subImage:
      "https://static.wixstatic.com/media/bb0466_b29ff5e5635748d8a412656cf9a09bc2~mv2.png/v1/fill/w_1310,h_754,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Noir.png",
    description:
      "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    linkToLive: "https://www.google.com",
    linkToFigma: "https://www.google.com",
  },
  {
    id: "3",
    name: "Melody",
    time: "Feb 01, 2025",
    image: "https://ik.imagekit.io/mku5dcybr/Me.png?updatedAt=1753894222146",
    subImage: "https://ik.imagekit.io/mku5dcybr/Me.png?updatedAt=1753894222146",
    description:
      "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    linkToLive: "",
    linkToFigma:
      "https://www.figma.com/design/1ZbA0tZ6xvl7DdpvZaBlCV/Music-Mobile-App--Android-?node-id=94-2888&t=h34IL2iZUfjSwpMO-1",
  },
  // {
  //   id: "4",
  //   name: "EduSprout",
  //   time: "Feb 01, 2025",
  //   image:
  //     "https://ik.imagekit.io/mku5dcybr/EduSprout.svg?updatedAt=1753931322829",
  //   subImage:
  //     "https://ik.imagekit.io/mku5dcybr/EduSprout.svg?updatedAt=1753931322829",
  //   description:
  //     "Lorem Ipsum is siLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  //   linkToLive: "https://edu-sprout.vercel.app",
  //   linkToFigma:
  //     "https://www.figma.com/design/SM0kRu3NpUN8MVrPkFprVo/EduSprout?node-id=368-136&t=3RU8YIitVi3SnAH9-1",
  // },
];

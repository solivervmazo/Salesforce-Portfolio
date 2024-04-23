import { LightningElement } from "lwc";

const BIOS = [
  {
    id: 1,
    bio: `Hello, I'm Soliver, a professional with a diverse background in software development and a passion for data analytics. From 2015 to 2019, I dedicated myself to the world of software development, honing my skills in various programming languages and frameworks. During those years, I had the opportunity to work on several exciting projects, gaining valuable experience in creating efficient and innovative software solutions.`
  },
  {
    id: 2,
    bio: `However, due to the demands of my family business, I had to temporarily step away from my software development career. As an individual committed to family responsibilities, I dedicated my time and energy to ensuring the success and growth of our family business. While this was a rewarding experience, my passion for data analysis and technology never waned.`
  },
  {
    id: 3,
    bio: `Now, as I seek to re-enter the professional world as a data analyst, I am excited to leverage my software development background to explore new opportunities in the field of data analytics. I believe that my strong foundation in programming, combined with my analytical mindset and attention to detail, will allow me to excel in this evolving industry.`
  },
  {
    id: 4,
    bio: `Although I have yet to determine a specific industry in which to focus my data analytics career, I approach this decision with an open mind and eagerness to learn. I understand the power of data-driven decision-making and the immense potential it holds across various sectors. With my strong analytical skills and technical acumen, I am confident in my ability to adapt and contribute to any industry that values the transformative potential of data analytics.`
  },
  {
    id: 5,
    bio: `I am eager to engage with like-minded professionals and organizations that value data-driven insights and are open to innovative approaches to problem-solving. Together, we can harness the power of data to drive informed decision-making, uncover valuable insights, and unlock new opportunities for growth.`
  },
  {
    id: 5,
    bio: `I look forward to embarking on this exciting journey as a data analyst and contributing to the advancement of data-driven practices in whichever industry I ultimately choose.`
  }
];
export default class AboutMe extends LightningElement {
  bios;

  connectedCallback() {
    this.bios = BIOS;
  }
}

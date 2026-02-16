import News from "assets/news.jpg";
import Copilot from "assets/GithubCopilot.jpg";
import Scooter from "assets/redbull_scooter.jpg";
import Software from "assets/building_software.jpg";
import Windows from "assets/copilot-chat.webp"
import HeroImage from "assets/hero.jpg";
import Koo from "assets/koo-app.jpg";
import KooPage from "assets/koo-page.jpg";
import SoftwareG from "assets/building_software_G.jpg";

const products = [
  {
    id: 1,
    title: "GitHub Copilot",
    slang: "GitHub-Copilot",
    summary:
      "GitHub Copilot is revolutionizing how we code — here’s a practical walkthrough I found especially useful!",
    image: Copilot,
    imageHero: Windows,
    address: "https://youtu.be/DeO7xLXORpY"
  },
  {
    id: 2,
    title: "Koo",
    slang: "Koo",
    summary: "Know what's happening! It empowers people to express their thoughts in a language of their choice. It houses social news and updates from millions of people. Koo is built for people to share their views in their mother tongue, connect with others in your language and have meaningful / respectful discussions.",
    image: Koo,
    imageHero: KooPage,
    address: "https://www.kooapp.com/",
  },
  {
    id: 3,
    title: "Refactoring Without Breaking Production",
    slang: "Refactoring Without Breaking Production",
    summary:
      "Martin Fowler – Refactoring & Evolutionary Design.",
    image: Software,
    imageHero: SoftwareG,
    address: "https://martinfowler.com",
  },
  {
    id: 4,
    title: "F1 Eletric Scooter",
    slang: "F1-Eletric-Scooter",
    summary: "A supremely advanced eScooter developed by World Champions.",
    image: Scooter,
    imageHero: HeroImage,
    address: "https://raceescooter.com/?utm_source=SEM&utm_medium=Google&utm_campaign=SEARCH_ADS&gclid=EAIaIQobChMItvHll-a7-wIVngatBh3j-Q7UEAAYASAAEgJjd_D_BwE",
  },
  {
    id: 5,
    title: "News 5",
    slang: "News-5",
    summary: "News 5",
    image: News,
    imageHero: HeroImage,
  },
];

export const useProducts = () => {
  return products;
};

export const useProduct = ({ slang }) => {
  return products.find((p) => p.slang === slang);
};

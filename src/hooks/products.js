import News from "assets/news.jpg";
import Net7 from "assets/NET_7.jpg";
import Scooter from "assets/redbull_scooter.jpg";
import Piano from "assets/Kawai_NV10.jpg";
import Windows from "assets/windows.jpg"
import HeroImage from "assets/hero.jpg";
import Koo from "assets/koo-app.jpg";
import KooPage from "assets/koo-page.jpg";
import PianoK from "assets/Kawai-Hero.jpg";

const products = [
  {
    id: 1,
    title: ".NET 7",
    slang: ".NET-7",
    summary:
      ".NET 7 brings your apps increased performance and new features for C# 11/F# 7, .NET MAUI, ASP.NET Core/Blazor, Web APIs, WinForms, WPF and more.",
    image: Net7,
    imageHero: Windows,
    address: "https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/"
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
    title: "Hybrid Piano",
    slang: "Hybrid-Piano",
    summary:
      "The NOVUS NV10S Hybrid digital piano is a celebration of Kawai’s 90 years of piano-making expertise that encapsulates the many acoustic and digital piano innovations achieved over these many decades.",
    image: Piano,
    imageHero: PianoK,
    address: "https://kawaius.com/product/novus-nv10s/",
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

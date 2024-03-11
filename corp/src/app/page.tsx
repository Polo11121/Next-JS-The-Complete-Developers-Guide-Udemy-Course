import homeImg from "@/public/home.jpg";
import { Hero } from "@/components";

const HomePage = () => (
  <Hero
    title="Professional Cloud Hosting"
    imgAlt="car factory"
    imgData={homeImg}
  />
);

export default HomePage;

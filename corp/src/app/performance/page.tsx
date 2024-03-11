import performanceImage from "@/public/performance.jpg";
import { Hero } from "@/components";

const PerformancePage = () => (
  <Hero
    title="We serve high performance applications"
    imgAlt="welding"
    imgData={performanceImage}
  />
);

export default PerformancePage;

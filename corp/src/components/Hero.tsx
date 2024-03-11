import Image, { StaticImageData } from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

export const Hero = ({ imgData, imgAlt, title }: HeroProps) => (
  <div className="relative h-screen">
    <div className="absolute -z-10 inset-0">
      <Image className="object-cover" src={imgData} alt={imgAlt} fill />
    </div>
    <div className="bg-gradient-to-r from-slate-900 absolute inset-0">
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  </div>
);

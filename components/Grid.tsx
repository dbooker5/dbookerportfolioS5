import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    // ADDED: relative and z-20 to ensure it's above the hero background
    <section
      id="about"
      className="relative z-20 w-full py-20 bg-black-100 rounded-3xl mx-4 md:mx-8"
    >
      {/* Heading */}
      <div className="flex flex-col items-center mb-16 px-4">
        <h1 className="heading text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-7xl">
          About <span className="text-purple">Me</span>
        </h1>
        <p className="text-white-200 text-center mt-4 max-w-2xl">
          Learn more about my skills, experience, and passion for development
        </p>
      </div>

      {/* BentoGrid */}
      <BentoGrid className="w-full max-w-7xl mx-auto px-4">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            glowColor={
              item.glowColor as "blue" | "purple" | "green" | "cyan" | undefined
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;

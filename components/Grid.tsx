import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="w-full pb-10 mb-[100px] md:mb-5">
      {/* Heading OUTSIDE the BentoGrid */}
      <div className="flex flex-col items-center mb-10">
        <h1 className="heading lg:max-w-[45vw] text-center">
          About <span className="text-purple">Me</span>
        </h1>
      </div>

      {/* BentoGrid with items */}
      <BentoGrid className="w-full py-20">
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
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
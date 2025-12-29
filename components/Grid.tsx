import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="py-20">
      {/* About header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 text-center">
        <p className="uppercase tracking-widest text-xs text-blue-100">
          ABOUT ME
        </p>

        <h2 className="text-white text-3xl md:text-5xl font-bold mt-3">
          A Glimpse Into My World
        </h2>

        <p className="text-[#C1C2D3] mt-4 max-w-2xl mx-auto text-sm md:text-lg">
          Learn more about who I am, what I do, and what inspires me.
        </p>

        {/* Grid */}
        <BentoGrid className="w-full mt-14">
          {gridItems.map((item, i) => (
            <BentoGridItem
              id={item.id}
              key={i}
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
      </div>
    </section>
  );
};

export default Grid;

import { DetailsText } from "../detailsText";
import { Bookmarks } from "../bookmark";
import { mediaType } from "../SVGAssets";
import Image from "next/image";
import { DeleteMedia } from "../deleteMedia";
import { Play } from "../playButton";
import { motion} from "framer-motion";

type gridProps = {
  header: string;
  data: mediaType[] | undefined;
};

export default function MediaGrid({ data, header }: gridProps) {
  const heading = <h2>{header}</h2>;

  const mediaGrids = data?.map((item, index) => {
    return (
      <motion.div
        key={index + 1}
        initial={{opacity:0.5}}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8}}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className={`group flex flex-col flex-shrink-0 xl:w-[280px] w-[164px] ${item.isAI ? 'xl:h-[331px] h-[208px] sm:h-[275px]' : 'xl:h-[226px] h-[154px] sm:h-[192px]'} sm:w-[220px] relative`}>
          <div className="relative group">
            <Image
              src={item.thumbnail.regular.large.substring(1)}
              width={280}
              height={174}
              alt={"media" + (index + 1)}
              className={`absolute w-[164px] sm:w-[220px] ${item.isAI ? 'xl:h-[280px]':'sm:h-[140px] h-[110px] xl:h-[174px]'} top-0 xl:w-[280px] rounded`}
            />

            <span className="absolute z-40 top-4 right-4">
              <Bookmarks item={item} />
            </span>

            <span className="absolute hidden group-hover:block z-40 top-4 left-4">
              <DeleteMedia item={item} />
            </span>
          </div>
          <div className="absolute bottom-0 left-0">
            <DetailsText
              item={item}
              pSize={"text-[.8125rem]"}
              titleSize={"sm:text-lg text-sm"}
            />
          </div>

          <div className="relative w-[117px] top-[29%] hidden group-hover:block mx-auto">
            <Play />
          </div>
        </div>
      </motion.div>
    );
  });

  return (
    <section className="flex mx-auto 2xl:mx-[unset] flex-col gap-8">
      {heading}
      <div className="grid w-fit mx-auto 2xl:mx-[unset] md:grid-cols-3 grid-cols-2 gap-x-[15px] 2xl:grid-cols-4 md:gap-x-[30px] xl:gap-x-10 gap-y-8">
        {mediaGrids}
      </div>
    </section>
  );
}

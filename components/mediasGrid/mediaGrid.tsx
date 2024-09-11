import { DetailsText } from "../detailsText";
import { Bookmarks } from "../bookmark";
<<<<<<< HEAD
import { mediaType } from "../SVGAssets";
=======
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
import Image from "next/image";
import { Media } from "@/hooks";

type gridProps = {
<<<<<<< HEAD
  data: mediaType[]|undefined
=======
  data: Media[];
>>>>>>> e1af1bcb863e4b3ddf029083de0a0b533f3793c4
  header: string;
};

export default function MediaGrid({data, header,}: gridProps) {
  const heading = <h2>{header}</h2>;

  const mediaGrids = data?.map((item, index) => {
    return (
      <div key={index + 1} className="w-[280px] h-[226px] relative">
        <div className="relative">
          <Image
            src={item.thumbnail.regular.large.substring(1)}
            width={280}
            height={174}
            alt={"media" + (index + 1)}
            className="absolute top-0 rounded"
          />
          <span className="absolute z-50 top-4 right-4">
            <Bookmarks
              item={item}
            />
          </span>
        </div>
        <div className="absolute bottom-0 left-0">
          <DetailsText
            item={item}
            pSize={"text-[.8125rem]"}
            titleSize={"text-lg"}
          />
        </div>
      </div>
    );
  });

  return (
    <section className="w-[1220px] flex flex-col gap-8">
      {heading}
      <div className="grid grid-cols-4 gap-x-10 gap-y-8">{mediaGrids}</div>
    </section>
  );
}
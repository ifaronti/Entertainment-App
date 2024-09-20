import { DetailsText } from "../detailsText";
import { Bookmarks } from "../bookmark";
import { mediaType } from "../SVGAssets";
import Image from "next/image";
import { DeleteMedia } from "../deleteMedia";

type gridProps = {
  header: string
  data: mediaType[] | undefined
}

export default function MediaGrid({data, header,}: gridProps) {
  const heading = <h2>{header}</h2>;

  const mediaGrids = data?.map((item, index) => {
    return (
      <div key={index + 1} className="xl:h-[226px] flex flex-col flex-shrink-0 xl:w-[280px] w-[164px] h-[154px] sm:w-[220px] sm:h-[192px] relative">
        <div className="relative">
          <Image
            src={item.thumbnail.regular.large.substring(1)}
            width={280}
            height={174}
            alt={"media" + (index + 1)}
            className="absolute w-[164px] sm:w-[220px] sm:h-[140px] h-[110px] top-0 xl:w-[280px] xl:h-[174px] rounded"
          />
          <span className="absolute z-40 top-4 right-4">
            <Bookmarks
              item={item}
            />
          </span>
          <span className="absolute z-40 top-4 left-4">
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
      </div>
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
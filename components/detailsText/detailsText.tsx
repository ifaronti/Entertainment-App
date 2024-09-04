import { theDot } from "../SVGAssets"
import { movieCategoryIcon, TVSeriesIcon } from "../SVGAssets"

type detailsProps = {
    item: {
        title: string,
        rating: string,
        category: string,
        year: number,
        isTrending: boolean,
        isBookmarked: boolean,
    },
    titleSize: string,
    pSize:string
}

export default function DetailsText({item, titleSize, pSize}: detailsProps) {
    return (
    <>
        <div className={`text-white ${pSize} opacity-75 relative items-center flex gap-2`}>
            <p>{item.year}</p>
            
            <span>{theDot}</span>
            
            <p className="flex gap-[6px] items-center">
              {item.category === "Movie" ? movieCategoryIcon : TVSeriesIcon}{" "}
              <span>{item.category}</span>
            </p>
            
            <span>{theDot}</span>
            
            <p>{item.rating}</p>
        </div>
          
        <p className={`text-white ${titleSize} font-semibold relative`}>{ item.title}</p>
    </>
    )
}
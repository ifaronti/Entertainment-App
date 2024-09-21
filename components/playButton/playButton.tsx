import { useState } from "react";
import { Rings } from "react-loader-spinner";
import { playIcon } from "../SVGAssets";

export default function Play() {
    const [loading, setLoading] = useState<boolean>(false);
    
        
    const ring = (<Rings
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
    />)
    
    const loadingTime = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },2000)
    }


    const PlayBtn = (
        <div className="flex items-center rounded-full justify-center h-12 w-[117px]">
        <div className="absolute flex-grow-0 rounded-full bg-white opacity-25 w-full h-full"></div>
        <p onClick={loadingTime} className="relative flex items-center gap-5">
            {playIcon} <span>Play</span>
        </p>
        </div>
    );

  return loading ? ring: PlayBtn;
}

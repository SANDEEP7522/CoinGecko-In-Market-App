import BannerImage from "../../assets/coinBanner.gif";
import "./Banner.css"

function Banner(){
    return(
        <div className="w-full h-[25rem] relative">
            <img 
            src={BannerImage}
            className="w-full h-full"
            />
           <div className=" absolute top-10 left-0 right-0 mx-auto w-[20rem] ">
               
               <div className=" flex flex-col gap-4">
                
                 <div className=" font-semibold "></div>
                   Crypto  Traker

                 <div className=" font-medium text-white   text-center">
                    Get All Info regarding CryptoCurrencies
                 </div>
                </div>
           </div>


        </div>
    )
}

export default Banner;
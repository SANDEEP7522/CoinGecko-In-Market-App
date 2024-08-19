import BannerImage from "../../assets/coinBanner.gif";

function Banner(){
    return(
        <div className="w-full h-[25rem] relative">
            <img 
            src={BannerImage}
            className="w-full h-full"
            />
        </div>
    )
}

export default Banner;
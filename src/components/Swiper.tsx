// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.scss";

// import required modules
import { EffectFade, Navigation, Pagination, Parallax } from "swiper";

function SwiperSkins({ skins, champion }: { skins: any, champion: string }) {
    console.log("🚀 ~ file: Swiper.tsx:15 ~ SwiperSkins ~ skins:", skins)
    return (
        <>
            <Swiper
                speed={600}
                parallax={true}
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Parallax, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {skins?.slice(1).map((skin: any) => {
                    return (
                        <SwiperSlide key={skin?.num}>
                            <div className="title" data-swiper-parallax="-500">
                                {skin?.name}
                            </div>
                            <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin?.num}.jpg`} alt={skin?.name} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
export { SwiperSkins }
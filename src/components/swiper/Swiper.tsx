// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "styles/Swiper.scss";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination, Parallax } from "swiper";

function SwiperSkins({ skins, champion }: { skins: any, champion: string }) {
    return (
        <>
            <Swiper
                speed={600}
                parallax={true}
                spaceBetween={30}
                effect={"fade"}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Parallax, EffectFade, Navigation, Pagination]}
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
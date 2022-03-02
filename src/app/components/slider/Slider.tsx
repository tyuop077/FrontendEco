import styles from "./Slider.module.scss";
import RecyclingFlat from "../../assets/recyclingFlat.png";
import Trash from "../../assets/trash.png";
import Recycling from "../../assets/recycling.png";
import SliderArrow from "../../assets/sliderArrow.svg";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import {useState} from "react";

export default () => {
    const [bgClass, setBgClass] = useState(styles.slider);
    return (
        <div className={bgClass}>
            <Swiper
                spaceBetween={50}
                onSlideChange={(swiper) => {
                    setBgClass(swiper.activeIndex === 1 ? styles.sliderYellow : styles.slider)
                }}
            >
                <SwiperSlide>
                    <div className="content">
                        <img src={RecyclingFlat} alt="Recycling abstract" />
                        <h2>Сделаем мир чище</h2>
                        <span>Сдай макулатуру или старую одежду и получи скидку<br/>
                            на покупку товаров из переработанных материалов</span>
                        <button>Условия сервиса</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        <img src={Trash} alt="Trash" />
                        <h2>А вы знали...</h2>
                        <span>что среднее время разложения пластмассовых изделий колеблется
                            от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет? </span>
                        <button>Узнать больше</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="content">
                        <img className="stickRight" src={Recycling} alt="Recycling showcase" />
                        <h2>Что с масками?</h2>
                        <span>Медицинские маски не обязательно должны становиться отходами.
                            Их тоже можно сдать на переработку.</span><br/>
                        <button>Пункты сбора масок</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <SliderArrowButton />
            <SliderArrowButton right />
        </div>
    )
}

const SliderArrowButton = ({right}: {right?: boolean}) => {
    const swiper = useSwiper();
    return (
        <button
            className={right ? styles.arrowR : styles.arrowL}
            onClick={() => right ? swiper.slideNext() : swiper.slidePrev()}
        >
            <img alt="Slider arrow" src={SliderArrow} />
        </button>
    )
}

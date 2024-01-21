import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "@/src/constData/Projects";
import Item from "./item/Item";
import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      <div className="custom-title portfolio-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
      </div>
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {projects.map((el) => (
          <SwiperSlide className="single-item swiper-slide" key={el.id}>
            <Item
              images={el.images}
              client={el.client}
              duration={el.duration}
              frameworks={el.framework}
              link={el.link}
              project={el.project}
              title={el.title}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="single-item swiper-slide ">
          <div className="main-content">
            <div className="videocontainer">
              <iframe
                className="youtube-video hideIframe"
                allowFullScreen=""
                src={`assets/portfolio/?enablejsapi=1.html`}
              />
              <img
                className="img-fluid"
                src={`assets/portfolio/moreProjects.png`}
                alt="Image Project"
              />
            </div>
          </div>
          <div className="details">
            <h4>More Projects</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Github</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> goal :
                  </span>
                  <span>Training</span>
                </li>

                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>React/Node/Next/Typescript</span>
                </li>
              </ul>
            </div>
            <a
              href="https://github.com/SNYPl"
              target="_blank"
              className="custom-btn"
            >
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
        </SwiperSlide>

        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;

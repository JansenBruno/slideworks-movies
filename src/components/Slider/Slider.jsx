import "./Slider.css";
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { SpanContainer } from "../Span/StyledSpan";
import Carousel from "nuka-carousel";


const images = [
  {
    src:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6716_AL_.jpg",
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    data: ["8.8", "Peter Jackson (dir.), Elijah Wood, Ian McKellen"],
  },
  {
    src:
      "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
    title: "Spirited Away",
    data: ["8.5", "Hayao Miyazaki (dir.), Daveigh Chase, Suzanne Pleshette"],
  },
  {
    src:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6716_AL_.jpg",
    title: "Interstellar",
    data: ["8.6", "Christopher Nolan (dir.), Matthew McConaughey, Anne Hathaway"],
  },
];

const Slider = () => {
  return (
    <Carousel
      autoplay={true}
      wrapAround={true}
      heightMode={"max"}
      slideWidth={"100%"}
      speed={1500}
      className="nuka-carousel"
      defaultControlsConfig={{
        nextButtonText: <FaChevronRight/>,
        nextButtonClassName: "nuka-carousel-button nuka-carousel-nextButton",
        prevButtonText: <FaChevronLeft/>,
        prevButtonClassName: "nuka-carousel-button nuka-carousel-prevButton",
        pagingDotsClassName: "nuka-carousel-paging-dots",
      }}
    
      renderCenterCenterControls={({ currentSlide }) => (
        <div className="slider-caption">
          <p>Destaque do mês</p>
          <h2>{images[currentSlide].title}</h2>
          <div>
            <SpanContainer>
                <FaStar/> {images[currentSlide].data[0]}/10
            </SpanContainer>
            <span id="crew">
                {images[currentSlide].data[1]}
            </span>
          </div>
        </div>
      )}
    >
      {images.map((image, index) => (
        <img key={index} src={image.src} alt={image.title} />
      ))}
    </Carousel>
  );
};

export default Slider;

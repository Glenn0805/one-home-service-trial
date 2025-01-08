import Slider from "react-infinite-logo-slider";

interface IClientLogoCarousel {
  logos: string[];
}
const ClientLogoCarousel = (props: IClientLogoCarousel) => {
  const { logos } = props;
  return (
    <Slider
      width="250px"
      duration={40}
      pauseOnHover={true}
      blurBorders={false}
      blurBorderColor={"#fff"}
    >
      {logos.map((logo, i) => (
        <Slider.Slide key={i}>
          <div className="hover:scale-105">
            <img src={logo} alt="any" className="w-40" />
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
};

export default ClientLogoCarousel;

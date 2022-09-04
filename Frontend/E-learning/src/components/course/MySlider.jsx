import Carousel from "react-bootstrap/Carousel";
import "./css/MySliderStyle.css";
function MySlider() {
  return (
    <Carousel className="my-auto">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/slider-01.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Distance learning for kids</h3>
          <p>Keep your child and keep him at home to learn.</p>
          {/*<h3>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/slider-02.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Make your child acquire new skills</h3>
          <p>acquiring new skills increases children's IQ.</p>

          {/*<h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./img/slider-03.jpg")}
            alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Your child's smile while learning</h3>
          <p>
          a simple explanation for the child makes him happy while learning.
          </p>
          {/*<h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>*/}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MySlider;

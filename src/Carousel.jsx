import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    // throw an error to test error boundary
    // throw new Error('failing successfully c:')
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img data-testid="hero" src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              data-testid={`thumbnail${index}`}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

// how to use a hook with a class component
// export function CarouselParent ({ animal }) {
//   const [breedList] = useBreedList(animal)

//   return <Carousel breedList={breedList} />
// }

export default Carousel;

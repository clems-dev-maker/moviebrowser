import Hero from "./Hero";

const Home = () => {
    return (
      <>
        <Hero text="Welcome to React 201"/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod finibus cursus. Phasellus at urna euismod, tincidunt sem at, molestie magna. Maecenas pretium iaculis sapien. Pellentesque faucibus justo sit amet tellus auctor, vehicula pretium quam commodo. Proin nunc orci, rhoncus id vulputate eget, egestas nec urna. Sed condimentum erat ut velit accumsan tincidunt. Pellentesque ac dolor sem. Fusce interdum ipsum vitae efficitur facilisis. Vivamus ac est lacus. Proin dapibus ac dui et aliquam. Morbi lacinia ligula augue, nec ultrices purus blandit a. Vivamus id rhoncus augue, sit amet vestibulum nibh. Vivamus lobortis quis quam at tristique. Phasellus pulvinar nulla semper, iaculis sapien sed, mollis lorem. Nam non efficitur risus
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
export default Home;
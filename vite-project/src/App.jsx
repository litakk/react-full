import "./App.css";
import frameImg from "./assets/frame.png";

import heroLogo from "./assets/heroLogo.png";

import imgOne from "./assets/img-one.png";
import imgTwo from "./assets/img-two.png";

import productOne from "./assets/productOne.png";
import productTwo from "./assets/productTwo.png";
import productThree from "./assets/productThree.png";
import productFour from "./assets/productFour.png";

import middleLogo from "./assets/middleLogo.png";

import bannerImg from "./assets/bannerImg.png";

import picture1 from "./assets/Pictures-Content/picture1.png";
import picture2 from "./assets/Pictures-Content/picture2.png";
import picture3 from "./assets/Pictures-Content/picture3.png";
import picture4 from "./assets/Pictures-Content/picture4.png";
import picture5 from "./assets/Pictures-Content/picture5.png";
import picture6 from "./assets/Pictures-Content/picture6.png";
import picture7 from "./assets/Pictures-Content/picture7.png";
import picture8 from "./assets/Pictures-Content/picture8.png";
import picture9 from "./assets/Pictures-Content/picture9.png";
import picture10 from "./assets/Pictures-Content/picture10.png";
import picture11 from "./assets/Pictures-Content/picture11.png";
import picture12 from "./assets/Pictures-Content/picture12.png";
import picture13 from "./assets/Pictures-Content/picture13.png";
import picture14 from "./assets/Pictures-Content/picture14.png";
import picture15 from "./assets/Pictures-Content/picture15.png";
import picture16 from "./assets/Pictures-Content/picture16.png";
import picture17 from "./assets/Pictures-Content/picture17.png";
import picture18 from "./assets/Pictures-Content/picture18.png";
import picture19 from "./assets/Pictures-Content/picture19.png";
import picture20 from "./assets/Pictures-Content/picture20.png";
import picture21 from "./assets/Pictures-Content/picture21.png";
import picture22 from "./assets/Pictures-Content/picture22.png";
import picture23 from "./assets/Pictures-Content/picture23.png";
import picture24 from "./assets/Pictures-Content/picture24.png";

const courses = [
  {
    img: imgOne,
    text: "Desk Pads",
  },
  {
    img: imgTwo,
    text: "Laptop Stands",
  },
];
const productsPresentation = [
  {
    id: 1,
    img: productOne,
    description: "Walnut MagSafe Stand",
    price: "$120",
  },
  {
    id: 2,
    img: productTwo,
    description: "Walnut Laptop Riser",
    price: "$150",
  },
  {
    id: 3,
    img: productThree,
    description: "Walnut iPad Stand",
    price: "$80",
  },
  {
    id: 4,
    img: productFour,
    description: "Walnut Monitor Stand",
    price: "$100",
  },
];
const images = [
  {
    id: 1,
    img: picture1,
  },
  {
    id: 2,
    img: picture2,
  },
  {
    id: 3,
    img: picture3,
  },
  {
    id: 4,
    img: picture4,
  },
  {
    id: 5,
    img: picture5,
  },
  {
    id: 6,
    img: picture6,
  },
  {
    id: 7,
    img: picture7,
  },
  {
    id: 8,
    img: picture8,
  },
  {
    id: 9,
    img: picture9,
  },
  {
    id: 10,
    img: picture10,
  },
  {
    id: 11,
    img: picture11,
  },
  {
    id: 12,
    img: picture12,
  },
  {
    id: 13,
    img: picture13,
  },
  {
    id: 14,
    img: picture14,
  },
  {
    id: 15,
    img: picture15,
  },
  {
    id: 16,
    img: picture16,
  },
  {
    id: 17,
    img: picture17,
  },
  {
    id: 18,
    img: picture18,
  },
  {
    id: 19,
    img: picture19,
  },
  {
    id: 20,
    img: picture20,
  },
  {
    id: 21,
    img: picture21,
  },
  {
    id: 22,
    img: picture22,
  },
  {
    id: 23,
    img: picture23,
  },
  {
    id: 24,
    img: picture24,
  },
];

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DesignInpires />
      <div className="courses-container">
        {courses.map((course, index) => (
          <LaptopInfo key={index} course={course} />
        ))}
      </div>
      <Featured />
      <div className="products-main">
        {productsPresentation.map((item, index) => (
          <Products key={index} item={item} />
        ))}
      </div>
      <ShowcaseSection />
      <BannerTitle />

      {images.map((img, index) => (
        <PictureComponents key={index} img={img} />
      ))}
    </main>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <a>SHOP</a>
        <a>EXPLORE</a>
      </nav>

      <div className="header-logo">
        <a>
          <img src={frameImg} alt="" />
        </a>
      </div>

      <div className="cart">
        <a>MY CART</a>
      </div>
    </header>
  );
}
function HeroSection() {
  return (
    <div className="hero-section">
      <img src={heroLogo} className="hero-image" alt="Desk Shelf System" />

      <div className="hero-content">
        <h1>The Desk Shelf System</h1>
        <p>Available in Walnut or Maple</p>
        <a>LEARN MORE</a>
      </div>
    </div>
  );
}
function DesignInpires() {
  return (
    <div className="design-inspires">
      <h1>Design Inspires</h1>
      <p>Build your dream workspace, so you can get your best work done.</p>
      <a>GET STARTED</a>
    </div>
  );
}
function LaptopInfo({ course }) {
  return (
    <div className="main-laptops">
      <div className="laptop-content">
        <img src={course.img} alt="laptop-info" />
        <h1>{course.text}</h1>
        <p>LEARN MORE</p>
      </div>
    </div>
  );
}
function Featured() {
  return (
    <div className="featured-products">
      <h1>Featured Products</h1>
      <p>See What’s Trending Right Now</p>
      <span>▮ ▮ ▮</span>
    </div>
  );
}
function Products({ item }) {
  return (
    <div className="products-content">
      <div className="product">
        <img src={item.img} alt="" />
        <p>{item.description}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
}
function ShowcaseSection() {
  return (
    <div className="showCase">
      <img src={middleLogo} />

      <div className="showCase-content">
        <h1>Home Office Inspiration</h1>
        <p>
          Working from home can be a challenge—see some creative solutions to
          get it just right.
        </p>
        <a>LEARN MORE</a>
      </div>
    </div>
  );
}
function BannerTitle() {
  return (
    <div className="banner-title">
      <h1>Made The Hard Way</h1>
      <p>
        Our signature craftsmanship has been honed over a decade of
        manufacturing innovation here in Portland, Oregon. We combine the skills
        of our small in-house team with the collective strength of collaborators
        throughout the US to deliver quality products worth investing in.
      </p>

      <img src={bannerImg} />

      <div className="child-content">
        <h1>Make Work Meaningful</h1>
        <p>
          We're here because we believe that your work deserves the best. A team
          that loves working together is the magic that makes it all happen.
        </p>
      </div>
    </div>
  );
}
function PictureComponents({ img }) {
  return (
    <div className="picture-content">
      <img src={img} />
    </div>
  );
}
export default App;

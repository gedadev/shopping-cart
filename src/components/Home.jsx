import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import fashionBanner from "../assets/casual-fashion-banner.png";
import saleBanner from "../assets/sale-banner.png";
import shippingBanner from "../assets/free-shipping-banner.png";
import "../styles/home.css";

export default function Home() {
  const images = [
    { original: fashionBanner },
    { original: saleBanner },
    { original: shippingBanner },
  ];

  return (
    <div className="home-section">
      <ImageGallery
        items={images}
        autoPlay={true}
        showBullets={true}
        showFullscreenButton={false}
      />
      <div className="top-products"></div>
      <div className="categories"></div>
    </div>
  );
}

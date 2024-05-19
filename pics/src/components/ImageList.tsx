import Imageshow, { Image } from "./Imageshow";
import "./ImageList.css";

const ImageList: React.FC<{ images: Image[] }> = ({ images }) => {
  const renderedImages = images.map((image) => (
    <Imageshow key={image.id} image={image} />
  ));

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;

export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  [key: string]: any;
};

const Imageshow: React.FC<{ image: Image }> = ({ image }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description}></img>
    </div>
  );
};

export default Imageshow;

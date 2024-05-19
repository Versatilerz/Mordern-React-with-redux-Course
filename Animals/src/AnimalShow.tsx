import { useState } from "react";
import "./AnimalShow.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

type Animals = string;
type svgMap = {
  bird: string;
  cat: string;
  cow: string;
  dog: string;
  gator: string;
  horse: string;
};

const svgMaps: svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow: React.FC<{ type: Animals }> = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img
        className="animal"
        alt="animal"
        src={svgMaps[type as keyof svgMap]}
        // style={{ width: 150 }}
      />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks }}
      />
    </div>
  );
};

export default AnimalShow;

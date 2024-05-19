import "bulma/css/bulma.css";
import ProfileCard, { cardInfoProps } from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  const cardInfo: cardInfoProps[] = [
    {
      url: AlexaImage,
      title: "Alexa",
      handle: "@alexa99",
      description: "Alexa was created by Amazon and helps you buy things.",
    },
    {
      url: CortanaImage,
      title: "Cortana",
      handle: "@Cortana88",
      description: "Cortana was created by Microsoft. Who knows what it does?",
    },
    {
      url: SiriImage,
      title: "Siri",
      handle: "@Siri77",
      description: "Siri was created by Apple and is being phased out.",
    },
  ];
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard card={cardInfo[0]} />
            </div>
            <div className="column is-3">
              <ProfileCard card={cardInfo[1]} />
            </div>
            <div className="column is-3">
              <ProfileCard card={cardInfo[2]} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;

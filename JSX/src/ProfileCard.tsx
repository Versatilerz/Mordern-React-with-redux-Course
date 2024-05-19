export interface cardInfoProps {
  url: string;
  title: string;
  handle: string;
  description: string;
}

const ProfileCard: React.FC<{ card: cardInfoProps }> = ({ card }) => {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img
              src={card.url}
              alt={`This is an image of the ${card.title} logo`}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{card.title}</p>
            <p className="subtitle is-6">{card.handle}</p>
          </div>
          <div className="content">{card.description}</div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

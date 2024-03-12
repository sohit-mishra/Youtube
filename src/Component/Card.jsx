import '../Component/CardModule.css';

const Card = ({ thumbnails, channelname, title }) => {
  return (
    <div className="card">
      <img src={thumbnails} alt="Thumbnail" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{channelname}</p>
      </div>
    </div>
  );
};

export default Card;
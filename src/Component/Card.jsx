import { Link } from 'react-router-dom';
import '../Component/CardModule.css';

const Card = ({ thumbnails, channelname, title, videoID, publishTime }) => {

  const givenDate = new Date(publishTime);
  const currentDate = new Date();
  const timeDifference = currentDate - givenDate;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));

  let timeAgo = '';
  if (monthsDifference >= 12) {
    const years = Math.floor(monthsDifference / 12);
    timeAgo = years + (years === 1 ? ' year ago' : ' years ago');
  } else if (monthsDifference >= 1) {
    timeAgo = monthsDifference + (monthsDifference === 1 ? ' month ago' : ' months ago');
  } else if (daysDifference >= 1) {
    timeAgo = daysDifference + (daysDifference === 1 ? ' day ago' : ' days ago');
  } else if (hoursDifference >= 1) {
    timeAgo = hoursDifference + (hoursDifference === 1 ? ' hour ago' : ' hours ago');
  } else if (minutesDifference >= 1) {
    timeAgo = minutesDifference + (minutesDifference === 1 ? ' minute ago' : ' minutes ago');
  } else {
    timeAgo = secondsDifference + (secondsDifference === 1 ? ' second ago' : ' seconds ago');
  }

  return (
    <Link to={`v/${videoID}`}>
      <div className="card">
        <img src={thumbnails} alt="Thumbnail" />
        <div className="card-content">
          <div className="right">
            <h2>{title}</h2>
            <p>{channelname}</p>

            <p>{Math.floor(Math.random() * 100)}k views  •  {timeAgo}</p></div>

        </div>
      </div>
    </Link>
  );
};

export default Card;

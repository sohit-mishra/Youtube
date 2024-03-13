import '../Component/WatchModule.css';
import ReactPlayer from 'react-player';
import { useParams } from "react-router-dom";
import LeftSlide from './LeftSlide';
import { useState, useEffect } from "react";

export default function Watch() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { videoID } = useParams();

  var ApiKey = "AIzaSyB_8I7DWJBvJtor3h-4CPm0W2U48mdaCm0";
  var url = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&part=snippet&key=${ApiKey}`;

  const fetchData = async () => {
    setLoading(true);

    try {
      var req = await fetch(url);
      var finalData = await req.json();
      setData(finalData.items[0].snippet);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return "Loading....";
  }

  if (error) {
    return "Failed to fetch video data";
  }

  const givenDate = new Date(data.publishedAt);
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
    <div id='Watch'>
      <div className="left">
        <ReactPlayer
          className="player"
          url={`https://www.youtube.com/watch?v=${videoID}`} 
          playing={true}
          loop={true}
          width="100%"
          height="560px"
          controls={true}
        />
        <h2>{data.title}</h2>
        <p><span>{Math.floor(Math.random() * 1000)},{Math.floor(Math.random() * 1000)} views {timeAgo}</span> {data.description}</p>
      </div>
      <div className="right">
        <LeftSlide/>
      </div>
    </div>
  );
}

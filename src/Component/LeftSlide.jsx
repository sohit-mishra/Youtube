import { useState, useEffect } from "react";
import Card from "./Card";
import '../Component/LeftSideModule.css';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  var ApiKey = "AIzaSyB_8I7DWJBvJtor3h-4CPm0W2U48mdaCm0";
  var url = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&part=snippet,id&order=date&maxResults=300`;

  const fetchData = async () => {
    setLoading(true);

    try {
      var req = await fetch(url);
      var finalData = await req.json();
      setData(finalData.items);
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
    return "Another Day try Limit are Complete";
  }

  return (
    <div id="Home" style={{width:"100%" , marginTop:"20px"}}>
      <ul>
        <li>All</li>
        <li>Music</li>
        <li>News</li>
        <li>Watched</li>
      </ul>
      <div className="grid">
        {data?.map((item, index) => (
          <Card thumbnails={item.snippet.thumbnails.high.url} channelname={item.snippet.channelTitle} title={item.snippet.title} videoID={item.id.videoId} key={index} publishTime={item.snippet.publishTime} />
        ))}
      </div>
    </div>
  );
}
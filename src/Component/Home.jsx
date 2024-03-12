import { useState, useEffect } from "react";
import Card from "./Card";
import '../Component/HomeModule.css';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  var ApiKey = "AIzaSyDEmK6CwDqKbFchN3AZrIjYaM65yH7lqMk";
  var url = `https://www.googleapis.com/youtube/v3/search?key=${ApiKey}&part=snippet,id&order=date&maxResults=1000`;

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
    <div id="Home">
      <ul>
        <li>All</li>
        <li>Music</li>
        <li>Mobile Phones</li>
        <li>News</li>
        <li>Masala films</li>
        <li>Recently uploaded</li>
        <li>Watched</li>
        
      </ul>
      <div className="grid">
        {data?.map((item, index) => (
          <Card thumbnails={item.snippet.thumbnails.high.url} channelname={item.snippet.channelTitle} title={item.snippet.title} key={index} />
        ))}
      </div>
    </div>
  );
}

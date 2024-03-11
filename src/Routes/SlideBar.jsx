import { Link } from "react-router-dom";
import Home from "../assets/SlideShow/Home.svg";
import Shorts from "../assets/SlideShow/Shorts.svg";
import Subscrption from "../assets/SlideShow/Subscrption.svg";
import Channel from "../assets/SlideShow/Channel.svg";
import History from "../assets/SlideShow/History.svg";
import YourVideos from "../assets/SlideShow/YourVideos.svg";
import WatchLater from "../assets/SlideShow/WatchLater.svg";
import Yourclips from "../assets/SlideShow/Yourclips.svg";
import LikedVideos from "../assets/SlideShow/LikedVideos.svg";
import SoundsfromShorts from "../assets/SlideShow/SoundsfromShorts.svg";
import fewer from "../assets/SlideShow/fewer.svg";
import BrowseChannel from "../assets/SlideShow/BrowseChannel.svg";
import Trending from '../assets/SlideShow/Trending.svg';
import Shopping from '../assets/SlideShow/Shopping.svg';
import Music from '../assets/SlideShow/Music.svg';
import Films from '../assets/SlideShow/Films.svg';
import Live from '../assets/SlideShow/Live.svg';
import Gaming from '../assets/SlideShow/Gaming.svg';
import News from '../assets/SlideShow/News.svg';
import Sport from '../assets/SlideShow/Sport.svg';
import Learning from '../assets/SlideShow/Learning.svg';
import Fashion from '../assets/SlideShow/Fashion.svg';
import Podcasts from '../assets/SlideShow/Podcasts.svg';
import Setting from '../assets/SlideShow/Setting.svg';
import Report from '../assets/SlideShow/Report.svg';
import Help from '../assets/SlideShow/Help.svg';
import Feedback from '../assets/SlideShow/Feedback.svg';
import YoutubePremium from '../assets/SlideShow/YoutubePremium.svg';
import YoutubeStudio from '../assets/SlideShow/YoutubeStudio.svg';
import YoutubeMusic from '../assets/SlideShow/YoutubeMusic.svg';
import YoutubeKids  from '../assets/SlideShow/YoutubeKids.svg';
import '../Routes/SlideShowModule.css';

export default function SlideBar() {
   return (
      <div className="SlideShow">
         <ul>
            <li><Link><img src={Home} />Home</Link></li>
            <li><Link><img src={Shorts} />Shorts</Link></li>
            <li><Link><img src={Subscrption} />Subscriptions</Link></li>
         </ul>
         <hr />

         <h4>You {">"}</h4>
         <ul>
            <li><Link><img src={Channel} />Your channel</Link></li>
            <li><Link><img src={History} />History</Link></li>
            <li><Link><img src={YourVideos} />Your videos</Link></li>
            <li><Link><img src={WatchLater} />Watch Later</Link></li>
            <li><Link><img src={Yourclips} />Your clips</Link></li>

            <li><Link><img src={LikedVideos} />Liked videos</Link></li>
            <li><Link><img src={SoundsfromShorts} />Sounds from Shorts</Link></li>
            <li><Link><img src={fewer} />Show fewer</Link></li>
         </ul>

         <hr />


         <h4>Subscriptions</h4>
         <ul>
            <li><Link><img src={BrowseChannel} /> Browse channels</Link></li>
            <li><Link><img src="" /> Sohit Mishra</Link></li>
         </ul>

         <hr />




         <h4>Explore</h4>
         <ul>
            <li><Link><img src={Trending} />Trending</Link></li>
            <li><Link><img src={Shopping} />Shopping</Link></li>
            <li><Link><img src={Music} />Music</Link></li>
            <li><Link><img src={Films} />Films</Link></li>
            <li><Link><img src={Live} />Live</Link></li>
            <li><Link><img src={Gaming} />Gaming</Link></li>
            <li><Link><img src={News} />News</Link></li>
            <li><Link><img src={Sport} />Sport</Link></li>
            <li><Link><img src={Learning} />Learning</Link></li>
            <li><Link><img src={Fashion} />Fashion & beauty</Link></li>
            <li><Link><img src={Podcasts} />Podcasts</Link></li>
         </ul>

         <hr />
         <h4>More from Youtube</h4>
         <ul>
            <li><Link><img src={YoutubePremium } />Youtube Premium</Link></li>
            <li><Link><img src={YoutubeStudio } />Youtube Studio</Link></li>
            <li><Link><img src={YoutubeMusic } />Youtube Music</Link></li>
            <li><Link><img src={YoutubeKids } />Youtube Kids</Link></li>
         </ul>

         <hr />
         <ul>
            <li><Link><img src={Setting} />Setting</Link></li>
            <li><Link><img src={Report} />Report history</Link></li>
            <li><Link><img src={Help} />Help</Link></li>
            <li><Link><img src={Feedback} />Send feedback</Link></li>
         </ul>

         <hr />

         <p>
            <Link> About </Link>
            <Link> Press </Link>
            <Link>Copyright </Link>
            <Link>Contact us </Link>
            <Link> Creator </Link>
            <Link> Advertise </Link>
            <Link> Developers </Link>
         </p>


         <p>
            <Link> Terms </Link>
            <Link> Privacy Policy & Safety </Link>
            <Link> How YouTube works </Link>
            <Link>Tesst new Features </Link>
         </p>


         <p><Link to="https://www.linkedin.com/in/sohitmishra/">Sohit Mishra</Link></p>

      </div>
   )
}

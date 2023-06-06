import React from "react";
import VideoSlider from "./VideoSlider";

function Home() {
  const videos = [
    {
      title: "Crazy Skills🤯🔥#Football #Skills",
      description: "Amazing Football Skills & Tricks",
      url: "https://www.youtube.com/embed/JEG1x4iRp-U",
      thumbnail_url: "https://i3.ytimg.com/vi/JEG1x4iRp-U/hqdefault.jpg",
      time: "00:00:24",
      id_category: 1,
    },
    {
      title:
        "Best Morning Routine For Football Players ⚽️🔥 #football #soccer #shorts",
      description:
        "Best Morning Routine For Football Players ⚽️🔥 #football #soccer #shorts",
      url: "https://www.youtube.com/embed/yxkkgmTK_58",
      thumbnail_url: "https://i3.ytimg.com/vi/yxkkgmTK_58/hqdefault.jpg",
      time: "00:00:25",
      id_category: 1,
    },
    {
      title: "Football Video 3",
      description:
        "Best goalkeeper of this world cup 🤩🔥 #spain #morocco #bounou",
      url: "https://youtu.be/O2cXVvcTowk",
      thumbnail_url: "https://i3.ytimg.com/vi/jgOFZ7x17fw/hqdefault.jpg",
      time: "00:00:27",
      id_category: 1,
    },
    {
      title: "Jason Williams Top 10 Career Plays",
      description: `Jason Williams immediately made a mark in the NBA with his flashy style of play. In honor of Throwback Thursday we count down the Top 10 Plays of his career! 
          
            About the NBA: 
            The NBA is the premier professional basketball league in the United States and Canada. The league is truly global, with games and programming in 215 countries and territories in 47 languages, as well as NBA rosters at the start of the 2013-14 season featuring a record 92 international players from 39 countries and territories. For the 2013-14 season, each of the leagues 30 teams will play 82 regular-season games, followed by a postseason for those that qualify. 
          
            The NBA consists of the following teams: Atlanta Hawks; Boston Celtics; Brooklyn Nets; Charlotte Bobcats; Chicago Bulls Cleveland Cavaliers; Dallas Mavericks; Denver Nuggets; Detroit Pistons; Golden State Warriors; Houston Rockets; Indiana Pacers; Los Angeles Clippers; Los Angeles Lakers; Memphis Grizzlies; Miami Heat; Milwaukee Bucks; Minnesota Timberwolves; New Orleans Pelicans; New York Knicks; Oklahoma City Thunder; Orlando Magic; Philadelphia 76ers; Phoenix Suns; Portland Trail Blazers; Sacramento Kings; San Antonio Spurs; Toronto Raptors; Utah Jazz; Washington Wizards. 
          
            The NBA offers real time access to live regular season NBA games with a subscription to NBA LEAGUE PASS, available globally for TV, broadband, and mobile. Real-time Stats, Scores, Highlights and more are available to fans on web and mobile with NBA Game Time.`,
      url: "https://www.youtube.com/embed/Q8b0XbtpFsA",
      thumbnail_url: "https://img.youtube.com/vi/Q8b0XbtpFsA/hqdefault.jpg",
      time: "00:03:12",
      id_category: 2,
    },
    {
      title: "Top 10 Dunks of The Decade",
      description:
        "Before the teens come to a close, The Starters count down the Top 10 Dunks of the Decade so far.",
      url: "https://www.youtube.com/embed/ue1NT3QhuVU",
      thumbnail_url: "https://img.youtube.com/vi/ue1NT3QhuVU/hqdefault.jpg",
      time: "00:03:18",
      id_category: 2,
    },
    {
      title: "Nate Robinson's Top 10 Plays of his Career",
      description:
        "One of the most explosive players in the game, take a look back at Nate Robinson's amazing career as we count down the 10 best plays from it!",
      url: "https://www.youtube.com/embed/WTUwS3HtW2s",
      thumbnail_url: "https://img.youtube.com/vi/WTUwS3HtW2s/hqdefault.jpg",
      time: "00:10:00",
      id_category: 2,
    },
  ];

  const suggestedVideos = videos.filter((video) => video.id_category === 7);
  const footballVideos = videos.filter((video) => video.id_category === 1);
  const basketballVideos = videos.filter((video) => video.id_category === 2);
  const tennisVideos = videos.filter((video) => video.id_category === 3);
  const swimmingVideos = videos.filter((video) => video.id_category === 4);
  const hockeyVideos = videos.filter((video) => video.id_category === 5);

  return (
    <div>
      <VideoSlider
        slideNumber={3}
        videos={suggestedVideos.map((video) => video.url)}
        name="Suggestions"
      />
      <VideoSlider
        slideNumber={3}
        videos={footballVideos.map((video) => video.url)}
        name="Football"
      />
      <VideoSlider
        slideNumber={3}
        videos={basketballVideos.map((video) => video.url)}
        name="Basketball"
      />
      <VideoSlider
        slideNumber={3}
        videos={tennisVideos.map((video) => video.url)}
        name="Tennis"
      />
      <VideoSlider
        slideNumber={3}
        videos={swimmingVideos.map((video) => video.url)}
        name="Swimming"
      />
      <VideoSlider
        slideNumber={3}
        videos={hockeyVideos.map((video) => video.url)}
        name="Hockey"
      />
    </div>
  );
}

export default Home;

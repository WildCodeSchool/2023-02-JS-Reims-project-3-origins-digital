import React, { useState, useEffect } from "react";
import VideoCarousel from "../components/VideoCarousel";

function Home() {
  const [suggestedVideos, setSuggestedVideos] = useState([]);

  const videos = [
    {
      title: "Crazy Skills🤯🔥#Football #Skills",
      description: "Amazing Football Skills & Tricks",
      url: "https://www.youtube.com/embed/JEG1x4iRp-U",
      thumbnailUrl: "https://i3.ytimg.com/vi/JEG1x4iRp-U/hqdefault.jpg",
      time: "00:00:24",
      idCategory: 1,
    },
    {
      title:
        "Best Morning Routine For Football Players ⚽️🔥 #football #soccer #shorts",
      description:
        "Best Morning Routine For Football Players ⚽️🔥 #football #soccer #shorts",
      url: "https://www.youtube.com/embed/yxkkgmTK_58",
      thumbnailUrl: "https://i3.ytimg.com/vi/yxkkgmTK_58/hqdefault.jpg",
      time: "00:00:25",
      idCategory: 1,
    },
    {
      title: "Football Video 3",
      description:
        "Best goalkeeper of this world cup 🤩🔥 #spain #morocco #bounou",
      url: "https://youtu.be/O2cXVvcTowk",
      thumbnailUrl: "https://i3.ytimg.com/vi/jgOFZ7x17fw/hqdefault.jpg",
      time: "00:00:27",
      idCategory: 1,
    },
    {
      title: "Jason Williams Top 10 Career Plays",
      description: `Jason Williams immediately made a mark in the NBA with his flashy style of play. In honor of Throwback Thursday we count down the Top 10 Plays of his career! 
          
            About the NBA: 
            The NBA is the premier professional basketball league in the United States and Canada. The league is truly global, with games and programming in 215 countries and territories in 47 languages, as well as NBA rosters at the start of the 2013-14 season featuring a record 92 international players from 39 countries and territories. For the 2013-14 season, each of the leagues 30 teams will play 82 regular-season games, followed by a postseason for those that qualify. 
          
            The NBA consists of the following teams: Atlanta Hawks; Boston Celtics; Brooklyn Nets; Charlotte Bobcats; Chicago Bulls Cleveland Cavaliers; Dallas Mavericks; Denver Nuggets; Detroit Pistons; Golden State Warriors; Houston Rockets; Indiana Pacers; Los Angeles Clippers; Los Angeles Lakers; Memphis Grizzlies; Miami Heat; Milwaukee Bucks; Minnesota Timberwolves; New Orleans Pelicans; New York Knicks; Oklahoma City Thunder; Orlando Magic; Philadelphia 76ers; Phoenix Suns; Portland Trail Blazers; Sacramento Kings; San Antonio Spurs; Toronto Raptors; Utah Jazz; Washington Wizards. 
          
            The NBA offers real time access to live regular season NBA games with a subscription to NBA LEAGUE PASS, available globally for TV, broadband, and mobile. Real-time Stats, Scores, Highlights and more are available to fans on web and mobile with NBA Game Time.`,
      url: "https://www.youtube.com/embed/Q8b0XbtpFsA",
      thumbnailUrl: "https://img.youtube.com/vi/Q8b0XbtpFsA/hqdefault.jpg",
      time: "00:03:12",
      idCategory: 2,
    },
    {
      title: "Top 10 Dunks of The Decade",
      description:
        "Before the teens come to a close, The Starters count down the Top 10 Dunks of the Decade so far.",
      url: "https://www.youtube.com/embed/ue1NT3QhuVU",
      thumbnailUrl: "https://img.youtube.com/vi/ue1NT3QhuVU/hqdefault.jpg",
      time: "00:03:18",
      idCategory: 2,
    },
    {
      title: "Nate Robinson's Top 10 Plays of his Career",
      description:
        "One of the most explosive players in the game, take a look back at Nate Robinson's amazing career as we count down the 10 best plays from it!",
      url: "https://www.youtube.com/embed/WTUwS3HtW2s",
      thumbnailUrl: "https://img.youtube.com/vi/WTUwS3HtW2s/hqdefault.jpg",
      time: "00:10:00",
      idCategory: 2,
    },
  ];
  useEffect(() => {
    const shuffledVideos = [...videos].sort(() => Math.random() - 0.5);

    const suggestions = shuffledVideos.slice(0, 3);
    for (let i = 0; i < 5; i += 1) {
      suggestions.push(...suggestions);
    }

    setSuggestedVideos(suggestions);
  }, []);
  const getVideosByCategory = (idCategory) => {
    const categoryVideos = videos.filter(
      (video) => video.idCategory === idCategory
    );
    for (let i = 0; i < 5; i += 1) {
      categoryVideos.push(...categoryVideos);
    }
    return categoryVideos;
  };
  const footballVideos = getVideosByCategory(1);
  const basketballVideos = getVideosByCategory(2);
  const tennisVideos = suggestedVideos;
  const swimmingVideos = suggestedVideos;
  const hockeyVideos = suggestedVideos;
  // eslint-disable-next-line no-restricted-syntax
  console.log(footballVideos.length);

  return (
    <div>
      <VideoCarousel
        slideNumber={4}
        videos={suggestedVideos}
        name="Suggestions"
      />
      <VideoCarousel slideNumber={3} videos={footballVideos} name="Football" />
      <VideoCarousel
        slideNumber={3}
        videos={basketballVideos}
        name="Basketball"
      />
      <VideoCarousel slideNumber={3} videos={tennisVideos} name="Tennis" />
      <VideoCarousel slideNumber={3} videos={swimmingVideos} name="Swimming" />
      <VideoCarousel slideNumber={3} videos={hockeyVideos} name="Hockey" />
    </div>
  );
}

export default Home;

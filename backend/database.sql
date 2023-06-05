CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  mail VARCHAR(20) NOT NULL UNIQUE,
  password varchar(20) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE category(
id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
title VARCHAR(100) NOT NULL
);
CREATE TABLE video (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  description TEXT NULL,
  url varchar(50),
  date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  id_category int DEFAULT NULL,
  KEY `fk_video_category` (`id_category`),
  CONSTRAINT `fk_video_category` FOREIGN KEY (`id_category`) REFERENCES `category`(`id`)
);
CREATE TABLE comment(
id_user INT NOT NULL,
id_video INT NOT NULL,
commentary VARCHAR(100) NULL,
content TEXT NULL,
date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
KEY `fk_comment_use` (`id_user`),
KEY `fk_comment_video` (`id_video`),
CONSTRAINT `fk_comment_use` FOREIGN KEY (id_user) REFERENCES user(id),
CONSTRAINT `fk_comment_video` FOREIGN KEY (id_video) REFERENCES video(id)
);
CREATE TABLE like(
id_user INT NOT NULL,
id_video INT NOT NULL,
KEY `fk_like_user` (`id_user`),
KEY `fk_like_video` (`id_video`),
CONSTRAINT `fk_like_user` FOREIGN KEY (id_user) REFERENCES user(id),
CONSTRAINT `fk_like_video` FOREIGN KEY (id_video) REFERENCES video(id)
);

INSERT INTO user (name,mail,password,isAdmin) VALUES ('user', 'user@origins.ju', 'azerty', FALSE), ('admin', 'admin@origins.ju', 'azerty', TRUE);

INSERT INTO `origins`.`category`('title) VALUE ('football'),('basketball'),('tennis'),('swimming'),('hockey');

INSERT INTO `origins`.`video`('title', 'description', 'url', 'date', 'id_category') VALUES ('Meilleurs buts de l'année 2022','','https://youtu.be/4v-rIjHpyEk', '10.27', '1'), 
('LIONEL MESSI 2011 👑 Ballon d'Or Level: Dribbling Skills, Goals and Assists', '', 'https://youtu.be/UKaCzjgoNrU', '25.07', '1')

,('Roberto Carlos était un monstre absolu', 'Roberto Carlos highlights', 'https://youtu.be/zSF9KKTMCHs', '7.08','1')

,('Oliver Kahn refused to concede a goal', 'It takes more than that to beat Oliver Kahn.
Der Titan made those saves look easy.
What a legend.', 'https://youtu.be/Hxn3g6uz26U', '1.56', '1')

,('Neymar invente le dribble jamais vu dans le football!', 'Neymar Meilleurs buts et dribbles dans l'ensemble des compétences qui ont choqué les adversaires

Ey Neymar invente un dribble jamais vu sur le terrain!

Neymar inventa drible jamais visto no futebol!

Neymar Jr - Général 2020/21 | Compétences et buts de dribble','https://youtu.be/ONWhOD_DGMc', '10.19', '1')

,('Cristiano Ronaldo ● International Love 2012', 'Compilation of best skills and goals by Cristiano Ronaldo in Real Madrid and Portugal.', 'https://youtu.be/9eqJ4vEkMiE', '3.56', '1')

,('Ronaldinho: 14 Ridiculous Tricks That No One Expected', 'In this video:

14. Dancing Before Scoring goal vs Chelsea
13. Ronaldinho  No Look Assists ( passes )
12. Ronaldinho goal that would have been vs bilbao
11. Ronaldinho Back Assist vs Osasuna
10. Ronaldinho Juggling With Closed Eyes
9. Ronaldinho Free Kick vs England
8. Ronaldinho Triple Sombrero vs Bilbao
7. Ronaldinho Debut Goal vs Sevilla
6. Ronaldinho Playing With The Crossbar
5. Ronaldinho Bicycle Kick Goal vs Villareal
4. Ronaldinho Controlling The Ball With His Back
3. Ronaldinho Under The Wall Free Kicks
2. Ronaldinho Smart Water Bottle Trick
1. Ronaldinho Stealing The Ball From Goalkeepers', 'https://youtu.be/pynDvIsLoU0', '10.01', '1')

,('Geoffrey Jourdren : Va te jeter a la mer !', 'Interview joueur de foot, après match', 'https://youtu.be/P54zUN_9s40', '0.07', '1')

,('Personne n'a égalé l'élégance de Zidane jusqu'à présent', 'Zinedine Zidane est le footballeur le plus élégant des 30 dernières années','https://youtu.be/f44IQb5Igtc', '10.04', '1')

,('21 Buts INOUBLIABLES dans l'Histoire du Football', '21 Buts IMMORTELS dans l'Histoire du Football ', 'https://youtu.be/eLNtV6DLEBI', '6.07', '1'),


INSERT INTO `origins`.`video` (`title`, `description`, `url`, `date`, `id_category`) VALUES ('Rétro : Le dernier match légendaire de Kobe Bryant', '💥 Revivez le dernier match de la carrière de Kobe Bryant ! 🔥 Une partie homérique du Black Mamba contre le Jazz avec 60 points (22/50 au tir), le 13 avril 2016 !
:applaudissements: Standing ovations pour Kobe !', 'https://www.youtube.com/watch?v=dMske5Mrji4', '16.53', '2')

,('Kobe Bryant BEST 100 Plays & Moments Of His NBA Career','RIP to the legend, Kobe Bryant. Check out a tribute video to Kobe Bryant best & top 100 plays, highlights & moments of his NBA career for the Los Angeles Lakers.
Created by GD Latest Highlights','https://www.youtube.com/watch?v=OTTWedyp37o', '19.03', '2')

,('Michael Jordan vs Kobe Bryant: Duel of Icons','As Kobe Bryant is on the verge of passing Michael Jordan for third all-time on the NBA scoring list, take a look back at highlights of their head to head match-ups over the years.
About the NBA:
The NBA is the premier professional basketball league in the United States and Canada. The league is truly global, with games and programming in 215 countries and territories in 47 languages, as well as NBA rosters at the start of the 2014-15 season featuring a record 101 international players from 37 countries and territories. For the 2014-15 season, each of the league 30 teams will play 82 regular-season games, followed by a postseason for those that qualify.
The NBA consists of the following teams: Atlanta Hawks; Boston Celtics; Brooklyn Nets; Charlotte Hornets; Chicago Bulls; Cleveland Cavaliers; Dallas Mavericks; Denver Nuggets; Detroit Pistons; Golden State Warriors; Houston Rockets; Indiana Pacers; Los Angeles Clippers; Los Angeles Lakers; Memphis Grizzlies; Miami Heat; Milwaukee Bucks; Minnesota Timberwolves; New Orleans Pelicans; New York Knicks; Oklahoma City Thunder; Orlando Magic; Philadelphia 76ers; Phoenix Suns; Portland Trail Blazers; Sacramento Kings; San Antonio Spurs; Toronto Raptors; Utah Jazz; Washington Wizards.
The NBA offers real time access to live regular season NBA games with a subscription to NBA LEAGUE PASS, available globally for TV, broadband, and mobile.  Real-time Stats, Scores, Highlights and more are available to fans on web and mobile with NBA Game Time.','https://www.youtube.com/watch?v=KGLFK0I6-mk','2.41','2')
,('Michael Jordan Top 60 Career Plays','In honor of his 60th birthday, take a look as we countdown MJ’s top 60 career plays!
Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.','https://www.youtube.com/watch?v=jbW4f60dCNA','19.02','2')

,('NBA Finals 1993. Phoenix Suns vs Chicago Bulls','Game Highlights | Game 4 | Jordan 55 HD 720p/60fps, final nba .','https://www.youtube.com/watch?v=95l18vjgmZQ','9.42','2')

,('Stephen Curry Top 35 Career Plays','In honor of his 35th birthday today, take a look at Steph’s top 35 career plays!
Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.','https://www.youtube.com/watch?v=NHhTMh0nURA','13.01','2'),('Stephen Curry SWEET Rookie Year Offense Highlights from 2009/2010 NBA Season! Future Champion! HD','Check out Stephen Curry highlights from his rookie year 2009-10 season in HD 720p quality!','https://www.youtube.com/watch?v=Sc6d5Stynv4','13.08','2')

,('Dennis Rodman Lockdown Defensive Performances!','Relive the BEST lockdown defensive performances from Dennis Rodman over his career! ','https://www.youtube.com/watch?v=XBoVDIvOrfI','5.07','2')

,('LeBron James Top 35 Plays | NBA Career Highlights','As LeBron James celebrates his 35th birthday today, check out his top 35 plays from his career so far. ','https://www.youtube.com/watch?v=b117a8_jALE','10.53','2')

,('Victor Wembanyama claque un match de fou furieux, les USA sidérée!', 'Metropolitans 92 vs Ignite Highlights, Victor Wembanyama','https://www.youtube.com/watch?v=NtfIiFbQpG0', '4.38','2');



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

 INSERT INTO `origins`.`video`('title', 'description', 'url', 'date', 'id_category') VALUES (' Carlos Alcaraz vs Lorenzo Musetti Rollercoaster Match! Hamburg 2022 Final Extended Highlights ','','https://www.youtube.com/watch?v=q77b-uFOiRc', '14.15', '3'), 
 ,('Gael Monfils Top 5 ATP Matches Of His Career! 💪','https://www.youtube.com/watch?v=S9Y-7IbxZE0','15.45', '3')
 ,(' Roland-Garros 2023 : le résumé de S. Ofner vs S. Tsitsipas ','https://www.youtube.com/watch?v=QfYaCeWzoLE','7.35', '3')
 ,(' 🎾 Le résumé de Alexander Zverev 🇩🇪 v Frances Tiafoe 🇺🇸 ', 'https://www.youtube.com/watch?v=Abh-VeP6wmA','8.25', '3')
 ,(' 🎾 Le résumé de Gael Monfils 🇫🇷 - Sebastián Báez 🇦🇷','https://www.youtube.com/watch?v=WfozbLPBIxg','22.59', '3' )
 ,(' 🎾 Le résumé de Carlos Alcaraz 🇪🇸 v Denis Shapovalov 🇨🇦 ','https://www.youtube.com/watch?v=xIgRsioz0T8','6.28','3' )
 ,(' Roland-Garros 2023 : le résumé de N.Djokovic vs D.Fokina','https://www.youtube.com/watch?v=QTOLVtH500A','9.58','3' ) 
 ,(' Top 10 ATP Tennis Meltdowns & Angry Moments in 2020!','https://www.youtube.com/watch?v=yoLPLQDHR_E','17.45','3' )
 ,('Daniil Medvedev Being Iconic For 15 Minutes 🤷‍♂️','https://www.youtube.com/watch?v=c0z6quY8iY8','15.16','3')
 ,(' Epic Fails That Will Make You Feel Better About Your Tennis! 🤣','https://www.youtube.com/watch?v=NI3JdkzEOZI','8.54','3'),

 INSERT INTO `origins`.`video`('title', 'description', 'url', 'date', 'id_category') VALUES (' Championnats d'Europe 2022 : De l'or pour les Bleus 🇫🇷 ','Le titre des Français sur le 4x100 m nage libre mixte, la médaille de Marie #Wattel ou le doublé de David #Popovici dans un temps canon : revivez les meilleurs moments de la cinquième journée des Championnats d Europe de natation de #Rome2022 (Italie)','https://www.youtube.com/watch?v=OSzOVLo2_Ao', '10.41', '4')
 ,(' Championnats d'Europe 2022 : De l'argent 🥈 pour les relais ','C'est le clap de fin de ces championnats d'Europe de natation pour les Bleus ! Cette dernière journée de compétition s'est achevée avec de nouvelles médailles françaises : le bronze de Yohann Ndoye #Brouard sur le 100 m dos, ainsi que l'argent pour les relais masculins et féminins sur 4x 100 m 4 nages. La France achève ses championnats avec 17 médailles au compteurs : 3 en or, 7 en argent, 7 en bronze.','https://www.youtube.com/watch?v=c5WEdtH8mJ4','8.30','4' )
 ,('  UNE JOURNÉE AVEC PHILIPPE LUCAS ET SON GROUPE À MARTIGUES - INSIDE ','De la sortie du domicile de Cyrielle Duhamel à 6h30 et à la fin du deuxième entrainement à 18h30, découvrez le quotidien des nageurs de Phillipe Lucas à Martigues','https://www.youtube.com/watch?v=gdgUAvMc3d4','14.33','4' )
 ,('France Win Gold In 4x100m Freestyle Relay Final | London 2012 Olympics',' In an extremely close finish to the 4x100m mens freestyle France comeback to take the gold medal just ahead of USA and Russia','https://www.youtube.com/watch?v=-XI_XeoIFnI','8.59','4' )
 ,(' Zhang Yufei - Womens 200 m butterfly | Reigning Champions ',' Zhang Yufei beams in delight on winning her second medal in the pool of the Tokyo 2020 Olympic Games, beating the American duo of Regan Smith and Hali Flickinger to silver and bronze, respectively. The Chinese went out fast in the women 200m butterfly winning in an Olympic Record time ,'https://www.youtube.com/watch?v=ArRwItJnoEk','2.06','4' )
 ,(' Micheal Phelps Last Olympic Race-Swimming Men 4x100m Medley Relay Final', 'USA wins gold in the men's 4x100m medley final and set a new Olympic Record in Michael Phelps' final race at the Olympic Games.','https://www.youtube.com/watch?v=UmIYanq5gH8','8.36','4')
 ,(' Men 200m Individual Medley',' USA's Michael Phelps wins his fourth consecutive gold in the Men's 200m Individual Medley.','https://www.youtube.com/watch?v=e-XGSYnhUjg','6.09','4')
 ,(' USA Set New Women's 4 x 200m Freestyle Relay Olympic Record - London 2012 Olympics ',' The USA's team of Missy Franklin, Dana Vollmer, Shannon Vreeland and Allison Schmitt set a new Olympic record of 7:42.92 in the women's 4x200m freestyle relay event in the Aquatics Centre at the London 2012 Olympic Games (1 August).','https://www.youtube.com/watch?v=gALADAnOAhI','13.40', '4')
 ,(' Sun Yang Smashes Men's 1500m Freestyle World Record - London 2012 Olympics ','https://www.youtube.com/watch?v=T5FlDy3YmDQ','20.52','4')
 ,('Men 3m Springboard Final Rio 2016','Yuan Cao wins gold for China in men's 3m springboard Rio 2016.','https://www.youtube.com/watch?v=4ysjURAArmg','8.27','4'),

 INSERT INTO `origins`.`video`('title', 'description', 'url', 'date', 'id_category') VALUES ('Golden Knights vs Canadiens-Faits Saillants','Voici des faits saillants du match qui opposait les Canadiens de Montréal aux Golden Knights de Vegas le 24 juin 2021.','https://www.youtube.com/watch?v=z-32F-CoIt4', '10.47', '5'),
 ,('Panthers vs Canadiens-Faits Saillants,'Voici des faits saillants du match qui opposait les Canadiens de Montréal aux Panthers de la Floride le 29 avril 2022','https://www.youtube.com/watch?v=K_roXl1rnCQ','11.10','5')
 ,('Montreal Canadiens Road To 2021 Stanley Cup Final','The Montreal Canadiens road to the 2021 NHL Stanley Cup Final was a cinderella story that will be remembered for a long time','https://www.youtube.com/watch?v=oCP6K7L5FV0','23.53','5')
 ,('Re-Live The final Second of Each Stanley Cup Final FRom 2000-2021','Take a look back at the final moments of each Stanley Cup Final from 2000-2021','https://www.youtube.com/watch?v=YqAml6e-H7U','10.52','5')
 ,('A historic Upset-Panthers vs Bruins','https://www.youtube.com/watch?v=vs51yCzVaI8','14.18','5')
 ,('We Want Florida Panthers vs Maple Leafs','https://www.youtube.com/watch?v=NL1ZSmLYr30','12.27','5')
 ,('NHL Controversial Shootout Moments','Nhl Controversial Shootout Moments. Check','https://www.youtube.com/watch?v=ll8bMh1I7oU','12.24','5')
 ,('Switzerland vs Slovakia 2023-Highlights','Switzerland remains Group B’s only perfect team with 12 points after four games following a 4-2 victory over Slovakia.','https://www.youtube.com/watch?v=xHyPhgHMoCM','3.04','5')
 ,('Canada vs Switzerland-Highlights','Damon Severson sent the game to OT with 0.4 seconds left, and Mark Stone did the rest in a remarkable comeback win for Canada over Switzerland','https://www.youtube.com/watch?v=JZv24iVczYI','2.32','5')
 ,(' 🏆 Les Dragons de Rouen sacrés champions de France pour la 17ème fois !! ','Au terme d'un match très disputé, les Dragons de Rouen s'imposent en prolongation grâce à Dylan Yeo (4-3) et s'offrent un 17ème titre de champion de France. Rouen remporte la Synerglace Ligue Magnus 22/23 !','https://www.youtube.com/watch?v=uqi5EEhP3M4','8.40','5'),





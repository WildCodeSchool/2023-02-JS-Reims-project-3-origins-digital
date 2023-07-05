CREATE TABLE `user` (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  mail VARCHAR(20) NOT NULL UNIQUE,
  hashedPassword VARCHAR(200) NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL
);

CREATE TABLE video (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100),
  description TEXT NULL,
  url VARCHAR(50),
  thumbnail_url VARCHAR(255),
  time TIME NOT NULL,
  id_category INT DEFAULT NULL,
  KEY `fk_video_category` (`id_category`),
  CONSTRAINT `fk_video_category` FOREIGN KEY (`id_category`) REFERENCES `category`(`id`)
);

CREATE TABLE comment (
  id_user INT NOT NULL,
  id_video INT NOT NULL,
  commentary VARCHAR(100) NULL,
  content TEXT NULL,
  creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `fk_comment_user` (`id_user`),
  KEY `fk_comment_video` (`id_video`),
  CONSTRAINT `fk_comment_user` FOREIGN KEY (id_user) REFERENCES `user`(id),
  CONSTRAINT `fk_comment_video` FOREIGN KEY (id_video) REFERENCES `video`(id)
);

CREATE TABLE `like` (
  id_user INT NOT NULL,
  id_video INT NOT NULL,
  KEY `fk_like_user` (`id_user`),
  KEY `fk_like_video` (`id_video`),
  CONSTRAINT `fk_like_user` FOREIGN KEY (id_user) REFERENCES `user`(id),
  CONSTRAINT `fk_like_video` FOREIGN KEY (id_video) REFERENCES `video`(id)
);


INSERT INTO category (title) VALUES ('football'),('basketball'),('tennis'),('natation'),('hockey');

INSERT INTO video (title, description, url, thumbnail_url, time, id_category) VALUES
('Compétences Folles🤯🔥#Football #Skills', 'Incroyables compétences et astuces de football', 'https://www.youtube.com/embed/JEG1x4iRp-U', 'http://img.youtube.com/vi/7MVKaOsZQ0Y/maxresdefault.jpg', '00:00:24', 1),
('Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'https://www.youtube.com/embed/yxkkgmTK_58',   'http://img.youtube.com/vi/XWWM4jycABI/maxresdefault.jpg', '00:00:25', 1),
('Kylian Mbappe Top 30 des buts', 'Top 30 des buts de la super star du PSG et de l équipe de France Kylian Mbappe', 'https://www.youtube.com/embed/GYiyIacyTUc', 'http://img.youtube.com/vi/GYiyIacyTUc/maxresdefault.jpg', '00:00:27', 1),
('Les 10 meilleures actions de la carrière de Jason Williams', 'Jason Williams a immédiatement marqué la NBA avec son style de jeu flashy. En l’honneur du Throwback Thursday, nous comptons les 10 meilleures actions de sa carrière!', 'https://www.youtube.com/embed/Q8b0XbtpFsA', '
http://img.youtube.com/vi/Q8b0XbtpFsA/maxresdefault.jpg', '00:03:12', 2),
('Top 10 des dunks de la décennie', 'Avant la fin des années 2010, The Starters compte les 10 meilleurs dunks de la décennie.', 'https://www.youtube.com/embed/ue1NT3QhuVU', 'http://img.youtube.com/vi/ue1NT3QhuVU/maxresdefault.jpg', '00:03:18', 2),('Michael Jordan’s Top 60 des meuilleur moment en carrière', 'En l honneur de son 60e anniversaire, jetez un coup d œil au 60 meilleurs jeux en carrière de MJ !

Ne manquez jamais un moment avec les dernières nouvelles, les histoires tendances et les faits saillants pour vous rapprocher de vos joueurs et équipes préférés.', 'https://www.youtube.com/embed/jbW4f60dCNA', 'http://img.youtube.com/vi/jbW4f60dCNA/maxresdefault.jpg', '00:19:02', 2),('Benoit Paire Best Of Petages de Plomb et Craquages','Cassage de raquettes, Engueulades sur l’arbitre ou encore clash avec Bartoli, le tennisman Benoit Paire ne cesse de nous surprendre','https://www.youtube.com/embed/VcbRCdOnIwA','
http://img.youtube.com/vi/VLh5qP1vPwI/maxresdefault.jpg','00:06:21',3),('Novak Djokovic Monstre Mode Tennis 🤯','10 minutes ou Novak Djokovic moments forts du tennis... Pour les meilleures vidéos de tennis ATP et les meilleurs moments du tennis :
Regardez les video officiels de tennis ATP de chaque tournoi: http://tnn.is/YouTube
Tennis TV est le service OFFICIEL de diffusion en direct de lATP Tour.','https://www.youtube.com/embed/4iTiRvk4FHY','http://img.youtube.com/vi/4iTiRvk4FHY/maxresdefault.jpg','00:10:10',3),('Roger Federer: Moments de compétence les plus incroyables!','Les meilleures compétences et les incroyables touches de génie de Roger Federer... Abonnez-vous à notre chaîne pour les meilleures vidéos de tennis ATP et les meilleurs moments du tennis:','https://www.youtube.com/embed/J8voIyM81zY','http://img.youtube.com/vi/J8voIyM81zY/maxresdefault.jpg','00:14:19',3),('Eric Moussambani HD Commentaires Français 2000','Eric Moussambani HD Commentaires Français 2000','https://www.youtube.com/embed/cvJd0KNaM1U','http://i1.ytimg.com/vi/zhi2hHguXPM/maxresdefault.jpg','00:01:03',4),('Championnats Européens / Natation Synchronisée : La France 5e des séries par équipe','CHAMPIONNATS EUROPEENS 2018 / NATATION SYNCHRONISEE / PROGRAMME LIBRE PAR EQUIPE / QUALIFICATIONS. Engagée dans le programme libre par équipe de natation synchronisée, les Françaises ont réalisé un joli spectacle, terminant à la cinquième place des qualifications, avec un total de 86.4667 points. C est la Russie qui termine en tête de ces séries avec un total de 95.5000 points. A revivre en images et dans le conditions du direct avec France tv sport.','https://www.youtube.com/embed/13bSigEDL1Y','
http://img.youtube.com/vi/2ZNklVhqi7I/maxresdefault.jpg','00:06:53',4),('La finale explosive du 100m nage libre','La finale du 100m promettait d être explosive, les trois premiers se tiennent en un tout petit dixième ! Luca Dotto, l Italien, a décroché la médaille d or en 48.25, dominant le Néerlandais Sebastiaan Verschuren en 48.32 et Clément Mignon, le Français en 48.36. L autre Français, Jérémy Stravius prend la quatrième place, au pied du podium en 48.53, un peu loin de la médaillé. Une course à vivre dans les conditions du direct.','https://www.youtube.com/embed/xpdmx3jIsss','http://img.youtube.com/vi/J7EkzIWvxvc/maxresdefault.jpg','00:01:55',4),('Top 10 des combats de la NHL de tous les temps | NBC Sports','Jetez un coup d œil à certains des combats les plus fous de la NHL de tous les temps, y compris une bagarre qui a vu des joueurs des Bruins quitter la patinoire pour combattre des fans des Rangers.','https://www.youtube.com/embed/H_neSjf8QMA','http://img.youtube.com/vi/zC2C2oD9fiE/maxresdefault.jpg','00:14:28',5),('Top 15 des buts des séries éliminatoires de la Coupe Stanley 2023 | NHL','Une bataille pour le meilleur but des Playoffs, les Stars montrent leur talent tout au long des séries éliminatoires et les Champs réussissent une paire de jeux d embrayage
Pour la dernière action de hockey','https://www.youtube.com/embed/Ehia0yBZ79w','http://img.youtube.com/vi/Ehia0yBZ79w/maxresdefault.jpg','00:07:40',5),('Meuilleur tire de la NHL , Sniper !!!','Tire en force NHL pendant les matchs ! Ce sont tous des mouvements super rares que vous ne voyez pas souvent pendant les matchs de la NHL. Apprécier!','https://www.youtube.com/embed/kRw7kzNtO04','http://img.youtube.com/vi/kRw7kzNtO04/maxresdefault.jpg','00:08:41',5),




('Compétences Folles🤯🔥#Football #Skills', 'Incroyables compétences et astuces de football', 'https://www.youtube.com/embed/JEG1x4iRp-U', 'http://img.youtube.com/vi/7MVKaOsZQ0Y/maxresdefault.jpg', '00:00:24', 1),
('Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'https://www.youtube.com/embed/yxkkgmTK_58',   'http://img.youtube.com/vi/XWWM4jycABI/maxresdefault.jpg', '00:00:25', 1),
('Kylian Mbappe Top 30 des buts', 'Top 30 des buts de la super star du PSG et de l équipe de France Kylian Mbappe', 'https://www.youtube.com/embed/GYiyIacyTUc', 'http://img.youtube.com/vi/GYiyIacyTUc/maxresdefault.jpg', '00:00:27', 1),
('Les 10 meilleures actions de la carrière de Jason Williams', 'Jason Williams a immédiatement marqué la NBA avec son style de jeu flashy. En l’honneur du Throwback Thursday, nous comptons les 10 meilleures actions de sa carrière!', 'https://www.youtube.com/embed/Q8b0XbtpFsA', '
http://img.youtube.com/vi/Q8b0XbtpFsA/maxresdefault.jpg', '00:03:12', 2),
('Top 10 des dunks de la décennie', 'Avant la fin des années 2010, The Starters compte les 10 meilleurs dunks de la décennie.', 'https://www.youtube.com/embed/ue1NT3QhuVU', 'http://img.youtube.com/vi/ue1NT3QhuVU/maxresdefault.jpg', '00:03:18', 2),('Michael Jordan’s Top 60 des meuilleur moment en carrière', 'En l honneur de son 60e anniversaire, jetez un coup d œil au 60 meilleurs jeux en carrière de MJ !

Ne manquez jamais un moment avec les dernières nouvelles, les histoires tendances et les faits saillants pour vous rapprocher de vos joueurs et équipes préférés.', 'https://www.youtube.com/embed/jbW4f60dCNA', 'http://img.youtube.com/vi/jbW4f60dCNA/maxresdefault.jpg', '00:19:02', 2),('Benoit Paire Best Of Petages de Plomb et Craquages','Cassage de raquettes, Engueulades sur l’arbitre ou encore clash avec Bartoli, le tennisman Benoit Paire ne cesse de nous surprendre','https://www.youtube.com/embed/VcbRCdOnIwA','
http://img.youtube.com/vi/VLh5qP1vPwI/maxresdefault.jpg','00:06:21',3),('Novak Djokovic Monstre Mode Tennis 🤯','10 minutes ou Novak Djokovic moments forts du tennis... Pour les meilleures vidéos de tennis ATP et les meilleurs moments du tennis :
Regardez les video officiels de tennis ATP de chaque tournoi: http://tnn.is/YouTube
Tennis TV est le service OFFICIEL de diffusion en direct de lATP Tour.','https://www.youtube.com/embed/4iTiRvk4FHY','http://img.youtube.com/vi/4iTiRvk4FHY/maxresdefault.jpg','00:10:10',3),('Roger Federer: Moments de compétence les plus incroyables!','Les meilleures compétences et les incroyables touches de génie de Roger Federer... Abonnez-vous à notre chaîne pour les meilleures vidéos de tennis ATP et les meilleurs moments du tennis:','https://www.youtube.com/embed/J8voIyM81zY','http://img.youtube.com/vi/J8voIyM81zY/maxresdefault.jpg','00:14:19',3),('Eric Moussambani HD Commentaires Français 2000','Eric Moussambani HD Commentaires Français 2000','https://www.youtube.com/embed/cvJd0KNaM1U','http://i1.ytimg.com/vi/zhi2hHguXPM/maxresdefault.jpg','00:01:03',4),('Championnats Européens / Natation Synchronisée : La France 5e des séries par équipe','CHAMPIONNATS EUROPEENS 2018 / NATATION SYNCHRONISEE / PROGRAMME LIBRE PAR EQUIPE / QUALIFICATIONS. Engagée dans le programme libre par équipe de natation synchronisée, les Françaises ont réalisé un joli spectacle, terminant à la cinquième place des qualifications, avec un total de 86.4667 points. C est la Russie qui termine en tête de ces séries avec un total de 95.5000 points. A revivre en images et dans le conditions du direct avec France tv sport.','https://www.youtube.com/embed/13bSigEDL1Y','
http://img.youtube.com/vi/2ZNklVhqi7I/maxresdefault.jpg','00:06:53',4),('La finale explosive du 100m nage libre','La finale du 100m promettait d être explosive, les trois premiers se tiennent en un tout petit dixième ! Luca Dotto, l Italien, a décroché la médaille d or en 48.25, dominant le Néerlandais Sebastiaan Verschuren en 48.32 et Clément Mignon, le Français en 48.36. L autre Français, Jérémy Stravius prend la quatrième place, au pied du podium en 48.53, un peu loin de la médaillé. Une course à vivre dans les conditions du direct.','https://www.youtube.com/embed/xpdmx3jIsss','http://img.youtube.com/vi/J7EkzIWvxvc/maxresdefault.jpg','00:01:55',4),('Top 10 des combats de la NHL de tous les temps | NBC Sports','Jetez un coup d œil à certains des combats les plus fous de la NHL de tous les temps, y compris une bagarre qui a vu des joueurs des Bruins quitter la patinoire pour combattre des fans des Rangers.','https://www.youtube.com/embed/H_neSjf8QMA','http://img.youtube.com/vi/zC2C2oD9fiE/maxresdefault.jpg','00:14:28',5),('Top 15 des buts des séries éliminatoires de la Coupe Stanley 2023 | NHL','Une bataille pour le meilleur but des Playoffs, les Stars montrent leur talent tout au long des séries éliminatoires et les Champs réussissent une paire de jeux d embrayage
Pour la dernière action de hockey','https://www.youtube.com/embed/Ehia0yBZ79w','http://img.youtube.com/vi/Ehia0yBZ79w/maxresdefault.jpg','00:07:40',5),('Meuilleur tire de la NHL , Sniper !!!','Tire en force NHL pendant les matchs ! Ce sont tous des mouvements super rares que vous ne voyez pas souvent pendant les matchs de la NHL. Apprécier!','https://www.youtube.com/embed/kRw7kzNtO04','http://img.youtube.com/vi/kRw7kzNtO04/maxresdefault.jpg','00:08:41',5)
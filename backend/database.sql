CREATE TABLE `user` (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  mail VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL,
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

INSERT INTO `user` (name, mail, password, is_admin) VALUES ('user', 'user@origins.ju', 'azerty', FALSE), ('admin', 'admin@origins.ju', 'azerty', TRUE);

INSERT INTO category (title) VALUES ('football'),('basketball'),('tennis'),('swimming'),('hockey');

INSERT INTO video (title, description, url, thumbnail_url, time, id_category) VALUES
('Compétences Folles🤯🔥#Football #Skills', 'Incroyables compétences et astuces de football', 'https://www.youtube.com/embed/JEG1x4iRp-U', 'http://img.youtube.com/vi/7MVKaOsZQ0Y/maxresdefault.jpg', '00:00:24', 1),
('Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'Meilleure routine matinale pour les joueurs de football ⚽️🔥 #football #soccer #shorts', 'https://www.youtube.com/embed/yxkkgmTK_58',   'http://img.youtube.com/vi/XWWM4jycABI/maxresdefault.jpg', '00:00:25', 1),
('Kylian Mbappe Top 30 des buts', 'Top 30 des buts de la super star du PSG et de l équipe de France Kylian Mbappe', 'https://www.youtube.com/watch?v=GYiyIacyTUc', 'http://img.youtube.com/vi/GYiyIacyTUc/maxresdefault.jpg', '00:00:27', 1),
('Les 10 meilleures actions de la carrière de Jason Williams', 'Jason Williams a immédiatement marqué la NBA avec son style de jeu flashy. En l’honneur du Throwback Thursday, nous comptons les 10 meilleures actions de sa carrière!', 'https://www.youtube.com/embed/Q8b0XbtpFsA', '
http://img.youtube.com/vi/Q8b0XbtpFsA/maxresdefault.jpg', '00:03:12', 2),
('Top 10 des dunks de la décennie', 'Avant la fin des années 2010, The Starters compte les 10 meilleurs dunks de la décennie.', 'https://www.youtube.com/embed/ue1NT3QhuVU', 'http://img.youtube.com/vi/ue1NT3QhuVU/maxresdefault.jpg', '00:03:18', 2),('Michael Jordan’s Top 60 Career Plays', 'In honor of his 60th birthday, take a look as we countdown MJ’s top 60 career plays!

Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.', 'https://www.youtube.com/watch?v=jbW4f60dCNA&t=79s', 'http://img.youtube.com/vi/jbW4f60dCNA/maxresdefault.jpg', '00:19:02', 2),('Benoit Paire Best Of Petages de Plomb et Craquages','Cassage de raquettes, Engueulades sur l’arbitre ou encore clash avec Bartoli, le tennisman Benoit Paire ne cesse de nous surprendre','https://www.youtube.com/watch?v=VLh5qP1vPwI','
http://img.youtube.com/vi/VLh5qP1vPwI/maxresdefault.jpg','00:06:21',3)
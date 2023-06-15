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

INSERT INTO `origins`.`video`(title, description, url, thumbnail_url, time, id_category) VALUES 
("Meilleurs buts de l année 2022","","https://youtu.be/4v-rIjHpyEk","http://i3.ytimg.com/vi/4v-rIjHpyEk/hqdefault.jpg", "0:10:27", "1"),("Kobe Bryant BEST 100 Plays & Moments Of His NBA Career","RIP to the legend, Kobe Bryant. Check out a tribute video to Kobe Bryant best & top 100 plays, highlights & moments of his NBA career for the Los Angeles Lakers.
Created by GD Latest Highlights","https://www.youtube.com/watch?v=OTTWedyp37o", "http://i3.ytimg.com/vi/OTTWedyp37o/hqdefault.jpg", "0:19:03", "2"),
(" Carlos Alcaraz vs Lorenzo Musetti Rollercoaster Match! Hamburg 2022 Final Extended Highlights ","","https://www.youtube.com/watch?v=q77b-uFOiRc", "http://i3.ytimg.com/vi/q77b-uFOiRc/hqdefault.jpg", "0:14:15", "3"),
("Championnats d Europe 2022 : De l or pour les Bleus 🇫🇷 ","Le titre des Français sur le 4x100 m nage libre mixte, la médaille de Marie #Wattel ou le doublé de David #Popovici dans un temps canon : revivez les meilleurs moments de la cinquième journée des Championnats d Europe de natation de #Rome2022 (Italie)","https://www.youtube.com/watch?v=OSzOVLo2_Ao", "http://i3.ytimg.com/vi/OSzOVLo2_Ao/hqdefault.jpg", "0:10:41", "4"),
("Golden Knights vs Canadiens-Faits Saillants","Voici des faits saillants du match qui opposait les Canadiens de Montréal aux Golden Knights de Vegas le 24 juin 2021.","https://www.youtube.com/watch?v=z-32F-CoIt4", "http://i3.ytimg.com/vi/z-32F-CoIt4/hqdefault.jpg", "0:10:47", "5");
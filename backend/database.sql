CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  mail VARCHAR(20) NOT NULL,
  password varchar(20) NOT NULL,
  isAdmin BOOLEAN NOT NULL DEFAULT FALSE
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
date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
KEY `fk_comment_use` (`id_user`),
KEY `fk_comment_video` (`id_video`),
CONSTRAINT `fk_comment_use` FOREIGN KEY (id_user) REFERENCES user(id),
CONSTRAINT `fk_comment_video` FOREIGN KEY (id_video) REFERENCES video(id)
);
CREATE TABLE liker(
id_user INT NOT NULL,
id_video INT NOT NULL,
isLiker BOOLEAN NOT NULL DEFAULT FALSE,
KEY `fk_liker_user` (`id_user`),
KEY `fk_liker_video` (`id_video`),
CONSTRAINT `fk_liker_user` FOREIGN KEY (id_user) REFERENCES user(id),
CONSTRAINT `fk_liker_video` FOREIGN KEY (id_video) REFERENCES video(id)
);

INSERT INTO user (name,mail,password,isAdmin) VALUES ('user', 'user@origins.ju', 'azerty', FALSE), ('admin', 'admin@origins.ju', 'azerty', TRUE);
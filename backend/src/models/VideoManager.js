const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (title, description, url, thumbnail_url, time, id_category) VALUES (?,?,?,?,?,?)`,
      [
        video.title,
        video.description,
        video.url,
        video.thumbnail_url,
        video.time,
        video.id_category,
      ]
    );
  }

  update(video) {
    return this.database.query(
      `update video set title = ?, description = ?, url = ?, thumbnail_url = ?, time = ?, id_category = ? WHERE id = ?`,
      [
        video.title,
        video.description,
        video.url,
        video.thumbnail_url,
        video.time,
        video.id_category,
        video.id, // Ajoutez la valeur de l'ID à la fin du tableau de paramètres
      ]
    );
  }
}

module.exports = VideoManager;

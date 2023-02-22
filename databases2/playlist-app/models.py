from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""

    __tablename__ = "playlists"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)

def __repr__(self):
        return f"<Playlist name={self.name} description={self.description} >"

class Song(db.Model):
    """Song."""

    __tablename__ = "songs"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String, nullable=False)
    artist = db.Column(db.String, nullable=False)
    album = db.relationship("Playlist", secondary="playlists_songs", backref='songs')

    def __repr__(self):
        return f"<Song title={self.title} artist={self.artist} >"
    
class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""

    __tablename__="playlists_songs"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    playlist_id = db.Column(db.Integer, db.ForeignKey("playlists.id"))
    song_id = db.Column(db.Integer, db.ForeignKey("songs.id"))

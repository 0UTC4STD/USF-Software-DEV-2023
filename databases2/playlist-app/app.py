from flask import Flask, redirect, render_template,flash 
from flask_debugtoolbar import DebugToolbarExtension
from models import db, Playlist, Song, PlaylistSong
from forms import NewSongForPlaylistForm, SongForm, PlaylistForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playlist-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"

toolbar = DebugToolbarExtension(app)

def connect_db(app):
    """Connect to database."""
    app.app_context().push()
    db.app = app
    db.init_app(app)

connect_db(app)


@app.route("/")
def root():
    """Homepage: redirect to /playlists."""

    return redirect("/playlists")

@app.route("/playlists")
def show_all_playlists():
    """Return a list of playlists."""

    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)


@app.route("/playlists/<int:playlist_id>")
def show_playlist(playlist_id):
    """Show detail on specific playlist."""

    playlist = Playlist.query.get_or_404(playlist_id)
    return render_template("playlist.html", playlist=playlist)

@app.route('/playlists/<int:playlist_id>/add-song', methods=['GET', 'POST'])
def add_song_to_playlist(playlist_id):
    form = NewSongForPlaylistForm()
    playlist = Playlist.query.get(playlist_id)
    form.song.choices = [(song.id, song.title) for song in Song.query.all()]

    if form.validate_on_submit():
        song = Song.query.get(form.song.data)
        playlist.songs.append(song)
        db.session.commit()
        flash(f"Added {song.title} to {playlist.name}.")
        return redirect(f"/playlists/{playlist_id}")

    return render_template("add_song_to_playlist.html", form=form, playlist=playlist)


@app.route("/songs")
def show_all_songs():
    """Show list of songs."""

    songs = Song.query.all()
    return render_template("songs.html", songs=songs)


@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """return a specific song"""

    song = Song.query.get_or_404(song_id)
    return render_template("song.html", song=song)


@app.route("/songs/add", methods=["GET", "POST"])
def add_song():
    """Handle add-song form:

    - if form not filled out or invalid: show form
    - if valid: add song to database and redirect to list-of-songs
    """

    form = SongForm()
    if form.validate_on_submit():
        title = form.title.data
        artist = form.artist.data

        new_song = Song(title=title, artist=artist)
        db.session.add(new_song)
        db.session.commit()

        return redirect("/songs")

    return render_template("new_song.html", form=form)


@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
    """Handle add-playlist form:
    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-playlists
    """
    form = PlaylistForm()
    form.songs.choices = [(song.id, song.title) for song in Song.query.all()]

    if form.validate_on_submit():
        playlist = Playlist(
            name=form.name.data,
            description=form.description.data
        )
        db.session.add(playlist)
        db.session.commit()

        song = Song.query.get(form.songs.data)
        playlist.songs.append(song)
        db.session.commit()

        return redirect("/playlists")

    return render_template("new_playlist.html", form=form)
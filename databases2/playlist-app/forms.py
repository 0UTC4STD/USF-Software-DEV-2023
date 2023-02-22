from wtforms import StringField, SelectField, SubmitField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired

class PlaylistForm(FlaskForm):
    """Form for adding playlists."""
   
    name = StringField("Name:", validators=[InputRequired()])
    description = StringField("Description:", validators=[InputRequired()])
    songs = SelectField('Songs to Add', coerce=int)


class SongForm(FlaskForm):
    """Form for adding songs."""

    title = StringField("Title:", validators=[InputRequired()])
    artist = StringField("Artist:", validators=[InputRequired()])

class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
    submit = SubmitField('Add Song')

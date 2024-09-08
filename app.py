from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

# Connect to the database
conn = sqlite3.connect('playlist.db')

c = conn.cursor()

# Create table for playlist
c.execute('''CREATE TABLE IF NOT EXISTS playlist
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
              song TEXT NOT NULL,
              artist TEXT NOT NULL,
              album TEXT NOT NULL,
              url TEXT NOT NULL);''')

# Close the database connection
conn.close()

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/about.html")
def about():
    return render_template("about.html")

@app.route("/search.html")
def search():
    return render_template("search.html")

@app.route("/artists.html")
def artists():
    return render_template("artists.html")

@app.route("/artist_spotlight.html")
def artist_spotlight():
    return render_template("artist_spotlight.html")

@app.route("/artist01-albums.html")
def artist1():
    return render_template("artist01-albums.html")

@app.route("/artist02-albums.html")
def artist2():
    return render_template("artist02-albums.html")

@app.route("/artist03-albums.html")
def artist3():
    return render_template("artist03-albums.html")

@app.route("/artist04-albums.html")
def artist4():
    return render_template("artist04-albums.html")

@app.route("/artist05-albums.html")
def artist5():
    return render_template("artist05-albums.html")

@app.route("/album01-songs.html")
def album1():
    return render_template("album01-songs.html")

@app.route("/album02-songs.html")
def album2():
    return render_template("album02-songs.html")

@app.route("/album03-songs.html")
def album3():
    return render_template("album03-songs.html")

@app.route("/album04-songs.html")
def album4():
    return render_template("album04-songs.html")

@app.route("/album05-songs.html")
def album5():
    return render_template("album05-songs.html")

@app.route("/album06-songs.html")
def album6():
    return render_template("album06-songs.html")

@app.route("/album07-songs.html")
def album7():
    return render_template("album07-songs.html")

@app.route("/album08-songs.html")
def album8():
    return render_template("album08-songs.html")

@app.route("/album09-songs.html")
def album9():
    return render_template("album09-songs.html")

@app.route("/album10-songs.html")
def album10():
    return render_template("album10-songs.html")

@app.route("/album11-songs.html")
def album11():
    return render_template("album11-songs.html")

@app.route("/album12-songs.html")
def album12():
    return render_template("album12-songs.html")

@app.route("/album13-songs.html")
def album13():
    return render_template("album13-songs.html")

@app.route("/album14-songs.html")
def album14():
    return render_template("album14-songs.html")

@app.route("/album15-songs.html")
def album15():
    return render_template("album15-songs.html")

@app.route("/album16-songs.html")
def album16():
    return render_template("album16-songs.html")

@app.route("/album17-songs.html")
def album17():
    return render_template("album17-songs.html")

@app.route("/album18-songs.html")
def album18():
    return render_template("album18-songs.html")

@app.route("/album19-songs.html")
def album19():
    return render_template("album19-songs.html")

@app.route("/album20-songs.html")
def album20():
    return render_template("album20-songs.html")

@app.route("/album21-songs.html")
def album21():
    return render_template("album21-songs.html")

@app.route("/album22-songs.html")
def album22():
    return render_template("album22-songs.html")

@app.route("/album23-songs.html")
def album23():
    return render_template("album23-songs.html")

@app.route("/album24-songs.html")
def album24():
    return render_template("album24-songs.html")

@app.route("/album25-songs.html")
def album25():
    return render_template("album25-songs.html")

@app.route("/index.html")
def home():
    return render_template("index.html")



@app.route('/playlist.html')
def playlist():
    # Connect to the database
    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()

    # Select all songs in the playlist
    c.execute("SELECT * FROM playlist")
    playlist = c.fetchall()

    # Close the database connection
    conn.close()

    return render_template('playlist.html', playlist=playlist)

@app.route('/add', methods=['POST'])
def add():
    # Get the data from the form
    song = request.form['song']
    artist = request.form['artist']
    album = request.form['album']
    url = request.form['url']

    # Connect to the database
    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()

    # Check if the song already exists in the playlist
    c.execute("SELECT * FROM playlist WHERE song = ?", (song,))
    exists = c.fetchone()

    # If the song doesn't exist, add it to the playlist
    if not exists:
        c.execute("INSERT INTO playlist (song, artist, album, url) VALUES (?, ?, ?, ?)",
                  (song, artist, album, url))
        conn.commit()

    # Close the database connection
    conn.close()
    return redirect(request.referrer)

@app.route('/remove/<int:id>', methods=['POST', 'DELETE'])
def remove(id):
    # Connect to the database
    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()

    # Remove the song from the playlist
    c.execute("DELETE FROM playlist WHERE id=?", (id,))
    conn.commit()

    # Close the database connection
    conn.close()

    # Redirect to the playlist page
    return redirect(request.referrer)





if __name__ == '__main__':
    app.run(debug=True)

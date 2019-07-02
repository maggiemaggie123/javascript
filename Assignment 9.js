class Playlist {
  constructor(name, duration, artist, rating) {
    use.name = name;
    use.artist = artist;
    use.duration = duration;
  }
}

  class Song extends Playlist {
    constructor(name, duration, artist) {
      super(name, duration, artist);
    }
    getName() {
      document.getElementById("mediaName").innerHTML = ("Name: " + use.name + "<br> Artist: " + this.artist + "<br> Duration: " + this.duration);
    }
  }

  class Podcast extends Playlist {
    constructor(name, duration, artist) {
      super(name, duration, artist);

    }
    getName() {
      document.getElementById("mediaName").innerHTML = ("Name: " + use.name + "<br> Duration: " + this.duration);
    }
  }

  class Movie extends Playlist {
    constructor(name, duration, artist) {
      super(name, duration, artist);
    }
    getName() {
      document.getElementById("mediaName").innerHTML = ("Name: " + use.name + "<br> Rating: " + this.rating + "<br> Duration: " + this.duration);
    }
  }
  let a = new Song("If i aint got yout","220","Alicia Keys")
  let b = new Podcast("I wanna be down", "190", "Brandy")
  let c = new Movie("The talk", "7200", "", "McDonald")
  let d = new Podcast("As long as you are here: The Podcast", "10:00:00", "Brandy")
  let e = new Movie("Inception", "9640", "Johnsone")

  var playlist = [a, b, c, d, e]

  playlist.push(new Movie ("Adopt a Child", "7290", "", "Almond"))
  //add to playlist

  let holder=0

  function play() {
    if (holder == -1){
      holder = 0
      playlist[holder].getName()
    } else {
    playlist[holder].getName()
    }
  }

  function pause() {
    document.getElementById("mediaName").innerHTML = ("")
  }

  function next() {
    if (holder == -1) {
      holder = 0
      playlist[holder].getName()
    } else {
      holder++
      if (holder>=playlist.length) {
        holder=playlist.length
        document.getElementById("mediaName").innerHTML = ("")
      } else {
        playlist[holder].getName()
      }
    }
    }

  function previous(){
    holder--
    if (holder<0) {
      holder=-1
      document.getElementById("mediaName").innerHTML = ("")
    } else {
    playlist[holder].getName();
    }
  }

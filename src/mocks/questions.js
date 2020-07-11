const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `http://download.highmp3.org/uploads/music/72974/Holly-Conlan_-_Winter_(highmp3.org).mp3`,
      genre: `rock`,
    }, {
      src: `http://download.highmp3.org/uploads/music/72914/Jason-Wade_-_You-Belong-To-Me-Shrek-Soundtrack_(highmp3.org).mp3`,
      genre: `blues`,
    }, {
      src: `http://download.highmp3.org/uploads/music/72857/Family-Four_-_Hrliga-sommardag_(highmp3.org).mp3`,
      genre: `jazz`,
    }, {
      src: `http://download.highmp3.org/uploads/music/72661/S-Club-7_-_S-Club-Party_(highmp3.org).mp3`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `http://download.highmp3.org/uploads/music/72562/Cosmo-Dennis_-_Sweet-Rosemarie_(highmp3.org).mp3`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Snow`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Daniels`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Beam`,
    }],
  }
];

export {questions};

/*please follow all the rules so that you do not face any problem*/
//song list
   let All_song = [
   {
     name: "Billie Eilish - Listen Before I go",
     path: "asset/music/1.mp3",
     img: "asset/images/1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Queen - Love of my life(live)",
     path: "asset/music/2.mp3",
     img: "asset/images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Danial Caesar - Streetcar",
     path: "asset/music/3.mp3",
     img: "asset/images/3.jpg",
     singer: "Audio Library"
   },
   {
     name: "Khalid - Location",
     path: "asset/music/4.mp3",
     img: "asset/images/4.jpg",
     singer: "imshahed"
   },
   {
     name: "James Arthur - Empty Space(live)",
     path: "asset/music/5.mp3",
     img: "asset/images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Daniel Caesar - Get You",
    path: "asset/music/6.mp3",
    img: "asset/images/6.jpg",
    singer: "Magic Free Release"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
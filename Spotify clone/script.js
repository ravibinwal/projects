console.log("javascript");

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response =await a.text();

    // console.log(response) 
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }
    // console.log(songs)
    return songs
} 
async function main() {
    let songs = await getsongs()
    console.log(songs)

    //loading song from folder to actual html
 let songul=document.querySelector(".songlist")
for (const songa of songs) {
    songul.innerHTML=songul.innerHTML+ `<li>${songa.replaceAll("%20"," ")}</li>`
}
    var audio=new Audio(songs[1])
    // audio.play();
  
    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(duration,audio.currentSrc,audio.currentTime)
        // The duration variable now holds the duration (in seconds) of the audio clip
      });
}
main()
// getsongs() 
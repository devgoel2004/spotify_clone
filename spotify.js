console.log("hello world");
//initializing the variables;
let songIndex=0;
let audioElement =new Audio('Aaakhon_Se_Batana.mp3');
let play=document.getElementById("play");
let bar=document.getElementById("seekbar");
let songItems=document.getElementsByClassName("songItem");
let songs=[
    {songName:"Aakhon-Se-Batana", filePath:"Aaakhon_Se_batana.mp3", coverPath:"aakhon.jpg"},
    {songName:"Chand Balliyan", filePath:"Chand_Ballian.mp3", coverPath:"chand.jpg"},
    {songName:"Chogada", filePath:"Chogada1 (1).mp3", coverPath:"chogada.jpg"},
    {songName:"Teri Aakhon Mein", filePath:"teri.mp3", coverPath:"teri.jpg"},
    {songName:"Subhanallah", filePath:"subhanallah.mp3", coverPath:"subhanallah.jpg"},
    {songName:"Ae Watan", filePath:"Ae_watan.mp3", coverPath:"ae_watan.jpg"},
    
]
//play and pause click
play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }

})
//listen to the event
audioElement.addEventListener('timeupdate',()=>{
    //updare seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    bar.value=progress;
})
bar.addEventListener('change',()=>{
    audioElement.currentTime=bar.value*audioElement.duration/100;
})

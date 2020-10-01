alert('hi! press like button if you like it . ');

'use strict'
window.onload=function a(){
    play_sec();
}
/*Id*/
const id=(i)=>{
    let doc_id=document.getElementById(i);
    return doc_id;
}
/*Class*/
const classes=(c)=>{
    let doc_classes=document.getElementsByClassName(c);
    return doc_classes;
}
const play_sec=()=>{
    id("a").style.borderBottom="15px solid white";
    id("b").style.border="none";
    id("c").style.border="none";
id("d").style.border="none";
id("e").style.border="none";
id("f").style.border="none";    
    classes("play")[0].style.display="block";
    classes("stat")[0].style.display="none";
    classes("arti")[0].style.display="none";
classes("albu")[0].style.display="none";
classes("song")[0].style.display="none";
classes("genr")[0].style.display="none";
}
const station_sec=()=>{
    id("a").style.border="none";
    id("b").style.borderBottom="15px solid white";
    id("c").style.border="none";
id("d").style.border="none";
id("e").style.border="none";
id("f").style.border="none";    
    classes("play")[0].style.display="none";
    classes("stat")[0].style.display="block";
    classes("arti")[0].style.display="none";
classes("albu")[0].style.display="none";
classes("song")[0].style.display="none";
classes("genr")[0].style.display="none";
}
const artist_sec=()=>{
    id("a").style.border="none";
    id("b").style.border="none";
    id("c").style.borderBottom="15px solid white";
id("d").style.border="none";
id("e").style.border="none";
id("f").style.border="none";    
    classes("play")[0].style.display="none";
    classes("stat")[0].style.display="none";
    classes("arti")[0].style.display="block";
classes("albu")[0].style.display="none";
classes("song")[0].style.display="none";
classes("genr")[0].style.display="none"; 
}
const album_sec=()=>{
    id("a").style.border="none";
    id("b").style.border="none";
    id("c").style.border="none";
id("d").style.borderBottom="15px solid white";
id("e").style.border="none";
id("f").style.border="none";    
    classes("play")[0].style.display="none";
    classes("stat")[0].style.display="none";
    classes("arti")[0].style.display="none";
classes("albu")[0].style.display="block";
classes("song")[0].style.display="none";
classes("genr")[0].style.display="none";
}
const song_sec=()=>{
    id("a").style.border="none";
    id("b").style.border="none";
    id("c").style.border="none";
id("d").style.border="none";
id("e").style.borderBottom="15px solid white";
id("f").style.border="none";    
    classes("play")[0].style.display="none";
    classes("stat")[0].style.display="none";
    classes("arti")[0].style.display="none";
classes("albu")[0].style.display="none";
classes("song")[0].style.display="block";
classes("genr")[0].style.display="none";
}
const genre_sec=()=>{
    id("a").style.border="none";
    id("b").style.border="none";
    id("c").style.border="none";
id("d").style.border="none";
id("e").style.border="none";
id("f").style.borderBottom="15px solid white";    
    classes("play")[0].style.display="none";
    classes("stat")[0].style.display="none";
    classes("arti")[0].style.display="none";
classes("albu")[0].style.display="none";
classes("song")[0].style.display="none";
classes("genr")[0].style.display="block"; 
}


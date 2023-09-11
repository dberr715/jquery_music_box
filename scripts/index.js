document.addEventListener('DOMContentLoaded', function (){
console.log ("Everything is loaded");

    const cAudio = document.getElementById ('cAudio');
    const cNoteButton = document.getElementById('c'); 

    cNoteButton.addEventListener('click',()=> {
        cAudio.currentTime = 0;
        cAudio.play();
    });

    const dAudio = document.getElementById ('dAudio');
    const dNoteButton = document.getElementById('d'); 
    
    dNoteButton.addEventListener('click',()=> {
        dAudio.currentTime = 0;
        dAudio.play();     
    });

    const eAudio = document.getElementById ('eAudio');
    const eNoteButton = document.getElementById('e'); 
    
    eNoteButton.addEventListener('click',()=> {
        eAudio.currentTime = 0;
        eAudio.play();      
    });

    const fAudio = document.getElementById ('fAudio');
    const fNoteButton = document.getElementById('f'); 
    
    fNoteButton.addEventListener('click',()=> {
        fAudio.currentTime = 0;
        fAudio.play();    
    });

    const gAudio = document.getElementById ('gAudio');
    const gNoteButton = document.getElementById('g'); 
    
    gNoteButton.addEventListener('click',()=> {
        gAudio.currentTime = 0;
        gAudio.play();         
    });

    const aAudio = document.getElementById ('aAudio');
    const aNoteButton = document.getElementById('a'); 
    
    aNoteButton.addEventListener('click',()=> {
        aAudio.currentTime = 0;
        aAudio.play();       
    });  

const bAudio = document.getElementById ('bAudio');
const bNoteButton = document.getElementById('b'); 

    bNoteButton.addEventListener('click',()=> {
        bAudio.currentTime = 0;
        bAudio.play();       
    });      

});


      


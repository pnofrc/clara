var bbio = document.getElementById("bbio").addEventListener("click", menuBio);
var bconcerts = document.getElementById("bconcerts").addEventListener("click", menuConcerts);
var brepertoire = document.getElementById("brepertoire").addEventListener("click", menuRepertoire);
var bteaching = document.getElementById("bteaching").addEventListener("click", menuTeaching);
var bpress = document.getElementById("bpress").addEventListener("click",menuPress);
var bcontacts = document.getElementById("bcontacts").addEventListener("click",menuContacts);

var bio = document.getElementById("bio");
var concerts = document.getElementById("concerts");
var repertoire = document.getElementById("repertoire");
var teaching = document.getElementById("teaching");
var press = document.getElementById("press");
var contacts = document.getElementById("contacts");



function menuBio(){
    bio.style.display="inline";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="none";
    contacts.style.display="none";

    vbio.play();
}

function menuConcerts(){
    // home.style.display="none";
    bio.style.display="none";
    concerts.style.display="inline";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="none";
    contacts.style.display="none";

    vconcerts.play();
}

function menuRepertoire(){
    // home.style.display="none";
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="inline";
    teaching.style.display="none";
    press.style.display="none";
    contacts.style.display="none";

    vrepertoire.play();
    
}

function menuTeaching(){
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="inline";
    press.style.display="none";
    contacts.style.display="none";



    vteaching.play();
}


function menuPress(){
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="inline";
    contacts.style.display="none";


    vpress.play();
}
    


function menuContacts(){
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="none";
    contacts.style.display="inline";

    vcontacts.play();
}


// $(document).ready(function(){
//     $("button").click(function(){
  
//   var $marginLefty =    $(".content"); // your selector here
  
//   $marginLefty.animate({
//        height:'toggle',width:'toggle',
//         marginLeft: parseInt($marginLefty,10) == 0 ?
//           $marginLefty.outerWidth() :
//           0
//       });
//     });
//   });
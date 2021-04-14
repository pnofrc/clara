// var bhome = document.getElementById("home").addEventListener("click", menuHome );
// var bbio = document.getElementById("bbio").addEventListener("click", menuBio);
// var bconcerts = document.getElementById("bconcerts").addEventListener("click", menuConcerts);
// var brepertoire = document.getElementById("brepertoire").addEventListener("click", menuRepertoire);
// var bteaching = document.getElementById("bteaching").addEventListener("click", menuTeaching);
// var bpress = document.getElementById("bpress").addEventListener("click",menuPress);
// var bcontacts = document.getElementById("bcontacts").addEventListener("click",menuContacts);

// var vhome = document.getElementById("vhome");
// var vbio = document.getElementById("vbio");
// var vconcerts = document.getElementById("vconcerts");
// var vrepertoire = document.getElementById("vrepertoire");
// var vteaching = document.getElementById("vteaching");
// var vpress = document.getElementById("vpress");
// var vcontacts = document.getElementById("vcontacts");

// var home = document.getElementById("hometext");
// var bio = document.getElementById("bio");
// var concerts = document.getElementById("concerts");
// var repertoire = document.getElementById("repertoire");
// var teaching = document.getElementById("teaching");
// var press = document.getElementById("press");
// var contacts = document.getElementById("contacts");

// function menuHome(){
    
//     home.style.display="inline";
//     bio.style.display="none";
//     concerts.style.display="none";
//     repertoire.style.display="none";
//     teaching.style.display="none";
//     press.style.display="none";
//     contacts.style.display="none";

//     vhome.style.display="inline";
//     vbio.style.display="none";
//     vconcerts.style.display="none";
//     vrepertoire.style.display="none";
//     vteaching.style.display="none";
//     vpress.style.display="none";
//     vcontacts.style.display="none";



//     vhome.load();
// }

// function menuBio(){
//     home.style.display="none";
//     bio.style.display="inline";
//     concerts.style.display="none";
//     repertoire.style.display="none";
//     teaching.style.display="none";
//     press.style.display="none";
//     contacts.style.display="none";

//     vhome.style.display="none";
//     vbio.style.display="inline";
//     vconcerts.style.display="none";
//     vrepertoire.style.display="none";
//     vteaching.style.display="none";
//     vpress.style.display="none";
//     vcontacts.style.display="none";

//     vbio.play();
// }

// function menuConcerts(){
//     home.style.display="none";
//     bio.style.display="none";
//     concerts.style.display="inline";
//     repertoire.style.display="none";
//     teaching.style.display="none";
//     press.style.display="none";
//     contacts.style.display="none";

//     vhome.style.display="none";
//     vbio.style.display="none";
//     vconcerts.style.display="inline";
//     vrepertoire.style.display="none";
//     vteaching.style.display="none";
//     vpress.style.display="none";
//     vcontacts.style.display="none";

//     vconcerts.play();
// }

// function menuRepertoire(){
//     home.style.display="none";
//     bio.style.display="none";
//     concerts.style.display="none";
//     repertoire.style.display="inline";
//     teaching.style.display="none";
//     press.style.display="none";
//     contacts.style.display="none";

//     vhome.style.display="none";
//     vbio.style.display="none";
//     vconcerts.style.display="none";
//     vrepertoire.style.display="inline";
//     vteaching.style.display="none";
//     vpress.style.display="none";
//     vcontacts.style.display="none";

//     vrepertoire.play();
    
// }

// function menuTeaching(){
//     home.style.display="none";
//     bio.style.display="none";
//     concerts.style.display="none";
//     repertoire.style.display="none";
//     teaching.style.display="inline";
//     press.style.display="none";
//     contacts.style.display="none";

//     vhome.style.display="none";
//     vbio.style.display="none";
//     vconcerts.style.display="none";
//     vrepertoire.style.display="none";
//     vteaching.style.display="inline";
//     vpress.style.display="none";
//     vcontacts.style.display="none";

//     vteaching.play();
// }


function menuPress(){
    home.style.display="none";
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="inline";
    contacts.style.display="none";

    vhome.style.display="none";
    vbio.style.display="none";
    vconcerts.style.display="none";
    vrepertoire.style.display="none";
    vteaching.style.display="none";
    vpress.style.display="inline";
    vcontacts.style.display="none";

    vpress.play();
}
    


function menuContacts(){
    home.style.display="none";
    bio.style.display="none";
    concerts.style.display="none";
    repertoire.style.display="none";
    teaching.style.display="none";
    press.style.display="none";
    contacts.style.display="inline";


    vhome.style.display="none";
    vbio.style.display="none";
    vconcerts.style.display="none";
    vrepertoire.style.display="none";
    vteaching.style.display="none";
    vpress.style.display="none";
    vcontacts.style.display="inline";



    vcontacts.play();
}


$(document).ready(function(){
    $("button").click(function(){
  
  var $marginLefty =    $(".content"); // your selector here
  
  $marginLefty.animate({
       height:'toggle',width:'toggle',
        marginLeft: parseInt($marginLefty,10) == 0 ?
          $marginLefty.outerWidth() :
          0
      });
    });
  });
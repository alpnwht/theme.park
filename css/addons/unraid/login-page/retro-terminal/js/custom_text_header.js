
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> _________  ___  ___  _______           ________  ________  ___  ________     
|\___   ___\\  \|\  \|\  ___ \         |\   ____\|\   __  \|\  \|\   ___ \    
\|___ \  \_\ \  \\\  \ \   __/|        \ \  \___|\ \  \|\  \ \  \ \  \_|\ \   
     \ \  \ \ \   __  \ \  \_|/__       \ \  \  __\ \   _  _\ \  \ \  \ \\ \  
      \ \  \ \ \  \ \  \ \  \_|\ \       \ \  \|\  \ \  \\  \\ \  \ \  \_\\ \ 
       \ \__\ \ \__\ \__\ \_______\       \ \_______\ \__\\ _\\ \__\ \_______\
        \|__|  \|__|\|__|\|_______|        \|_______|\|__|\|__|\|__|\|_______|</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

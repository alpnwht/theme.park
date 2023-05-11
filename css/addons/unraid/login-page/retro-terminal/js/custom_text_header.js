
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>    ____  ________________  _______   ___________   __________ 
   / __ \/ ____/ ____/ __ \/ ____/ | / /  _/__  /  / ____/ __ \
  / /_/ / __/ / /   / / / / / __/  |/ // /   / /  / __/ / /_/ /
 / _, _/ /___/ /___/ /_/ / /_/ / /|  // /   / /__/ /___/ _, _/ 
/_/ |_/_____/\____/\____/\____/_/ |_/___/  /____/_____/_/ |_|  
                                                               </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

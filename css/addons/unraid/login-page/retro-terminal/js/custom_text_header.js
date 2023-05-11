
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>          _   __ _____  __ __     ___  ___    __ _____  __   ___  __  
  /\/\   /_\ / _/__   \/__/__\   / __\/___\/\ \ /__   \/__\ /___\/ /  
 /    \ //_\\\ \  / /\/_\/ \//  / /  //  //  \/ / / /\/ \////  // /   
/ /\/\ /  _  _\ \/ / //_/ _  \ / /__/ \_// /\  / / / / _  / \_// /___ 
\/    \\_/ \_\__/\/  \__\/ \_/ \____\___/\_\ \/  \/  \/ \_\___/\____/ 
                 ___  __   ___  ___  __   _                           
                / _ \/__\ /___\/ _ \/__\ /_\   /\/\                   
               / /_)/ \////  // /_\/ \////_\\ /    \                  
              / ___/ _  / \_// /_\/ _  /  _  / /\/\ \                 
              \/   \/ \_\___/\____\/ \_\_/ \_\/    \/                 
                                                                      </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

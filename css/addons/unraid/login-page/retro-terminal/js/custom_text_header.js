
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>__  ______   _________________    _________  _  ___________  ____  __     ___  ___  ____  ________  ___   __  ___
  /  |/  / _ | / __/_  __/ __/ _ \  / ___/ __ \/ |/ /_  __/ _ \/ __ \/ /    / _ \/ _ \/ __ \/ ___/ _ \/ _ | /  |/  /
 / /|_/ / __ |_\ \  / / / _// , _/ / /__/ /_/ /    / / / / , _/ /_/ / /__  / ___/ , _/ /_/ / (_ / , _/ __ |/ /|_/ / 
/_/  /_/_/ |_/___/ /_/ /___/_/|_|  \___/\____/_/|_/ /_/ /_/|_|\____/____/ /_/  /_/|_|\____/\___/_/|_/_/ |_/_/  /_/</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header

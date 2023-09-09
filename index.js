function doDark(run = true){
  const css = document.getElementById("intranet-dark-mode");

  if(!run && css)
    css.remove();

  if(run && !css)
    document.head.insertAdjacentHTML("beforeend", `<link href="https://alxjourney.github.io/intranet-dark-mode/style.css" id="intranet-dark-mode" rel="stylesheet" />`)
} 

doDark();

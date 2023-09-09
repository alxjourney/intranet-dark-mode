function doDark(run = true){
  const css = document.getElementById("intranet-dark-mode");

  if(!run && css)
    css.remove();

  if(run && !css)
    fetch("https://raw.githubusercontent.com/alxjourney/intranet-dark-mode/main/style.css")
      .then(res => res.text())
      .then( res => document.body.insertAdjacentHTML("beforeend", `<style id="intranet-dark-mode">${res}</style>`))
} 

doDark();

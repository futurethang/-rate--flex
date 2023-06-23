import html2canvas from './html2canvas.mjs';

window.captureToCanvas = function() {
  const element = document.querySelector("#capture");
  html2canvas(element).then(canvas => {
    document.body.appendChild(canvas)
  });
}
const letsGo = document.querySelector("#letsGo");
const btnLetsGo = document.querySelector("#btnLetsGo");
const XletsGo = document.querySelector("#XletsGo");

const goodnight = document.querySelector("#goodnight");
const Xgoodnight = document.querySelector("#Xgoodnight");
const btnGoodNight = document.querySelector("#btnGoodNight");

const btn3Dias = document.querySelector("#btn3Dias");
const dias = document.querySelector("#dias");
const Xdias = document.querySelector("#Xdias")

const btnCor = document.querySelector("#btnCor");
const cor = document.querySelector("#cor");
const Xcor = document.querySelector("#Xcor")

function pauseVideo(iframe) {
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}

btnLetsGo.addEventListener("click", () => {
    letsGo.style.opacity = "100%";
    letsGo.style.zIndex = "1000";
})
XletsGo.addEventListener("click", () => {
    letsGo.style.opacity = "0%";
    letsGo.style.zIndex = "-1000";
    let iframeV = document.querySelector("#letIframe");
    pauseVideo(iframeV);
})

btnGoodNight.addEventListener("click", () => {
    goodnight.style.opacity = "100%";
    goodnight.style.zIndex = "1000"
})
Xgoodnight.addEventListener("click", () => {
    goodnight.style.opacity = "0%";
    goodnight.style.zIndex = "-1000";
    let iframeV = document.querySelector("#goodnightF");
    pauseVideo(iframeV);
})

btn3Dias.addEventListener("click", () => {
    dias.style.opacity = "100%";
    dias.style.zIndex = "1000"
})

Xdias.addEventListener("click", () => {
    dias.style.opacity = "0%";
    dias.style.zIndex = "-1000";
    let iframeV = document.querySelector("#diasF");
    pauseVideo(iframeV);
})

btnCor.addEventListener("click", () => {
    cor.style.opacity = "100%";
    cor.style.zIndex = "1000"
})

Xcor.addEventListener("click", () => {
    cor.style.opacity = "0%";
    cor.style.zIndex = "-1000";
    let iframeV = document.querySelector("#corF");
    pauseVideo(iframeV);
})
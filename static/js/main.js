let video = document.getElementById("video");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let urlInput = document.getElementById("url");
let labels = document.getElementsByTagName('label');
let emailInput = document.getElementById("email");
let submitInput = document.getElementById("submit");
submitInput.onclick = login;
urlInput.value = "";
urlInput.setAttribute("accept", "image/png");
labels[1].hidden = "hidden";
emailInput.setAttribute("placeholder", "Email");
urlInput.setAttribute("placeholder", "URL");
urlInput.hidden = "hidden"
var localMediaStream = null;
var constraints = {
    video: {
        width: { max: 960 },
        height: { max: 720 }
    },
    audio: false
};
navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        video.srcObject = stream;
        localMediaStream = stream;
    })
    .catch(function(error) {
        console.log(error);
    });
function login() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL('image/png');
    document.getElementById("url").value = dataURL;
}
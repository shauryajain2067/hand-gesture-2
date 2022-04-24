Webcam.set({
    height:300,
    width:300,
    img_format:'png',
    png_quality:90,
});
Camera=document.getElementById("camera");

Webcam.attach('#Camera');

function take_snapshots(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_snap").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}

console.log("ml5 version - ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OY0YxwhRd/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}


Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera");

function takepic() {
    Webcam.snap(function (pic) {
        document.getElementById("result").innerHTML = '<img id="snap" src="' + pic + '" >';
    });
    
}
p1 = "";
p2 = "";

function speak() {
    speakdata1 = "Prediction one is " + p1;
    speakdata2 = " and the prediction two is " + p2;
    speech_audio = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    window.speechSynthesis.speak(speech_audio);
}
emodel= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5gXX-sqsg/model.json", modelready);
function modelready() {

    console.log("Model is Working!!!!");
}
function checkpic() {
    img = document.getElementById("snap");
    emodel.classify(img, gotresult);
}
function gotresult(e,r){
if(e){
    console.error(e);
}
else{
    console.log(r);
    p1 = r[0].label;
    p2=r[1].label;
    speak();
    document.getElementById("and1").innerHTML=p1;
    document.getElementById("and2").innerHTML=p2;
    if(p1=="thumbs up"){
        document.getElementById("hand1").innerHTML='&#128077';
    }
    else if(p1=="stop"){
        document.getElementById("hand1").innerHTML='&#128400';

    }
    else if(p1=="good"){
        document.getElementById("hand1").innerHTML='&#9996';

    }
    if(p2=="thumbs up"){
        document.getElementById("hand2").innerHTML='&#128077';
    }
    else if(p2=="stop"){
        document.getElementById("hand2").innerHTML='&#128400';

    }
    else if(p2=="good"){
        document.getElementById("hand2").innerHTML='&#9996';

    }
   
   
    
}
}



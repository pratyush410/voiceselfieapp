var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    recognition.start();
document.getElementById("textbox").innerHTML=""
}

recognition.onresult=function(event){
    console.log(event)
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content
}

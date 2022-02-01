function startClassifation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sr3UUYel9/model.json", modelReady);
}

function modelReady(){
    classifier.classify(getResults);
}

function getResults(error, results){
    console.log("get result");
}
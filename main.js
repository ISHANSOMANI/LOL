rightWristx = "";
leftWristy = "";
rightWristy = "";
leftWristx = "";
songleftwrist = ""
songrightwrist = ""
song_status = ""
song1 = ""
song2 ="";
function preload(){
    song1 = loadSound("AttackOnTitan.mp3");
    song2 = loadSound("DemonSlayer.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}


function  modelLoaded(){
    console.log("PoseNet is intialized");
}



function gotPoses(results){
if (results.length > 0){
    console.log(results);

    

rightWristx = results[0].pose.rightWrist.x;
rightWristy= results[0].pose.rightWrist.y;
leftWristx = results[0].pose.leftWrist.x;
leftWristy = results[0].pose.leftWrist.y;
songleftwrist = results[0].pose.keypoints[9].score;
songrightwrist = results[0].pose.keypoints[10].score;
console.log("Right wrist X = "+rightWristx+" Left Wrist X ="+leftWristx+" Right Wrist Y"+rightWristy+"Left Wrist Y"+leftWristy);

}

}
function draw(){
    image(video,0,0,600,500);
    song_status = song1;
    fill("red")
    stroke("blue")
    if (songleftwrist <  0.2){
        circle(leftWristx,leftWristy,30);
        song1.stop()
    }
    if (songleftwrist > 0.2){
        circle(leftWristx,leftWristy,30);
        song1.play()
        document.getElementById("song_name") = "Sasageyo"
    }
    if (songrightwrist > 0.2){ 
        circle(rightWristx,rightWristy,30);
        song2.play()
        document.getElementById("song_name") = "Gurenge"
    }
}

    



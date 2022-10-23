nosex=0;
nosey=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function modelLoaded(){

   console.log('posenet is initialized');
}
function take_snapshot(){
    save('MyFilterImage.png');
}

function draw(){
    image(video,0,0,300,300);
    
    image(clown_nose,nosex,nosey,60,60);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x -30;
        nosey=results[0].pose.nose.y -10;
        console.log("nose x ="+nosex);
        console.log("nose y ="+ nosey);
    }
}
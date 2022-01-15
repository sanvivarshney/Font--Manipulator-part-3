rigthWristX = 0;
leftWristX = 0;
Difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(530, 530);

    canvas = createCanvas(550, 550);
    canvas.position(550, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFC0CB');
    textSize(Difference);
    fill('#FF0000');
    text("Sanvi", 40, 200);
}

function modelLoaded() {
    console.log('PoseNet is Initilized');
}

function gotPoses(results) {
 if(results.length > 0) {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      Difference = floor(leftWristX - rightWristX);
 }
}
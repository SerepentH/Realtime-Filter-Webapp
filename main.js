noseX=0
noseY=0
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/WpkzB6Jp/455-4557163-icon-clown-nose-circle-hd-png-download.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Inistialized');
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw()
{
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('MyFilterImage.png');
}


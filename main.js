function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.center();

}

function draw(){
    
    c = color(255, 204, 0);
    fill(c);
    rect(90,100, 20, 240);
    rect(150, 90, 340, 20);
    rect(150, 330, 340, 20);
    rect(530,100, 20, 240);

    c = color('magenta');
    fill(c);
    circle(100, 100, 100);
    circle(100, 340, 100);
    circle(540, 100, 100);
    circle(540, 340, 100);
}

function take_snapshot(){
    save('filter_image.png');
}

function filter_tint()
{
    tint_color= document.getElementById("color_name").value;
}

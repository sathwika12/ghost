var ghost1, ghost2,ghost3
var sceneImg
var ghost1Img, ghost2Img, ghost3Img

function preload(){
	sceneImg = loadImage("background.png")
	ghost1Img = loadImage("ghost1.png")
	ghost2Img = loadImage("ghost2.png")
	ghost3Img = loadImage("ghost3.png")
}
function setup(){
createCanvas(800,400)

}
function draw(){
	ghost1 = createSprite (200,400,10,20)
	ghost1.addAnimation(ghost1Img)
	ghost2 = createSprite(350,150,10,20)
	ghost2.addAnimation(ghost2Img)
	ghost3 = createSprite(165,80,10,20)
	ghost3.addAnimation(ghost3Img)
	drawsprites();

}
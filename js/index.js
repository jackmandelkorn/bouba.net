console.log("bouba")

for (let i = 0; i < HEARTS.quantity; i++) {
  const heart = document.createElement("img")
  heart.className = "bouba heart clockwise"
  if (Math.round(Math.random())) {
    heart.className = "bouba heart counterclockwise"
  }
  heart.src = "assets/images/bouba-heart.png"
  heart.style.animationDuration = (((HEARTS.speed.min * 100) + Math.floor(Math.random() * ((HEARTS.speed.max - HEARTS.speed.min) * 100))) / 100).toString() + "s"
  heart.style.animationDelay = (((HEARTS.delay.min * 100) + Math.floor(Math.random() * ((HEARTS.delay.max - HEARTS.delay.min) * 100))) / 100).toString() + "s"
  heart.style.left = (Math.round(Math.random() * 1000) / 10).toString() + "vw"
  heart.style.height =  (((HEARTS.size.min * 100) + Math.floor(Math.random() * ((HEARTS.size.max - HEARTS.size.min) * 100))) / 100).toString() + "vh"
  document.body.appendChild(heart)
}

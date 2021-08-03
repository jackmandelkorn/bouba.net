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

for (let i = 0; i < ROSES.quantity; i++) {
  const rose = document.createElement("img")
  rose.className = "bouba rose clockwise"
  if (Math.round(Math.random())) {
    rose.className = "bouba rose counterclockwise"
  }
  rose.src = "assets/images/bouba-rose.png"
  rose.style.animationDuration = (((ROSES.speed.min * 100) + Math.floor(Math.random() * ((ROSES.speed.max - ROSES.speed.min) * 100))) / 100).toString() + "s"
  rose.style.animationDelay = (((ROSES.delay.min * 100) + Math.floor(Math.random() * ((ROSES.delay.max - ROSES.delay.min) * 100))) / 100).toString() + "s"
  rose.style.left = (Math.round(Math.random() * 1000) / 10).toString() + "vw"
  rose.style.height =  (((ROSES.size.min * 100) + Math.floor(Math.random() * ((ROSES.size.max - ROSES.size.min) * 100))) / 100).toString() + "vh"
  document.body.appendChild(rose)
}

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You have hit the dragon for " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 4) {
      console.log("You have slain the dragon!");
      slaying = false;
    } else { 
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon has defeated you.");
    slaying = false;
  }
}
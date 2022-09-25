// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables
const horaire = new Date();
const heure = horaire.getHours();
const minute = horaire.getMinutes();
const seconde = horaire.getSeconds();
let hour = 30 * heure + (30 / 60) * minute + (30 / 3600) * seconde;
console.log(hour);
let min = 6 * minute + (6 / 60) * 60;
console.log(minute);

let sec = 6 * seconde;
console.log(seconde);
AIGUILLEHR.style.transform = `rotate(${hour}deg)`;
AIGUILLEMIN.style.transform = `rotate(${min}deg)`;
AIGUILLESEC.style.transform = `rotate(${sec}deg`;
function demarrerLaMontre() {
  hour += 30 / 3600;
  min += 6 / 60;
  sec += 6;

  AIGUILLEHR.style.transform = `rotate(${hour}deg)`;
  AIGUILLEMIN.style.transform = `rotate(${min}deg)`;
  AIGUILLESEC.style.transform = `rotate(${sec}deg)`;
}

var interval = setInterval(demarrerLaMontre, 1000);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// Déplacer les aiguilles
//function demarrerLaMontre() {}
// Exercuter la fonction chaque second
//var interval = setInterval(demarrerLaMontre, 1000);

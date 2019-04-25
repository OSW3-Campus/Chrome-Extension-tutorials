"use strict";

// 1. On récupère la valeur du paramètre `name`
var value = localStorage.getItem('name');

// 2. Affichage de la valeur du paramètre `name`dans une boite de dialogue.
// On constate que `value` retourne la valeur `null`
alert(value);

// 3. On affecte une valeur au paramètre `name`
localStorage.setItem('name','Sponge Bob');

// 4. Affichage de la valeur du paramètre `name`dans une boite de dialogue.
// La variable `value` retourne maintenant `Sponge Bob`
alert(value);
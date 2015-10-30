function random(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
function random2(min, max) {
    var calcul = 0;
    calcul = Math.floor(Math.random() * (max - min +1)) + min;
    while (calcul === 2) {
    calcul = Math.floor(Math.random() * (max - min +1)) + min;
    }
    return calcul;
}

var gagnerChevre = 0, gagnerVoiture = 0;

function porte(choixPorte, changer) {
    var porte1 = "", porte2 = "", porte3 = "";
    var voiture = random(1, 3);
    var aleatoire1 = random(2, 3);
    var aleatoire2 = random2(1, 3);
    var aleatoire3 = random(1, 2);
    if (voiture === 1) {
        porte1 = "voiture";
        porte2 = "chevre";
        porte3 = "chevre";
        if (aleatoire1 === choixPorte && choixPorte === 2) {
            console.log("Dérière la porte 3 il y a une chevre !");
        } else if (aleatoire1 === choixPorte && choixPorte === 3) {
            console.log("Dérière la porte 2 il y a une chevre !");
        } else {
            console.log("Dérière la porte " + aleatoire1 + " il y a une chevre !");
        }
        

            if (choixPorte === 2 && changer === 0) {
                changer = 1;
            } else if (choixPorte === 3 && changer === 0) {
                changer = 1;
            } else if (choixPorte === 1 && changer === 0) {
                changer = aleatoire1;
            } else {
                console.log("N.U !");
            }
        //changer = Number(prompt("Changer de porte ou garder la porte " + choixPorte + " :"));
            if (changer === 1) {
                gagnerVoiture++;
                return console.log("Vous avez gagné une " + porte1);
            } else if (changer === 2) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte2);
            } else if (changer === 3) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte3);
            } else {
                return console.log("Erreur !");
            }
        
        
    } else if (voiture === 2) {
        porte1 = "chevre";
        porte2 = "voiture";
        porte3 = "chevre";
        if (aleatoire2 === choixPorte && choixPorte === 1) {
            console.log("Dérière la porte 3 il y a une chevre !");
        } else if (aleatoire2 === choixPorte && choixPorte === 3) {
            console.log("Dérière la porte 1 il y a une chevre !");
        } else {
            console.log("Dérière la porte " + aleatoire2 + " il y a une chevre !");
        }
        

            if (choixPorte === 2 && changer === 0) {
                changer = aleatoire2;
            } else if (choixPorte === 3 && changer === 0) {
                changer = 2;
            } else if (choixPorte === 1 && changer === 0) {
                changer = 2;
            } else {
                console.log("N.U !");
            }
        //changer = Number(prompt("Changer de porte ou garder la porte " + choixPorte + " :"));

            if (changer === 1) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte1);
            } else if (changer === 2) {
                gagnerVoiture++;
                return console.log("Vous avez gagné une " + porte2);
            } else if (changer === 3) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte3);
            } else {
                console.log("Erreur !");
            }
        
        
    } else {
        porte1 = "chevre";
        porte2 = "chevre";
        porte3 = "voiture";
        if (choixPorte === 2) {
            console.log("Dérière la porte 1 il y a une chevre !");
        } else if (choixPorte === 3) {
            console.log("Dérière la porte " + aleatoire3 + " il y a une chevre !");
        } else if (choixPorte === 1) {
            console.log("Dérière la porte 2 il y a une chevre !");
        }
        

            if (choixPorte === 2 && changer === 0) {
                changer = 3;
            } else if (choixPorte === 3 && changer === 0) {
                changer = aleatoire3;
            } else if (choixPorte === 1 && changer === 0) {
                changer = 3;
            } else {
                console.log("N.U !");
            }
        //changer = Number(prompt("Changer de porte ou garder la porte " + choixPorte + " :"));

            if (changer === 1) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte1);
            } else if (changer === 2) {
                gagnerChevre++;
                return console.log("Vous avez gagné une " + porte2);
            } else if (changer === 3) {
                gagnerVoiture++;
                return console.log("Vous avez gagné une " + porte3);
            } else {
                console.log("Erreur !");
            }
        
    }

}

/*var choix = Number(prompt("Choissisez une porte : "));
if (choix === 1) {
    porte(1);
} else if (choix === 2) {
    porte(2);
} else if (choix === 3) {
    porte(3);
} else {
    console.log("Erreur !");
}*/

var tour = Number(prompt("Choissisez le nombre de tour :"));
var choix = Number(prompt("Choissez de changer de porte(tapez 0) ou de garder la même à chaque tour(tapez 1) :"));
var u = random(1, 3);
var v = 0;
if (choix === 0) {
    v = 0;
    gain(u, v);
} else if (choix === 1) {
    v = u;
    gain(v, v);
} else {
    alert("Erreur !");
}

function gain(u, v){
    for (var i = 0; i < tour; i++) {
        if (i === tour - 1) {
            alert("Résultat final sur " + tour + " tours : Chèvres gagnées = " + gagnerChevre + " et voitures gagnées = " + gagnerVoiture);
        } else {
            porte(u, v);
            console.log("Gain chèvre = " + gagnerChevre + " et gain voiture = " + gagnerVoiture);
        }
    }
}
function calculerMoyenne(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}


function estAdmis(moyenne) {
  return moyenne >= 10; 
}

function calculerPrixTTC(prixHT, tauxTVA = 0.18) {
  return prixHT + prixHT * tauxTVA;
}

const convertirEnMinutes = heures => heures * 60;
console.log("--- Exercice 1 ---");
console.log(calculerMoyenne(12, 14, 16)); 
console.log(calculerMoyenne(0, 0, 0));    
console.log(estAdmis(9.5));               
console.log(estAdmis(10));                
console.log(calculerPrixTTC(10000));      
console.log(calculerPrixTTC(10000, 0.1)); 
console.log(convertirEnMinutes(2));       
console.log(convertirEnMinutes(0));       



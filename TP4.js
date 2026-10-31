
function additionner(...nombres) {
  let somme = 0;
  for (const nombre of nombres) {
    somme = somme + nombre;
  }
  return somme;
}

console.log("--- Exercice 4 ---");
console.log(additionner(2, 3));          
console.log(additionner(1, 2, 3));       
console.log(additionner(1, 2, 3, 4, 5)); 
console.log(additionner());              
function afficherPremierEtAutres(premier, ...autres) {
  console.log("Premier :", premier);
  console.log("Autres :", autres);
}
afficherPremierEtAutres("a", "b", "c", "d");
function creerFiche(nom, filiere, ...competences) {
  return { nom: nom, filiere: filiere, competences: competences };
}
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));
console.log(creerFiche("Moussa", "IAGE"));
const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
};
function extraireIdentite(etudiant) {
  const { prenom, nom, filiere } = etudiant;
  return { prenom, nom, filiere }; 
}
function calculerMoyenneNotes(notes) {
  if (notes.length === 0) {
    return 0;
  }
  let somme = 0;
  for (const note of notes) {
    somme = somme + note;
  }
  return somme / notes.length;
}
function ajouterNote(etudiant, nouvelleNote) {
  return {
    ...etudiant,                          
    notes: [...etudiant.notes, nouvelleNote] 
  };
}
function creerResume(etudiant, ...options) {
  return {
    identite: extraireIdentite(etudiant),
    moyenne: calculerMoyenneNotes(etudiant.notes),
    options: options
  };
}
console.log("--- Exercice 5 ---");

console.log(extraireIdentite(etudiantL2));

console.log(calculerMoyenneNotes(etudiantL2.notes).toFixed(2)); 
console.log(calculerMoyenneNotes([]));                          

const etudiantAvecNote = ajouterNote(etudiantL2, 18);
console.log(etudiantAvecNote.notes); 

console.log(creerResume(etudiantL2, "Bourse", "Délégué"));
console.log(creerResume(etudiantL2).options); 
console.log(etudiantL2.notes);                          
console.log(etudiantL2.notes.length === 3);          
console.log(etudiantAvecNote !== etudiantL2);           
console.log(etudiantAvecNote.notes !== etudiantL2.notes); 
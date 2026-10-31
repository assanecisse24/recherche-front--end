const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
};
  const { prenom, nom, filiere } = etudiant;
  return { prenom, nom, filiere }; 


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
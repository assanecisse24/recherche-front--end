const etudiant = {
  id: 2026,
  nom: "Ndiaye",
  prenom: "Moussa",
  filiere: "IAGE",
  niveau: "L2",
  ville: "Dakar"
};
const resultats = [15, 11, 17, 13, 16];

console.log("--- Exercice 2 ---");
const { nom, prenom, filiere } = etudiant;
console.log(nom, prenom, filiere); 
const { niveau: classe } = etudiant;
console.log(classe); 
const premiere = resultats[0];
const deuxieme = resultats[1];
const derniere = resultats[resultats.length - 1];
console.log(premiere, deuxieme, derniere); 
const [note1, note2] = resultats;
console.log(note1, note2); 
const [premiereNote, , troisiemeNote] = resultats;
console.log(premiereNote, troisiemeNote); 
const { email = "non renseigné" } = etudiant;
console.log(email); 
console.log(`${prenom} ${nom} est en ${classe}, filière ${filiere}.`);

console.log(resultats); 


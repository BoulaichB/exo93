// # Instructions :
// >*Mis à part si la manière est précicée, tu peux utiliser ce que tu désires comme façon de récuperer un élément et son contenu*
// >*Cherche des methodes pour résoudre les énoncés suivants :*


// ### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
console.log(document.getElementsByClassName('tartine')[0].textContent);
// ### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
console.log(document.getElementById('toast').textContent);
// ### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu, l'élément entier)
console.log(document.getElementsByClassName('tartine')[document.getElementsByClassName('tartine').length - 1]);
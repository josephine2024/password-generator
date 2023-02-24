// Selection des Elemens 
let resultat_element = document.querySelector("#resultat");
let nombre_element=document.querySelector("#nombre");
let majuscule_element=document.querySelector("#majuscule");
let  minuscule_element=document.querySelector("#minuscule");
let number_element=document.querySelector("#number");
let speciale_element=document.querySelector("#symbol");
let form_element=document.querySelector(".formulaire");
let click_element=document.querySelector(".click");

// console.log(resultat_element);

// Tableau des champs du formulaire

const tab_champ=[
    {
        champ:majuscule_element,
        caractere: obtenir_majuscule
    },
    {
        champ:minuscule_element,
        caractere: obtenir_minuscule
    },
    {
        champ:nombre_element,
        caractere: obtenir_nombre
    },

];
//Affichage du mot de passe dans le formulaire
form_element.addEventListener("submit",(e) =>{
    e.preventDefault();
    const length=nombre_element.value;
    let generer_mot_de_passe ="";
    const type_tab=tab_champ.filter(({ champ}) => champ.checked );

    //Boucle pour parcourir l'ensembles des champs et des lettres
    for (i = 0; i< length; i++){

        const num =Math.floor(Math.random() * type_tab.length);
        const lettre=type_tab[num].caractere();
        generer_mot_de_passe +=lettre;
    }
    resultat_element.value=generer_mot_de_passe;
});
// Creation des fonctions

function obtenir_char(min, max){
    const limit= max - min +1;
    return String.fromCharCode(Math.floor(Math.random() * limit) +min);
}

// Fonction permettant d'obtenir un caractere majuscule
function obtenir_majuscule(){
    return obtenir_char(65,90);
} 
// Fonction permettant d'obtenir des caracteres minuscules
function obtenir_minuscule(){
    return obtenir_char(97,122);
}
//  Fonction permettant d'obtenir un nombre
function obtenir_nombre(){
    return obtenir_char(48,57);
}
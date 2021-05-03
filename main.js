// Exo 1
let personnage = {
    nom: "Farhad",
    prenom: "Khibaziev",
    sePresenter(){ 
        console.log(`Bonjour je m'apelle ${this.nom} ${this.prenom} `)
    }
}
personnage.sePresenter()
// Exo 2
let myObj = {
    nom : "Blue",
    myMeth(){ 
        this.nom = prompt("Nouvelle variété de Meth:")
        alert(this.nom)
    }
}
myObj.myMeth()
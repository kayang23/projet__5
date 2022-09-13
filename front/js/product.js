const id = new URLSearchParams (window.location.search).get ("id")

// la liste des produits
let pageKanape

//boite d'option de couleurs
let selectOption = document.getElementById ("colors")

//appel le serveur pour récupérer les informations du produit avec l'id
fetch("http://localhost:3000/api/products/"+ id)
.then (response => response.json())
.then (function (kanape) {
    
    pageKanape = kanape
    
    let parentImg = document.querySelector (".item__img")   
    let img = document.createElement ("img")
        img.setAttribute ("src",kanape.imageUrl)
        img.setAttribute ("alt", kanape.altTxt)
        parentImg.appendChild (img)
    
    let parentTitle = document.getElementById ("title")
    parentTitle.textContent = kanape.name
          
    let parentPrix = document.getElementById ("price")
        parentPrix.textContent = kanape.price
       
    let parentDescrip = document.getElementById ("description")
        parentDescrip.textContent = kanape.description

    for (let selectColor of kanape.colors){
        let option = document.createElement ("option")
            option.textContent = selectColor
            option.setAttribute ("value", selectColor)
            selectOption.appendChild (option)
    }       
    
})

// Je récupère l'id du bouton
const button = document.getElementById ("addToCart");
    
// création d'un evenement au click sur la fonction evenement
button.addEventListener ("click", evenement)
 


function evenement () {

    let selectQuantite = []
    // recupere l'id quantity ligne 76 bloc de quantité
    const quantite = document.getElementById("quantity").value;
    
    // on recupere la valeur l'option (colors)
    const option = selectOption.value;
     
    if (quantite>0 && quantite<=100 && option!="") {

         //ajout de 2 propriétés quantité et option selectionnées dans la page html
        
         pageKanape.selectQuantite = +quantite
         pageKanape.selectOption = option
       console.log(selectQuantite);
       
        // il récupère si panier existant
        let saveBasket = JSON.parse(localStorage.getItem("produit"))
        
        if (saveBasket){
            
            //le tableau array = saveBasket
            let array = saveBasket

            // on cherche dans le tableau (panier) si meme id et option
            let existingProduct = array.find (p => p._id === pageKanape._id && p.selectOption === pageKanape.selectOption)

        
            // si existingProduct existe dans le panier on ajoute la quantité, et on l'enregistre dans le localstorage   
            if (existingProduct){
                existingProduct.selectQuantite = existingProduct.selectQuantite + (+quantite)
                localStorage.setItem("produit", JSON.stringify (saveBasket) )
            }else {
            //ajout d'un objet dans le localStorage avec la methode push
            saveBasket.push (pageKanape)
            
            localStorage.setItem("produit", JSON.stringify (saveBasket) )
            }
        }else {
            let array = []
            array.push (pageKanape)
            localStorage.setItem("produit", JSON.stringify (array) )
            console.log(array);
        }
    }
  
    if (!option) alert ( 'selectionner une option');
    if (quantite<=0 || quantite>=100) alert ('La quantité doit être entre 1 et 100')
}

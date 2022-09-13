


    let saveBasket = JSON.parse(localStorage.getItem ("produit"))
    
    
    let items = document.getElementById ("cart__items")

    for (const product of saveBasket){ 
    console.log(product._id);
        fetch ("http://localhost:3000/api/products/" +product._id)
        .then (response => response.json ())
        .then (productDb => {
        let prix = document.querySelector ("p")
        prix.textContent = productDb
            console.log(productDb);
                
        })
       
        let article = document.createElement ("article")
        article.classList.add ("cart__item")
        items.appendChild (article)
        
        let divImg = document.createElement ("div")
        divImg.classList.add ("cart__item__img")
        article.appendChild (divImg)
        
        let img = document.createElement ("img")
        img.setAttribute ("src", product.imageUrl)
        img.setAttribute ("alt", product.altTxt)
        divImg.appendChild (img)

        let content = document.createElement ("div")
        content.classList.add ("cart__item__content")
        article.appendChild (content)
        
        let description = document.createElement ("div")
        description.classList.add ("cart__item__content__description")
        content.appendChild (description)
        
        let titre = document.createElement ("h2")
        titre.textContent = product.name
        description.appendChild (titre)

        let paragraphe = document.createElement ("p")
        paragraphe.textContent = product.selectOption
        description.appendChild (paragraphe)
        
        let prix = document.createElement ("p")
        prix.textContent = product.price + " €"
        description.appendChild (prix)             
        prix.remove()    

        let setting = document.createElement ("div")
        setting.classList.add ("cart__item__content__settings")
        content.appendChild (setting)
        
        let quantity = document.createElement ("div")
        quantity.classList.add("cart__item__content__settings__quantity")
        setting.appendChild (quantity)
        
        let qte = document.createElement("p")
        qte.textContent = "Qté"
        quantity.appendChild (qte)

        let input = document.createElement ("input")
        input.classList.add ("itemQuantity")    
        input.setAttribute ("type","number")
        input.setAttribute ("name","itemQuantity")
        input.setAttribute ("min",1)
        input.setAttribute ("max",100)
        input.setAttribute ("value",product.selectQuantite)
        quantity.appendChild (input)

        let divDelete = document.createElement ("div")
        divDelete.textContent = product.delete
        divDelete.classList.add ("cart__item__content__settings__delete")
        setting.appendChild (divDelete)

        let deleteButton = document.createElement ("p")
        deleteButton.textContent = "supprimer"
        deleteButton.classList.add ('deleteItem')
        divDelete.appendChild (deleteButton) 
    }

    






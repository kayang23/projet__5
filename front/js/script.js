fetch ("http://localhost:3000/api/products")
.then (response => response.json())
.then (function (canapes){
    
    for ( let product of canapes){
        console.log (product)
        let items = document.getElementById ("items")
        console.log (items)
        
        let el_a = document.createElement ("a")
        el_a.setAttribute("href", "./product.html?id="+ product._id)
        items.appendChild (el_a)

        let article = document.createElement ("article")
        el_a.appendChild (article)

        let img = document.createElement ('img')
        img.setAttribute ("src", product.imageUrl)
        img.setAttribute ("alt", product.altTxt)
        article.appendChild (img)

        let title = document.createElement ("h3")
        title.classList.add ("productName")
        title.textContent = product.name
        article.appendChild (title)

        let paraph = document.createElement("p")
        paraph.classList.add ("productDescription")
        paraph.textContent = product.description
        article.appendChild (paraph)
    }
})





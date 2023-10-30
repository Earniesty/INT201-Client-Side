function ProductManagement() {
    //add products variable here
    let products = []

    function getAllProducts() {
        return products
    }

    function addProduct(product) { // id must unique
        if (products.find(({id}) => id === product.id)) return console.log('Id Product already exists')
        if (product != null) products.push(product)
    }

    function searchByName(name) {
        return products.filter(({ name: productName }) => productName.toLowerCase() === name.toLowerCase())
    }

    function searchByPriceRange(minPrice, maxPrice) {
        return products.filter(({ price }) => price >= minPrice && price <= maxPrice)
    }

    function removeAll() {
        products = []
        // products.length = 0
        // products.splice(0, products.length)
    }

    return {
        removeAll,
        searchByName,
        searchByPriceRange,
        getAllProducts,
        addProduct
    }
}

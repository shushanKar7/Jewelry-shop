let neckalesURLs = require.context("./Images/necklaceSection", false, /.*\.jpg || .JPG$/),
    [products, necklaces, bracelets, earrnings, rings ] = [ [], [], [], [], [] ],
    braceletsURLs = require.context ( "./Images/braceletSection", false, /.*\.jpg || .JPG$/ ),
    earringsURLs = require.context ( "./Images/earringSection", false, /.*\.jpg || .JPG$/ ),
    ringsURLs = require.context ( "./Images/ringSection", false, /.*\.jpg || .JPG$/ );
    // productDescreption = [ [], [], [], [] ];
neckalesURLs.keys().forEach(function(key){
    necklaces[necklaces.length] = neckalesURLs(key);
});
braceletsURLs.keys().forEach(function(key){
    bracelets[bracelets.length] = braceletsURLs(key);
});
ringsURLs.keys().forEach(function(key){
    rings[rings.length] = ringsURLs(key);
});
earringsURLs.keys().forEach(function(key){
    earrnings[earrnings.length] = earringsURLs(key);
});
let id = 0;
class ProductMaker {
    constructor (name,price,category,image){
        this.name = name;
        this.price = price;
        this.category = category;
        this.isFavorite = false;
        this.onCart = false;
        this.image = image;
        this.quantity = 0;
        this.id = id++;
    }
}
for ( let i = 0; i < necklaces.length; i++ ) {
    products[products.length] = new ProductMaker('Bloodstone',87,"Necklace", necklaces[i]);
}
for ( let i = 0; i < necklaces.length; i++ ) {
    products[products.length] = new ProductMaker('Obsidian',50,"Ring", rings[i]);
}
for ( let i = 0; i < necklaces.length; i++ ) {
    products[products.length] = new ProductMaker('Amber',79,"Earring", earrnings[i]);
}
    for ( let i = 0; i < necklaces.length; i++ ) {
        products[products.length] = new ProductMaker('Andalusite',50,"Bracelet", bracelets[i]);
    }
export default products;
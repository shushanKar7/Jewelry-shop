let neckalesURLs = require.context("./Images/necklaceSection", false, /.*\.jpg || .JPG$/),
    [products, necklaces, bracelets, earrnings, rings ] = [ [], [], [], [], [] ],
    braceletsURLs = require.context ( "./Images/braceletSection", false, /.*\.jpg || .JPG$/ ),
    earringsURLs = require.context ( "./Images/earringSection", false, /.*\.jpg || .JPG$/ ),
    ringsURLs = require.context ( "./Images/ringSection", false, /.*\.jpg || .JPG$/ );
    // productDescreption = {
        
    // };
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
    constructor (name,price,category,image,description){
        this.name = name;
        this.price = price;
        this.category = category;
        this.isFavorite = false;
        this.onCart = false;
        this.image = image;
        this.quantity = 0;
        this.id = id++;
        this.description = description;
    }
}
for ( let i = 0; i < necklaces.length; i++ ) {
    products[products.length] = new ProductMaker('Obsidian',50,"Ring", rings[i],"Moonstone is the most well-known gemstone variety of orthoclase feldspar, a potassium aluminum silicate. It is a transparent to opaque oligoclase, a variety of plagioclase albite and sheet mica. Moonstone is known to exhibit a distinct sheen under certain lighting conditions, and it is the sheen which renders moonstone one of the most remarkable gemstones available today. In fact, its name is owed to the almost magical, bluish white shimmer it exhibits, which closely resembles that of the moon. Gemologists refer to the shimmering optical phenomena as 'adularescence'.");
    products[products.length] = new ProductMaker('Amber',79,"Earring", earrnings[i],"sadsadsadsadsadsadad");
    products[products.length] = new ProductMaker('Bloodstone',87,"Necklace", necklaces[i],"sadsadsadsadsadsadad");
    products[products.length] = new ProductMaker('Andalusite',50,"Bracelet", bracelets[i],"sadsadsadsadsadsadad");
    products[products.length] = new ProductMaker('Moonstone',50,"ring", bracelets[i],"Moonstone is the most well-known gemstone variety of orthoclase feldspar, a potassium aluminum silicate. It is a transparent to opaque oligoclase, a variety of plagioclase albite and sheet mica. Moonstone is known to exhibit a distinct sheen under certain lighting conditions, and it is the sheen which renders moonstone one of the most remarkable gemstones available today. In fact, its name is owed to the almost magical, bluish white shimmer it exhibits, which closely resembles that of the moon. Gemologists refer to the shimmering optical phenomena as 'adularescence'.");
}
export default products;
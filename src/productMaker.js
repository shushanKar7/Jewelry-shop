import Necklace from './Components/ProductsObj/NecklaceProductObj';
import Ring from './Components/ProductsObj/RingProductObj';
import Bracelet from './Components/ProductsObj/BraceletProductObj';
import Earring from './Components/ProductsObj/EarringProductObj'

let neckalesURLs = require.context("./Images/necklaceSection", false, /.*\.jpg || .JPG$/),
    [products, necklaces, bracelets, earrnings, rings ] = [ [], [], [], [], [] ],
    braceletsURLs = require.context ( "./Images/braceletSection", false, /.*\.jpg || .JPG$/ ),
    earringsURLs = require.context ( "./Images/earringSection", false, /.*\.jpg || .JPG$/ ),
    ringsURLs = require.context ( "./Images/ringSection", false, /.*\.jpg || .JPG$/ );
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
    constructor (name,price,category,image,description,zodiac){
        this.name = name;
        this.price = price;
        this.category = category;
        this.isFavorite = false;
        this.onCart = false;
        this.image = image;
        this.quantity = 0;
        this.id = id++;
        this.description = description;
        this.zodiac = zodiac
    }
}
for ( let i = 0; i < necklaces.length; i++ ) {
    products[products.length] = new ProductMaker(Ring.names[i],Ring.prices[i],"Ring", rings[i],Ring.descriptions[i],Ring.zodiac[i]);
    products[products.length] = new ProductMaker(Earring.names[i],Earring.prices[i],"Earring", earrnings[i],Earring.descriptions[i],Earring.zodiac[i]);
    products[products.length] = new ProductMaker(Necklace.names[i],Necklace.prices[i],"Necklace", necklaces[i],Necklace.descriptions[i],Necklace.zodiac[i]);
    products[products.length] = new ProductMaker(Bracelet.names[i],Bracelet.prices[i],"Bracelet", bracelets[i],Bracelet.descriptions[i],Bracelet.zodiac[i]);
}
export default products;
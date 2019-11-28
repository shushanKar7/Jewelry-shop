import ring1 from './Images/ringSection/ring1.jpg'
import ring2 from './Images/ringSection/ring2.jpg'
import ring3 from './Images/ringSection/ring3.png'
import ring4 from './Images/ringSection/ring4.jpg'
import ring5 from './Images/ringSection/ring5.jpg'
import ring6 from './Images/ringSection/ring6.jpg'
import necklace1 from './Images/necklaceSection/necklace1.jpg'
import necklace2 from './Images/necklaceSection/necklace2.jpg'
import necklace3 from './Images/necklaceSection/necklace3.jpg'
import necklace4 from './Images/necklaceSection/necklace4.jpg'
import necklace5 from './Images/necklaceSection/necklace5.jpg'
import necklace6 from './Images/necklaceSection/necklace6.jpg'



class ProductMaker {
    constructor (name,price,category,image){
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = 0;
        this.isFavorite = false;
        this.onCart = false;
        this.image = image;
        this.id = Math.random()*Math.random()
    }
}
let products = [
    new ProductMaker('Obsidian',50,"Ring",ring1),
    new ProductMaker('Obsidian',50,"Ring",ring2),
    new ProductMaker('Obsidian',50,"Ring",ring3),
    new ProductMaker('Obsidian',50,"Ring",ring4),
    new ProductMaker('Obsidian',50,"Ring",ring5),
    new ProductMaker('Amber',79,"Earring"),
    new ProductMaker('Moon Stone',43,"Ring",ring6),
    new ProductMaker('Andalusite',50,"Bracelet",),
    new ProductMaker('Bloodstone',87,"Necklace",necklace1),
    new ProductMaker('Afghanite',100,"Earring",),
    new ProductMaker('Agate',23,"Necklace",necklace2),
    new ProductMaker('Asurite',60,"Necklace",necklace3),
    new ProductMaker('Asurite',60,"Necklace",necklace4),
    new ProductMaker('Emerald',79,"Necklace",necklace5),
    new ProductMaker('Bloodstone',87,"Necklace",necklace6),
] 
export default products;
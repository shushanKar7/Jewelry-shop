// Images for Ring section
import ring1 from './Images/ringSection/ring1.jpg'
import ring2 from './Images/ringSection/ring2.jpg'
import ring3 from './Images/ringSection/ring3.png'
import ring4 from './Images/ringSection/ring4.jpg'
import ring5 from './Images/ringSection/ring5.jpg'
import ring6 from './Images/ringSection/ring6.jpg'
import ring7 from './Images/ringSection/ring7.png'
import ring8 from './Images/ringSection/ring8.jpg'
import ring9 from './Images/ringSection/ring9.jpg'
import ring10 from './Images/ringSection/ring10.JPG'
import ring11 from './Images/ringSection/ring11.JPG'
import ring12 from './Images/ringSection/ring12.JPG'
import ring13 from './Images/ringSection/ring13.jpg'
import ring14 from './Images/ringSection/ring14.JPG'
import ring15 from './Images/ringSection/ring15.JPG'
import ring16 from './Images/ringSection/ring16.png'
import ring17 from './Images/ringSection/ring17.png'
import ring18 from './Images/ringSection/ring18.png'
// Images for Barcelet section
import bracelet1 from './Images/braceletSection/bracelet1.jpg'
import bracelet2 from './Images/braceletSection/bracelet2.JPG'
import bracelet3 from './Images/braceletSection/bracelet3.JPG'
import bracelet4 from './Images/braceletSection/bracelet4.jpg'
import bracelet5 from './Images/braceletSection/bracelet5.jpg'
import bracelet6 from './Images/braceletSection/bracelet6.jpg'
import bracelet7 from './Images/braceletSection/bracelet7.jpg'
import bracelet8 from './Images/braceletSection/bracelet8.jpg'
import bracelet9 from './Images/braceletSection/bracelet9.jpg'
import bracelet10 from './Images/braceletSection/bracelet10.JPG'
import bracelet11 from './Images/braceletSection/bracelet11.JPG'
import bracelet12 from './Images/braceletSection/bracelet12.JPG'
import bracelet13 from './Images/braceletSection/bracelet13.jpg'
import bracelet14 from './Images/braceletSection/bracelet14.jpg'
import bracelet15 from './Images/braceletSection/bracelet15.jpg'
import bracelet16 from './Images/braceletSection/bracelet16.JPG'
import bracelet17 from './Images/braceletSection/bracelet17.JPG'
import bracelet18 from './Images/braceletSection/bracelet18.jpg'
// Images for Earring section
import earring1 from './Images/earringSection/earring1.jpg'
import earring2 from './Images/earringSection/earring2.jpg'
import earring3 from './Images/earringSection/earring3.jpg'
import earring4 from './Images/earringSection/earring4.jpg'
import earring5 from './Images/earringSection/earring5.JPG'
import earring6 from './Images/earringSection/earring6.JPG'
import earring7 from './Images/earringSection/earring7.JPG'
import earring8 from './Images/earringSection/earring8.JPG'
import earring9 from './Images/earringSection/earring9.JPG'
import earring10 from './Images/earringSection/earring10.JPG'
import earring11 from './Images/earringSection/earring11.JPG'
import earring12 from './Images/earringSection/earring12.JPG'
import earring13 from './Images/earringSection/earring13.JPG'
import earring14 from './Images/earringSection/earring14.JPG'
import earring15 from './Images/earringSection/earring15.JPG'
import earring16 from './Images/earringSection/earring16.JPG'
import earring17 from './Images/earringSection/earring17.jpg'
import earring18 from './Images/earringSection/earring18.jpg'
// Images for Necklace section
import necklace1 from './Images/necklaceSection/necklace1.jpg'
import necklace2 from './Images/necklaceSection/necklace2.JPG'
import necklace3 from './Images/necklaceSection/necklace3.jpg'
import necklace4 from './Images/necklaceSection/necklace4.jpg'
import necklace5 from './Images/necklaceSection/necklace5.jpg'
import necklace6 from './Images/necklaceSection/necklace6.jpg'
import necklace7 from './Images/necklaceSection/necklace7.jpg'
import necklace8 from './Images/necklaceSection/necklace8.jpg'
import necklace9 from './Images/necklaceSection/necklace9.jpg'
import necklace10 from './Images/necklaceSection/necklace10.jpg'
import necklace11 from './Images/necklaceSection/necklace11.jpg'
import necklace12 from './Images/necklaceSection/necklace12.jpg'
import necklace13 from './Images/necklaceSection/necklace13.jpg'
import necklace14 from './Images/necklaceSection/necklace14.jpg'
import necklace15 from './Images/necklaceSection/necklace15.jpg'
import necklace16 from './Images/necklaceSection/necklace16.jpg'
import necklace17 from './Images/necklaceSection/necklace17.jpg'
import necklace18 from './Images/necklaceSection/necklace18.jpg'

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
    // Ring Products
    new ProductMaker('Obsidian',50,"Ring",ring1),
    new ProductMaker('Obsidian',50,"Ring",ring2),
    new ProductMaker('Obsidian',50,"Ring",ring3),
    new ProductMaker('Obsidian',50,"Ring",ring4),
    new ProductMaker('Obsidian',50,"Ring",ring5),
    new ProductMaker('Obsidian',50,"Ring",ring6),
    new ProductMaker('Obsidian',50,"Ring",ring7),
    new ProductMaker('Obsidian',50,"Ring",ring8),
    new ProductMaker('Obsidian',50,"Ring",ring9),
    new ProductMaker('Obsidian',50,"Ring",ring10),
    new ProductMaker('Obsidian',50,"Ring",ring11),
    new ProductMaker('Obsidian',50,"Ring",ring12),
    new ProductMaker('Obsidian',50,"Ring",ring13),
    new ProductMaker('Obsidian',50,"Ring",ring14),
    new ProductMaker('Obsidian',50,"Ring",ring15),
    new ProductMaker('Moon Stone',43,"Ring",ring16),
    new ProductMaker('Moon Stone',43,"Ring",ring17),
    new ProductMaker('Moon Stone',43,"Ring",ring18),
    // Earring Products
    new ProductMaker('Amber',79,"Earring",earring1),
    new ProductMaker('Amber',79,"Earring",earring2),
    new ProductMaker('Amber',79,"Earring",earring3),
    new ProductMaker('Amber',79,"Earring",earring4),
    new ProductMaker('Amber',79,"Earring",earring5),
    new ProductMaker('Amber',79,"Earring",earring6),
    new ProductMaker('Amber',79,"Earring",earring7),
    new ProductMaker('Amber',79,"Earring",earring8),
    new ProductMaker('Amber',79,"Earring",earring9),
    new ProductMaker('Amber',79,"Earring",earring10),
    new ProductMaker('Amber',79,"Earring",earring11),
    new ProductMaker('Amber',79,"Earring",earring12),
    new ProductMaker('Amber',79,"Earring",earring13),
    new ProductMaker('Amber',79,"Earring",earring14),
    new ProductMaker('Amber',79,"Earring",earring15),
    new ProductMaker('Amber',79,"Earring",earring16),
    new ProductMaker('Amber',79,"Earring",earring17),
    new ProductMaker('Amber',79,"Earring",earring18),
    // Bracelet Products
    new ProductMaker('Andalusite',50,"Bracelet",bracelet1),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet2),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet3),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet4),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet5),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet6),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet7),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet8),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet9),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet10),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet11),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet12),   
    new ProductMaker('Andalusite',50,"Bracelet",bracelet13),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet14),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet15),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet16),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet17),
    new ProductMaker('Andalusite',50,"Bracelet",bracelet18),
    // Necklace Products
    new ProductMaker('Bloodstone',87,"Necklace",necklace1),
    new ProductMaker('Agate',23,"Necklace",necklace2),
    new ProductMaker('Asurite',60,"Necklace",necklace3),
    new ProductMaker('Emerald',79,"Necklace",necklace4),
    new ProductMaker('Bloodstone',87,"Necklace",necklace5),
    new ProductMaker('Agate',23,"Necklace",necklace6),
    new ProductMaker('Asurite',60,"Necklace",necklace7),
    new ProductMaker('Emerald',79,"Necklace",necklace8),
    new ProductMaker('Bloodstone',87,"Necklace",necklace9),
    new ProductMaker('Agate',23,"Necklace",necklace10),
    new ProductMaker('Asurite',60,"Necklace",necklace11),
    new ProductMaker('Emerald',79,"Necklace",necklace12),
    new ProductMaker('Bloodstone',87,"Necklace",necklace13),
    new ProductMaker('Agate',23,"Necklace",necklace14),
    new ProductMaker('Asurite',60,"Necklace",necklace15),
    new ProductMaker('Emerald',79,"Necklace",necklace16),
    new ProductMaker('Asurite',60,"Necklace",necklace17),
    new ProductMaker('Emerald',79,"Necklace",necklace18),
] 
export default products;
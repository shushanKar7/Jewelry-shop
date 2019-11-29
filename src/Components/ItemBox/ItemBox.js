import React from 'react';
function ItemBox(props) {
    console.log(props.image)
    return (
        <div className="itemBox">
            <div className="itemImage" style={{ backgroundImage: `url(${props.image})` }}>
                <div className = 'overlayText'><span></span></div>
                <div className = 'overlay'></div>
            </div>
            <div className="itemDetail">
                <div className = 'itemBoxSpan'>
                    <span>{props.name}</span><br />
                    <span>{props.price}</span>
                </div>
                <div className = 'itemBoxButton'>
                    <button>ADD TO CART</button>
                    <button>BUY</button>
                </div>
            </div>
        </div>
    );
}
export default ItemBox;
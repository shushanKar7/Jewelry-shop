import React from 'react';
function ItemBox(props) {
    return (

        <div className="itemBox">
            <div className="itemImage" style={{ backgroundImage: `url(${props.image})` }}></div>
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
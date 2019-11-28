import React from 'react';
function ItemBox ( props ) {
    console.log(props.image)
    return (
      <div className = "itemBox">
          <div className="itemImage" style = { {backgroundImage: `url(${props.image})`}  }></div>
          <div className="itemDetail">
              <i>{props.name}</i><br />
              <b>{props.price}</b>
              <a><i className="fa fa-cart-plus"></i></a>
              <a><i className="fa fa-heart"></i></a>
          </div>
      </div>
    );
}
export default ItemBox;
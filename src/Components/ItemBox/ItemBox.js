import React from 'react';
function ItemBox(props) {
    console.log(props.image)
    return (
        <div className="itemBox">
            <div className="itemImage" style={{ backgroundImage: `url(${props.image})` }}>
                <div className='overlayText .fadeIn-left'>
                    <p style={{ padding: '20px' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className='overlay'></div>
            </div>
            <div className="itemDetail">
                <div className='itemBoxSpan'>
                    <span>{props.name}</span><br />
                    <span>{props.price}</span>
                </div>
                <div className='itemBoxButton'>
                    <button>ADD TO CART</button>
                    <button>BUY</button>
                </div>
            </div>
        </div>
    );
}
export default ItemBox;
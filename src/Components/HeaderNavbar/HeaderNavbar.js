import React from 'react';
const HeaderNavbar = () => {
    return (
        <div className = 'headerNavbar'>
            <div className = "accountCartBlcok">
                <i className="fa fa-user"><span>My Account</span></i>
                <i className="fa fa-heart"><span>Saved Items</span></i>
                <i className="fa fa-shopping-cart"><span>Cart</span></i>
            </div>
            <div className = 'logo'></div>
            
            <div className = 'navBar'>
                <nav>
                    <ul>
                        <a><li className = 'effect-box'>HOME</li></a>
                        <a><li className = 'effect-box'>NECKLACES</li></a>
                        <a><li className = 'effect-box'>RINGS</li></a>
                        <a><li className = 'effect-box'>EARRINGS</li></a>
                        <a><li className = 'effect-box'>BRACELETS</li></a>
                    </ul>
                </nav>
            </div>
            <div className = 'hr' ></div>
        </div> );
}
export default HeaderNavbar;

// Add functionality



// import React from 'react';
// // import './HeaderNavbar.css';
// import nicklacesBg from '../../Images/compHeaderImg/necBg.jpg';
// import bracBg from '../../Images/compHeaderImg/bracBg.jpg';
// import ringsBg from '../../Images/compHeaderImg/earBg.jpg';
// import earsBg from '../../Images/compHeaderImg/ringBg.png';
// const HeaderNavbar = ({necklacesStyle,braceletStyle,ringBg,earBg}) => {

//     const necstyle = {
//         root:{
//             backgroundImage: necklacesStyle ? `url(${nicklacesBg})`  :  (  braceletStyle ?  `url(${bracBg})` : ( ringsBg ? `url(${ringsBg})` :  (earsBg ? `url(${earsBg})` : "none"))),
//             backgroundRepeat: 'noRepeat',
//             backgroundSize:'cover',
//             backgroundPosition: "center"
//         }
//     }
//     let className  = 'headerNavbar';
//     return (
//      <div style = {necstyle.root} className = {className}>
//          <div className = "accountCartBlcok"> 
//              <i className="fa fa-user"><span>My Account</span></i> 
//              <i className="fa fa-heart"><span>Saved Items</span></i>
//              <i className="fa fa-shopping-cart"><span>Cart</span></i>
//          </div>
//             <div className = 'logo'> </div>
//         <div className = 'navBar'>
//             <nav>
//                 <ul> 
//                     <a><li>HOME</li></a>
//                     <a><li>NECKLACES</li></a>
//                     <a><li>RINGS</li></a>
//                     <a><li>EARRINGS</li></a>
//                     <a><li>BRACELETS</li></a>
//                 </ul>  
//             </nav>
//         </div>
//         <div className = 'hr' ></div>
//     </div> );
// }
// export default HeaderNavbar;
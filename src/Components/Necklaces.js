import React, { Component, Fragment } from 'react';
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';
import NeacklaceSectionBg from "../Images/compHeaderImg/necklaceSection.jpg";
import { connect } from 'react-redux';
import ItemBox from './ItemBox/ItemBox';


const Necklaces = ({necklaces}) => {
        return(
            <Fragment>
                <HeaderNavbar background = {NeacklaceSectionBg} />
                <div className='itemBoxWrapper'>
            {necklaces.map(necklace => <ItemBox {...necklace} />)}
            </div>
            </Fragment>
        )
}

let vercnenqProductsStatic = merReduceriStateVoreStanumaConnectic =>{


    return{
        necklaces:merReduceriStateVoreStanumaConnectic.products.filter(product=>product.category=='Necklace')
    }
}

export default connect(vercnenqProductsStatic,)(Necklaces);
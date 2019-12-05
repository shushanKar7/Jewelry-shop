import React from 'react'
import JewelryServiceConsumer from '../jewelry-service-context/jewelry-service-context'

const withJewelrystoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <JewelryServiceConsumer>
                {
                    (jewelrystoreService) => {
                   return     (<Wrapped {...props} 
                        jewelrystoreService = {jewelrystoreService}/>)
                    }
                }
            </JewelryServiceConsumer>
        )
    }

}

export default withJewelrystoreService
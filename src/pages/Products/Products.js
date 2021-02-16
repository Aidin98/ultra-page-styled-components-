import React from 'react'
import { InfoSection } from '../../components/Index'
import Pricing from '../../components/Pricing/Pricing'

import {homeObjFour, homeObjThree} from './Data'
function Products() {
    return (
        <>
         
         
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Products

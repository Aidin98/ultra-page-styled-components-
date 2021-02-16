import React from 'react'
import { InfoSection } from '../../components/Index'
import Pricing from '../../components/Pricing/Pricing'

import {homeObjFour} from './Data'
function Services() {
    return (
        <>
            
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Services
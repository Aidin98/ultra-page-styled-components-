import React from 'react'
import { InfoSection } from '../../components/Index'
import Pricing from '../../components/Pricing/Pricing'

import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data'
function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home

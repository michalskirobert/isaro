import React from 'react'

import {useHeaderService} from "./service"

const Header = (): JSX.Element => {
    const {NAV_HELPER} = useHeaderService();

    console.log({NAV_HELPER})
    return (
        <div>
            
        </div>
    )
}

export default Header

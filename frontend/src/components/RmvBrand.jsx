import React, { useState } from "react";
import FormBrand from './FormBrand'
import './Brand.css'

const RmvBrand = ({  hideBrand }) => {

    const isRmv = true

    return(
        <div className="brand">
            <FormBrand hideBrand={hideBrand} isRmv={isRmv} />
        </div>
    )
}
export default RmvBrand
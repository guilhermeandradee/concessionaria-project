import React, { useState } from "react";
import FormBrand from './FormBrand'
import './Brand.css'

const AddBrand = ({  hideBrand }) => {

    const isAdd = true

    return(
        <div className="brand">
            <FormBrand hideBrand={hideBrand} isAdd={isAdd} />
        </div>
    )
}
export default AddBrand
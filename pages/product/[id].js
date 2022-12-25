import React from "react";
import { useRouter } from "next/router";

const ProductItem = ()=>{
    const router = useRouter();

    console.log(router)

    return(
        <div>
            <h1>Este es la pagina de producto: {router.query.id} </h1>
        </div>
    )
}

export default ProductItem
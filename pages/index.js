import React, { useState, useEffect } from 'react'

const Home = ()=>{

    useEffect(() => {
        window
          .fetch('/api/avo')
          .then((response) =>console.log(response))

      }, [])


    return(
        <div>
            <h1>Hello from React</h1>
        </div>
    )
}

export default Home
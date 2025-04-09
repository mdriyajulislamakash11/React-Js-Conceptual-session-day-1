import React from 'react'

function Country({transfer}) {
    // console.log(transfer)
  return (
    <div>
        <h2>im from country: </h2>

        <button onClick={() => transfer("ami country theke")}>service</button>
    </div>
  )
}

export default Country
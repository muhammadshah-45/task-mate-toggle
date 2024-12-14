// import React from 'react'

const BoxCard = ({result,childern}) => {
  return (
    <>
     <div className={`box ${result}`}>
       {childern}
     </div>
    </>
  )
}

export  {BoxCard}

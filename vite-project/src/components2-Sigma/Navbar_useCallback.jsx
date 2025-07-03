import React from 'react'

import { memo } from 'react'

// what is Memo :- IF new Props are there they re-render if not dont re-render . 

const Navbar_useCallback = ({adjective , getAdjective}) => {
    console.log("Navbar is rendered")
    return (
    <>
        <div> I am a {adjective} Navbar .</div>
        <button onClick={() => getAdjective()}>  Change me ! </button>
    </>
  )
}

export default memo(Navbar_useCallback);
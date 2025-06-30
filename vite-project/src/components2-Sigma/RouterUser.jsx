import React from 'react'

import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <>
      {/* http://localhost:5173/user/Madhav */}
      <div> I am User {params.username} </div>
    </>
  );
}

export default User
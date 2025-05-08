import React from 'react'

const Posts = ({children , userName,content}) => {
  return (
    <div style={{padding:"10px",
      border:"solid 5px red ",
      width:"50%",
      marginLeft:"30%",
      marginBottom:"5px",
      textAlign:"center"}
      }>
      {children}
      <h2>{userName}</h2>
      <hr/>
      <p>{content}</p>
    </div>
  )
}

export default Posts

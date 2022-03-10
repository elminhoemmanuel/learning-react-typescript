import React from 'react'

type StatusProps = {
    status:"loading" | "success" | "error"
}

const Status = ({ status }:StatusProps) => {

    let message
    if(status === "loading"){
        message = "Loading..."
    }else if(status === "success"){
        message ="Data Fetched successfully"
    }else if(status === "error"){
        message = "Error fetching data"
    }
  return (
    <div>Status - {message}</div>
  )
}

export default Status
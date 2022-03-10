import React, { useRef, useEffect } from 'react'

const DomRef = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus() //can remove the optional chaining here by adding null assertion to the useRef(null) above
        //to become useRef(null!)
    }, [])
    

  return (
    <div>
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef
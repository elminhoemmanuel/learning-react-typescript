import React from 'react'

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive:boolean,
    isNegative?:never,
    isZero?:never
}

type NegativeNumber = RandomNumberType & {
    isPositive?:never,
    isNegative:boolean,
    isZero?:never
}

type Zero = RandomNumberType & {
    isPositive?:never,
    isNegative?:never,
    isZero:boolean
}

type RandomNumberProps = NegativeNumber | PositiveNumber | Zero

const RandomNumber = ({ value, isPositive, isNegative, isZero }: RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && "Positive"} {isNegative && "Negative"} {" "}
        {isZero && "Zero"}
    </div>
  )
}

export default RandomNumber
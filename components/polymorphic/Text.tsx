import React from 'react'

interface ITextOwnProps<E extends React.ElementType> {
    size: "sm" | "md" | "lg",
    color?: 'primary' | 'secondary',
    children: React.ReactNode,
    as?:E
}

type TextProps<E extends React.ElementType> = ITextOwnProps<E> & 
Omit<React.ComponentProps<E>, keyof ITextOwnProps<E>>

const Text = <E extends React.ElementType = "div">({ size, color, children, as }: TextProps<E>) => {

    const Component = as || 'div'

    return (
        <Component className={`class-with-${color}-${size}`} >{children}</Component>
    )
}

export default Text
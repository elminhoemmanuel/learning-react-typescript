import React from 'react';

type HeadingProps = {
    children:string
}

const Heading = (props:HeadingProps) => {
    const { children } = props
  return <div>
      {children}
  </div>;
};

export default Heading;

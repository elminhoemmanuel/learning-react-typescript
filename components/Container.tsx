import React from 'react';

type ContainerProps = {
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {
    const { styles } = props;
  return (
    <div style={styles}>
        Text Content goes here
    </div>
  );
};

export default Container;

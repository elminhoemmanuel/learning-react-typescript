import React from 'react';

type GreetProps ={
    name:string
}

const Greet = (props:GreetProps) => {
    const { name } = props;
  return <div>
      <h2>Welcome {name} you have 10 messages</h2>
  </div>;
};

export default Greet;

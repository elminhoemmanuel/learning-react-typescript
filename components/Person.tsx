import React from 'react';
import { PersonProps } from './Person.types';

const Person = (props:PersonProps) => {
    const { firstName, lastName } = props.name
    const { folks } = props
  return <div>
      {firstName} {lastName}

      {
          folks.map((item, i)=>(
              <p key={i} >{item.first}</p>
          ))
      }
  </div>;
};

export default Person;

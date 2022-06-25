import React from 'react';

interface Iprops {
  name: string;
}

const helloYou = ({ name }: Iprops) => (
  <p>{name}</p>
);

export default helloYou;

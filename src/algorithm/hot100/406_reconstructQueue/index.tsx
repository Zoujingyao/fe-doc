import React from 'react';

export default () => {
  function reconstructQueue(people: number[][]): number[][] {
    people.sort((people1, people2) => {
      if (people1[0] === people2[0]) {
        return people1[1] - people2[1];
      }
      return people2[0] - people1[0];
    });

    const res: number[][] = [];
    for (let i = 0; i < people.length; i++) {
      res.splice(people[i][1], 0, people[i]);
    }
    // console.log('people: ', res);
    return res;
  }

  const people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ];

  return (
    <div>
      <h1>406_reconstructQueue</h1>
      <p>{`people=${people}, res=${reconstructQueue(people)}`}</p>
    </div>
  );
};

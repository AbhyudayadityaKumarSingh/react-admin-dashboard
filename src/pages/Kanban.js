import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'To Do',
      cards: [
        { id: 'Card1', title: 'Task 1', description: 'Task 1 description' },
        { id: 'Card2', title: 'Task 2', description: 'Task 2 description' },
      ],
    },
    {
      id: 'lane2',
      title: 'In Progress',
      cards: [
        { id: 'Card3', title: 'Task 3', description: 'Task 3 description' },
      ],
    },
    {
      id: 'lane3',
      title: 'Done',
      cards: [
        { id: 'Card4', title: 'Task 4', description: 'Task 4 description' },
      ],
    },
  ],
};

function Kanban() {
  return <Board data={data} />;
}

export default Kanban;

import React from 'react';
import ReactDOM from 'react-dom';

import { WithPinnedTasks } from './TaskList.stories';

it('renders pinned tasksk at the start of the list', () => {
  const div = document.createElement('div');
  //our story will be used for the test
  //with the arguments that were created
  ReactDOM.render(<WithPinnedTasks { ...WithPinnedTasks.args } />, div);

  //expectation is that task titled "Task 6 (pinned)" is rendered first

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"] ');
  expect(lastTaskInput).not.toBe(null);

  ReactDOM.unmountComponentAtNode(div);
})
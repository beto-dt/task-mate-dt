import React from 'react';
import Link from 'next/link';
import { TaskStatus } from '../generated/graphql-frontend';

interface Props {
  status?: TaskStatus;
}

const TaskFilter: React.FC<Props> = ({ status }) => {
  return (
    <ul className="task-filter">
      <li>
        <Link href="/" scroll={false} shallow={true}>
          <p className={!status ? 'task-filter-active' : ''} >
            All
          </p>
        </Link>
      </li>
      <li>
        <Link
          href="/[status]"
          as={`/${TaskStatus.Active}`}
          scroll={false}
          shallow={true}
        >
          <p
            className={status === TaskStatus.Active ? 'task-filter-active' : ''}
          >
            Active
          </p>
        </Link>
      </li>
      <li>
        <Link
          href="/[status]"
          as={`/${TaskStatus.Completed}`}
          scroll={false}
          shallow={true}
        >
          <p
            className={
              status === TaskStatus.Completed ? 'task-filter-active' : ''
            }
          >
            Completed
          </p>
        </Link>
      </li>
    </ul>
  );
};

export default TaskFilter;

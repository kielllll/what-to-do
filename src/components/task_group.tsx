import { Component, For, createSignal, createUniqueId } from 'solid-js'
import { SortableProvider, createSortable } from '@thisbeyond/solid-dnd'
import Task from './task'

import styles from './task_group.module.css'

const TaskGroup: Component<{
  id: string | number
  title: string
}> = (props) => {
  const [tasks, setTasks] = createSignal([
    {
      id: createUniqueId(),
      name: 'Do something',
    },
  ])
  const sortable = createSortable(props.id, { type: 'taskGroup' })
  const sortedTaskIds = () => tasks().map((task) => task.id)

  return (
    <div class={styles.container} ref={sortable.ref}>
      <h2 class={styles.title}>{props.title}</h2>
      <SortableProvider ids={sortedTaskIds()}>
        <For each={tasks()}>
          {(task) => (
            <Task id={task.id} taskGroupId={props.id} name={task.name} />
          )}
        </For>
      </SortableProvider>
      <button
        class={styles.addTaskButton}
        onClick={() =>
          setTasks([
            ...tasks(),
            { id: createUniqueId(), name: 'Do something else' },
          ])
        }
      >
        add task
      </button>
    </div>
  )
}

export default TaskGroup

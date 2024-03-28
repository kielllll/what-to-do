import { Component, For, createSignal } from 'solid-js'
import Task from './task'

import styles from './task_group.module.css'

const TaskGroup: Component<{
  title: string
}> = (props) => {
  const [tasks, setTasks] = createSignal([
    {
      id: '1',
      name: 'Do something',
    },
  ])

  return (
    <div class={styles.container}>
      <h2 class={styles.title}>{props.title}</h2>
      <For each={tasks()}>{(task) => <Task name={task.name} />}</For>
      <button
        class={styles.addTaskButton}
        onClick={() =>
          setTasks([...tasks(), { id: '2', name: 'Do something else' }])
        }
      >
        add task
      </button>
    </div>
  )
}

export default TaskGroup

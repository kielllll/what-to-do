import { createSignal, type Component, For } from 'solid-js'
import TaskGroup from './task_group'

import styles from './board.module.css'

const Board: Component = () => {
  const [taskGroups, setTaskGroups] = createSignal([
    {
      id: 1,
      title: 'To Do',
    },
    {
      id: 1,
      title: 'In Progress',
    },
  ])

  return (
    <div class={styles.container}>
      <For each={taskGroups()}>
        {(taskGroup) => <TaskGroup title={taskGroup.title} />}
      </For>
      <button class={styles.addTaskGroupButton}>add task group</button>
    </div>
  )
}

export default Board

import { Component } from 'solid-js'
import { createSortable } from '@thisbeyond/solid-dnd'

import styles from './task.module.css'

const Task: Component<{
  id: string | number
  taskGroupId: string | number
  name: string
}> = (props) => {
  const sortable = createSortable(props.id, {
    type: 'task',
    group: props.taskGroupId,
  })

  return (
    <div use:sortable class={styles.container}>
      <p class={styles.name}>{props.name}</p>
    </div>
  )
}

export default Task

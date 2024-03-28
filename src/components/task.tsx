import { Component } from 'solid-js'

import styles from './task.module.css'

const Task: Component<{
  name: string
}> = (props) => {
  return (
    <div class={styles.container}>
      <p class={styles.name}>{props.name}</p>
    </div>
  )
}

export default Task

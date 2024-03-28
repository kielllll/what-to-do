import type { Component } from 'solid-js'
import Board from './components/Board'

import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Board />
    </div>
  )
}

export default App

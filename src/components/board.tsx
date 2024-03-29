import { createSignal, type Component, For, createUniqueId } from 'solid-js'
import TaskGroup from './task_group'

import styles from './board.module.css'
import {
  DragDropProvider,
  DragDropSensors,
  DragEventHandler,
  DragOverlay,
  SortableProvider,
} from '@thisbeyond/solid-dnd'

const Board: Component = () => {
  const [taskGroups, setTaskGroups] = createSignal([
    {
      id: createUniqueId(),
      title: 'To Do',
    },
    {
      id: createUniqueId(),
      title: 'In Progress',
    },
  ])

  return (
    <div class={styles.container}>
      <DragDropProvider>
        <DragDropSensors />
        <SortableProvider ids={taskGroups().map((taskGroup) => taskGroup.id)}>
          <For each={taskGroups()}>
            {(taskGroup) => (
              <TaskGroup id={taskGroup.id} title={taskGroup.title} />
            )}
          </For>
        </SortableProvider>
        <button
          class={styles.addTaskGroupButton}
          onClick={() =>
            setTaskGroups([
              ...taskGroups(),
              { id: createUniqueId(), title: 'New Task Group' },
            ])
          }
        >
          add task group
        </button>
      </DragDropProvider>
    </div>
  )
}

export default Board

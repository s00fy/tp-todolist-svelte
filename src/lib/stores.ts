import { derived, writable } from 'svelte/store';

export const tasks = writable([
  {
    id: 1,
    name: "Manger",
    done: true
  },
  {
    id: 2,
    name: "Boire",
    done: false
  },
  {
    id: 3,
    name: "Dormir",
    done: false
  }
]);

export const tasksLeftCount = derived(
  tasks,
  $tasks => $tasks.filter(task => !task.done).length
);

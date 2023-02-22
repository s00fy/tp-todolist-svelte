<script lang="ts">
  export interface Task {
    id: number;
    name: string;
    done: boolean;
  }

  let tasks: Tasks[]
  $: tasks = [
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
  ];

  $: tasksLeftCount = tasks.filter(task => !task.done).length;

  function validateAllTasks() {
    tasks = tasks.map(task => ({ ...task, done: true }));
  }
</script>

<ul>
  {#each tasks as task}
    <li>
      <input id={`task-${task.id}`} type="checkbox" bind:checked={task.done} />
      <label for={`task-${task.id}`}>{task.name}</label>
    </li>
  {/each}
</ul>

<button
  disabled={tasksLeftCount === 0}
  on:click={validateAllTasks}
>Compléter toutes les tâches</button>

<p>
  {#if tasksLeftCount}
    {tasksLeftCount} tâche(s) restante(s)
  {:else}
    Félicitation, vous avez terminé !
  {/if}
</p>

<style>
  ul {
    list-style: none;
  }

  input:checked ~ label {
    text-decoration: line-through;
  }
</style>

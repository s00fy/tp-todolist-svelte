<script lang="ts">
  import NewTask from "./NewTask.svelte";
	import { tasks, tasksLeftCount } from './stores.js';

  export interface Task {
    id: number;
    name: string;
    done: boolean;
  }

  function validateAllTasks() {
    tasks.set($tasks.map(task => ({ ...task, done: true })));
  }
</script>

<NewTask />

<ul>
  {#each $tasks as task}
    <li>
      <input id={`task-${task.id}`} type="checkbox" bind:checked={task.done} />
      <label for={`task-${task.id}`}>{task.name}</label>
    </li>
  {/each}
</ul>

<button
  disabled={$tasksLeftCount === 0}
  on:click={validateAllTasks}
>Compléter toutes les tâches</button>

<p>
  {#if $tasksLeftCount}
    {$tasksLeftCount} tâche(s) restante(s)
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

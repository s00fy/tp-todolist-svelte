<script lang="ts">
	import { tasks } from './stores.js';

  let newTaskName;

  function submitNewTask() {
    tasks.set([...$tasks, {
      id: Date.now(),
      name: newTaskName,
      done: false
    }]);

    newTaskName = "";
  }
</script>

<form on:submit|preventDefault={submitNewTask}>
  <label for="newTask">Nouvelle tâche</label>
  <input id="newTask" bind:value={newTaskName} required>
  <button disabled={!newTaskName}>Ajouter</button>
</form>

<style>
  label {
    display: block;
  }
</style>

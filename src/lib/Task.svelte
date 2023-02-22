<script lang="ts">
  import { Task } from "./TodoList.svelte";
  export let task: Task;
</script>

<input id={`task-${task.id}`} type="checkbox" bind:checked={task.done} />
<label for={`task-${task.id}`}>{task.name}</label>

<style>
  input:checked ~ label {
    text-decoration: line-through;
  }
</style>

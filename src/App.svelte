<script lang="ts">
  interface Task {
    id: number;
    name: string;
    done: boolean;
  }

  const tasks: Task[] = [
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
</script>

<main>
  <ul>
    {#each tasks as task}
      <li>
        <!-- <input type="checkbox" bind:checked={task.done} /> -->
        {task.name}
      </li>
    {/each}
  </ul>
</main>

<style>
</style>

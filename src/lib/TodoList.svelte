<script lang="ts">
  import Counter from "./Counter.svelte";
  import CheckAll from "./CheckAll.svelte";


    interface Task{
        id: number;
        name: string;
        status: boolean;
    }
    const tasks: Task[] = [
      {
        id: 1,
        name: 'Manger',
        status: false,
      },
      {
        id: 2,
        name: 'Boire',
        status: false,
      },
      {
        id: 3,
        name: 'Dormir',
        status: false,
      },

    ];
    $: tasksLeftCount = tasks.filter(task => task.status == false).length;
    console.log(tasksLeftCount);

    let selection=[];

    const checkAll = event => {
      tasks.forEach( task => {
        task.status = true;
      })
      console.log(tasks);
    }






</script>

<main>
    <ul>
      {#each tasks as task}
          <li>
              <input type="checkbox" name="check" value="{task.name}" id="{task.name}" bind:checked={task.status}>
            <label for="{task.name}" class="label">
                {task.name}
            </label>
          </li>
      {/each}
    </ul>
    {#if tasksLeftCount != 0}
      <button on:click={checkAll}>Compléter toute les tâches</button>
      <p> {tasksLeftCount} tâches restantes.</p>
    {:else}
      <button on:click={checkAll} disabled aria-disabled="true">Compléter toute les tâches</button>
      <p> Félicitation, vous avez terminé !</p>
    {/if}

</main>

<style>
</style>

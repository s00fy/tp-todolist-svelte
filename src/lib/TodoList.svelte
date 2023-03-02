<script lang="ts">
  import Counter from "./Counter.svelte";
  import CheckAll from "./CheckAll.svelte";


    interface Task{
        id: number;
        name: string;
        statut: boolean;
    }
    const tasks: Task[] = [
      {
        id: 1,
        name: 'Manger',
        statut: false,
      },
      {
        id: 2,
        name: 'Boire',
        statut: false,
      },
      {
        id: 3,
        name: 'Dormir',
        statut: false,
      },

    ];
    $: tasksLeftCount = tasks.filter(task => task.statut == false).length;
    console.log(tasksLeftCount);

    let selection=[];
    




</script>

<main>
    <ul>
      {#each tasks as task}
          <li>
              <input type="checkbox" name="check" value="{task.name}" id="{task.name}" bind:checked={task.statut} bind:group={selection}>
            <label for="{task.name}" class="label">
                {task.name}
            </label>
          </li>
      {/each}
    </ul>
    <p>tâches effectuées : {selection}</p>
    {#if tasksLeftCount != 0}
      <button on:click={CheckAll}>Compléter toute les tâches</button>
      <p> {tasksLeftCount} tâches restantes.</p>
    {:else}
      <button on:click={CheckAll} disabled aria-disabled="true">Compléter toute les tâches</button>
      <p> Félicitation, vous avez terminé !</p>
    {/if}

</main>

<style>
</style>

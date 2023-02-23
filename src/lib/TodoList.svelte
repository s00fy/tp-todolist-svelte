<script lang="ts">
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

</script>

<main>
    <ul>
      {#each tasks as task}
          <li>
              <input type="checkbox" name="check" value="{task.name}" id="{task.name}" bind:checked={task.statut}>
            <label for="{task.name}" class="label">
                {task.name}
            </label>
          </li>
      {/each}
    </ul>

</main>

<style>
</style>

<script>
    export let columns = [];
</script>

{#each Object.values(columns) as data}
    <th>
        {data} 
    </th>
{/each}
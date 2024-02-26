<script>
  let breweries = []

  const go = function() {
    fetch('https://api.openbrewerydb.org/breweries?page=2&sort=type,street').then(res => {
      return res.json()
    }).then(data => { 
      breweries = data 
    })
  }
</script>

<button on:click={go} data-testid='gobutton'>Load some breweries</button>

{#if breweries.length}
  <div data-testid='brewerywrapper'>
    {#each breweries as brewery}
      <p>{brewery.name}</p>
    {/each}
  </div>
{:else}
  <p>Click the button to load some breweries</p>
{/if}

<style>
  
</style>

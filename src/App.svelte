<script>
  import logo from './assets/logo.svg'
  import BreweryList from './lib/BreweryList.svelte'
</script>

<main>
  <img src={logo} alt="Provi" />
  <h1>Brewery Browser!</h1>

  <BreweryList />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 4rem;
    width: 8rem;
    float: left;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
    line-height: 1.1;
    margin-bottom: 2rem;
    margin-top: 1rem;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>

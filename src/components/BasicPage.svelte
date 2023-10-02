<script>
  import DataTable from "./DataTable.svelte";
  import routes from "../constants/routes.js";

  export let name = "Undefined";
  export let players = [];
</script>

<div class="container">
  <div class="center">
    <div class="navigation">
      {#each Object.entries(routes) as [key, value]}
        {#if name == key}
          <a href={value} class="nav-a nav-selected">
            <img class="nav-img" src={`/${key}.png`} alt={key}/>
            <h3 style="color: white">{key}</h3>
          </a>
        {:else}
          <a href={value} class="nav-a">
            <img class="nav-img" src={`/${key}.png`} alt={key}/>
            <h3 style="color: white">{key}</h3>
          </a>
        {/if}
      {/each}
    </div>
    <div class="header-container">
      <img class="main-img" src={`/${name}.png`} alt={name}/>
      <h1 style="color: white">{name}</h1>
    </div>
    <DataTable {name} {players}/>
    <div class="footer-container">
    </div>
  </div>
</div>

<style>
    .container {
        padding-top: 20px;
        background: #051420;
        min-height: 100vh;
    }

    .navigation {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #081F32;
        width: 50%;
        min-height: 30px;
        border-radius: 20px;
        margin-bottom: 20px;
    }

    .nav-img {
        width: 2em;
        aspect-ratio: 1/1;
        border-radius: 50%;
        margin: 5px;
        object-fit: contain;
    }

    .nav-a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 10px;
    }

    .nav-selected {
        border-bottom: 2px solid white;
    }

    .center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .header-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #081F32;
        width: 50%;
        border-radius: 20px 20px 0 0;
    }

    .footer-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #081F32;
        width: 50%;
        min-height: 30px;
        border-radius: 0 0 20px 20px;
    }

    .main-img {
        width: 5em;
        aspect-ratio: 1/1;
        border-radius: 50%;
        margin: 20px;
        object-fit: contain;
    }

</style>
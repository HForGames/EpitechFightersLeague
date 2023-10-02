<script>
  export let players = [{
    rank: 1,
    name: "Hugo",
    pseudo: "Hugo",
    elo: 1000,
    win: 0,
    loss: 0
  }];
  export let name;
</script>

<div style="width: 50%">
  <table>
    <thead style="border-radius: 100%">
    <tr>
      <th class="center">Rank</th>
      <th class="left">Name</th>
      <th class="center">Pseudo</th>
      <th class="right">Elo</th>
      <th class="center">Win</th>
      <th class="center">Loss</th>
    </tr>
    </thead>
    <tbody class="Body">
    {#each players as player}
      <tr>
        <td class="center">{player.rank}</td>
        <td class="left">{player.name}</td>
        <td class="center">{player.pseudo}</td>
        <td class="right">{player.elo}</td>
        <td class="center">{player.win}</td>
        <td class="center">{player.loss}</td>
      </tr>
    {/each}
    </tbody>
  </table>
</div>

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    td {
        color: #ffffff;
    }

    tr:nth-child(even) {
        background-color: #0A263F;
    }

    tr:nth-child(odd) {
        background-color: #081F32;
    }

    th {
        background-color: #0A263F;
    }

    .right {
        text-align: right;
    }

    .left {
        text-align: left;
    }

    .center {
        text-align: center;
    }

    th {
        color: #B3A991;
    }
    td, th {
        padding: 8px;
        font-size: 20px;
    }

</style>


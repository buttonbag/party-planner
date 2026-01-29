// === CONSTANTS ===
// call base api
// add location

// === STATE ===
let parties = [];
let selectedParty = [];

// get all parties from API

// update state with single party from the API

// === COMPONENTS ===
// party component
// parties component

// === RENDER ===

function render() {
  const $app = document.querySelector(`#app`);

  $app.innerHTML = `
    <header>
      <h1>Party Planner</h1>
    </header>

    <main>
      <section>
        <h2>Upcoming Parties</h2>
        <UpcomingParties></UpcomingParties>
      </section>
      <section>
        <h2>Party Details</h2>
        <PartyDetails></PartyDetails>
      </section>
    </main>

  `;
}

render()
// === CONSTANTS ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2601-ftb-et-web-ft";
const RESOURCE = "/events";
const API = BASE + COHORT + RESOURCE;

// === STATE ===
const state = {
  parties: [],
  selectedParty: '',
}

// get all parties from API
const getParties = async () => {
  // add try and catch statement
  try {
    // call base api
    const response = await fetch(API);
    const responseData = await response.json();
    const allEventsData = responseData.data;
    
    state.parties = allEventsData;
    
    // console.log(state.parties);
    render();
  } catch (err) {
    console.error(`ERROR FETCHING DATA:`, err);
  } 
}

// getParties()

const getParty = async (id) => {
  try {
    // call base api
    const response = await fetch(API + "/" + id);
    const responseData = await response.json();
    state.selectedParty = responseData.data;
    
    // console.log(state.selectedParty);
    render();
  } catch (err) {
    console.error(`ERROR FETCHING DATA:`, err);
  }
}
// getParty(9538)

// === COMPONENTS ===
// party component that shows details about a single party when clicked
const PartyItem = (party) => {
  const $li = document.createElement(`li`);
  $li.innerHTML = `<li><a href="#selected">${party.name}</a></li>`;
  // console.log($li);
  
  $li.addEventListener(`click`, () => getParty(party.id));
  return $li;
}

// a list of parties component 
const PartiesList = () => {
  const $ul = document.createElement(`ul`);
  $ul.classList.add(`lineup`);

  const $parties = state.parties.map(PartyItem);
  $ul.replaceChildren(...$parties)
  // console.log($ul);

  return $ul;
}


// party component showing all the information about the selected party
const PartyDetails = () => {
  // console.log(partyDetails);
  
}


// === RENDER ===

const render = () => {
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

  $app.querySelector(`UpcomingParties`).replaceWith(PartiesList());
  // $app.querySelector(`PartyDetails`).replaceWith(PartyDetails());
}

const init = async () => {
  await getParties();
  render();
}

init();
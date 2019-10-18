document.addEventListener('DOMContentLoaded', () => {

  const newPlayerForm = document.querySelector('#new-player-form');
  newPlayerForm.addEventListener('submit', handleNewPlayerForm);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

});

const handleNewPlayerForm = function (event) {
  event.preventDefault();

  const playerListItem = createPlayerListItem(event.target);
  const playerList = document.querySelector('#player-list');
  playerList.appendChild(playerListItem);

  event.target.reset()
}

const createPlayerListItem = function (form) {
  const playerListItem = document.createElement('li');
  playerListItem.classList.add('player-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  playerListItem.appendChild(name);

  const team = document.createElement('h2');
  team.textContent = form.teams.value;
  playerListItem.appendChild(team);

  const halloffame = document.createElement('h2');
  halloffame.textContent = form.halloffame.value;
  playerListItem.appendChild(halloffame);

  return playerListItem;
};

const handleDeleteAllClick = function (event) {
  const playerList = document.querySelector('#player-list');
  playerList.innerHTML = "";
};

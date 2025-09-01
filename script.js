const nameEl = document.getElementById('name');
const titleEl = document.getElementById('title');
const nameInput = document.getElementById('nameInput');
const titleInput = document.getElementById('titleInput');
const updateBtn = document.getElementById('updateBtn');
const hobbyBtn = document.getElementById('hobbyBtn');
const viewBtn = document.getElementById('viewBtn');
const hobbyEl = document.getElementById('hobby');
const viewsEl = document.getElementById('views');

const hobbies = ['Photography', 'Gaming', 'Hiking', 'Cooking', 'Reading'];

updateBtn.addEventListener('click', () => {
  const newName = nameInput.value.trim();
  const newTitle = titleInput.value.trim();

  if (!newName || !newTitle) {
    alert('Please enter both name and title.');
    return;
  }

  nameEl.textContent = newName;
  titleEl.textContent = newTitle;
});

hobbyBtn.addEventListener('click', () => {
  const randomHobby = hobbies[Math.floor(Math.random() * hobbies.length)];
  hobbyEl.textContent = `Hobby: ${randomHobby}`;
});

const viewCounter = (() => {
  let count = 0;
  return () => {
    count++;
    viewsEl.textContent = `Profile Views: ${count}`;
  };
})();

viewBtn.addEventListener('click', () => viewCounter());
import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  // render out the books
  renderBookList(bookListEl, books)

  getAuthor("/authors/OL22098A")
  bookListEl.addEventListener('click', async (event) => {
    const urlKey = event.target.dataset.authorUrlKey;
    if (urlKey) {
      const author = await getAuthor(urlKey)
      renderAuthorInfo(authorInfoEl, author)

    }
  })

  renderNewUserForm(newUserFormEl)

  newUserFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(newUserFormEl);
    const userObject = Object.entries(formData)
    createNewUser(userObject).then((newUser) => renderNewUser(newUserEl, newUser))
    newUserFormEl.reset()

  })
}


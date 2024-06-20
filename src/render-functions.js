export const renderBookList = (bookListEl, books) => {

    bookListEl.innerHTML = '';
    books.forEach((book) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const button = document.createElement('button')
        img.src = book.coverUrl;
        img.alt = `An old cover of ${book.title}`;
        p.textContent = `Title: ${book.title}`;
        button.textContent = `View ${book.author.name}`;
        button.setAttribute('data-author-url-key', book.author.urlKey)
        li.append(img, p, button)
        bookListEl.append(li)
    })

}

export const renderAuthorInfo = (authorInfoEl, author) => {
    authorInfoEl.innerHTML = ''
    const h2 = document.createElement('h2')
    const img = document.createElement('img')
    const authorBirth = document.createElement('p')
    const authorBio = document.createElement('p')
    const a = document.createElement('a')
    h2.textContent = author.name;
    img.src = author.pictureUrl;
    img.alt = `A picture of ${author.name}`;
    authorBirth.textContent = `Born: ${author.birthDate}`;
    authorBio.textContent = author.bio;
    a.href = author.wikipediaUrl;
    a.textContent = 'Wikipedia Link';
    authorInfoEl.append(h2, img, authorBirth, authorBio, a)

}

export const renderNewUserForm = (newUserFormEl) => {
    const usernameLabel = document.createElement('label')
    usernameLabel.htmlFor = 'username'
    usernameLabel.textContent = 'Username'
    const usernameInput = document.createElement('input')
    usernameInput.id = 'username'
    usernameInput.name = 'username'
    const isCoolLabel = document.createElement('label')
    isCoolLabel.htmlFor = 'is-cool'
    isCoolLabel.textContent = 'Is this user cool?'
    const isCoolInput = document.createElement('input')
    isCoolInput.id = 'is-cool'
    isCoolInput.name = 'isCool'
    isCoolInput.type = 'checkbox';
    const languageLabel = document.createElement('label')
    languageLabel.htmlFor = 'favorite-language'
    languageLabel.textContent = 'Favorite Language'
    const favoriteLanguageSelect = document.createElement('select')
    favoriteLanguageSelect.id = 'favorite-language'
    favoriteLanguageSelect.name = 'favoriteLanguage'
    const button = document.createElement('button')
    button.textContent = 'Create User'
    const options = ['None', 'JavaScript', 'Python', 'Ruby']
    options.forEach((choice) => {
        const option = document.createElement('option')
        option.value = choice
        option.text = choice
        favoriteLanguageSelect.appendChild(option)
    })
    newUserFormEl.append(usernameLabel, usernameInput, isCoolLabel, isCoolInput, languageLabel, favoriteLanguageSelect, button)
}

export const renderNewUser = (newUserEl, newUser) => {
    newUserEl.innerHTML = '';
    const h2 = document.createElement('h2')
    h2.textContent = newUser.username
    h2.dataset.userId = newUser.id
    const pCool = document.createElement('p')
    if (newUser.isCool) {
        pCool.textContent = 'The hippest in the house!'
    } else {
        pCool.textContent = 'A real square.'
    }
    const p = document.createElement('p')
    p.textContent = `Favorite Language: ${newUser.favoriteLanguage}`

    newUserEl.append(h2, pCool, p)
}
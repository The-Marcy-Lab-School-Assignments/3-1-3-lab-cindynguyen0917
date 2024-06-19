export const getFirstThreeFantasyBooks = async () => {
    try {
        const response = await fetch('https://openlibrary.org/subjects/fantasy.json')
        if (!response.ok) {
            throw new Error("Failed to get fantasy books")
        }
        console.log(response)
        const jsonData = await response.json()
        console.log(jsonData)
        const books = jsonData.works.slice(0, 3).map((work) => {
            const title = work.title;
            const author = {
                name: work.authors[0].name,
                urlKey: work.authors[0].key
            }
            console.log(author)
            const coverUrl = `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`;
            return { title, author, coverUrl }
        })
        console.log(books)
        return books

    }
    catch (error) {
        console.warn(error.message)
        return null
    }
};

export const getAuthor = () => {
};

export const createNewUser = () => {
}
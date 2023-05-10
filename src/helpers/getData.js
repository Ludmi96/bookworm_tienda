import BOOKS from '../data/books_data.json'

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(BOOKS)

        }, 1500)
    })
}
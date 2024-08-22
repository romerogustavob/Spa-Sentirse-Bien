export class Comment {

    private id: number
    private author: string
    private text: string
    private publishedAt: Date

    constructor (id: number, author: string, text: string, publishedAt: Date) {
        this.id = id
        this.author = author
        this.text = text
        this.publishedAt = publishedAt
    }

    getId () {
        return this.id
    }

    getAuthor () {
        return this.author
    }

    getText () {
        return this.text
    }

    getDate () {
        return this.publishedAt
    }
}
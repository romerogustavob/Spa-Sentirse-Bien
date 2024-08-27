export class News {
    
    private id: number;
    private title: string
    private description: string
    private imageUrl?: string
    private publishedAt: Date
    private author: string

    constructor (id: number, title: string, description: string, publlishedAt: Date, author:string) {
        this.id = id
        this.title = title
        this.description = description
        this.publishedAt = publlishedAt
        this.author = author
    }

    getId () {
        return this.id
    }
 
    getTitle () {
        return this.title
    }

    getDescription () {
        return this.description
    }

    getImage () {
        return this.imageUrl
    }

    getDate() {
        return this.publishedAt
    }

    getAuthor() {
        return this.author
    }
}
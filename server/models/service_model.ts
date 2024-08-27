export class Service {
    service_name: string
    service_price: number
    service_description: string
    service_imgUrl: string

    constructor (name: string, price:number, description: string, img: string) {
        this.service_name = name
        this.service_price = price
        this.service_description = description
        this.service_imgUrl = img
    }
}
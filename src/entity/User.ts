
/**
 * Model representation of a user
 *
 * @export
 * @class User
 */
export class User {
    private id: number;
    private name: string;
    private city: string;
    private street: string;

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public getCity(): string {
        return this.city;
    }

    public setStreet(street: string) {
        this.street = street;
    }

    public getStreet(): string {
        return this.street;
    }
}
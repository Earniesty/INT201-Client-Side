class City {
    constructor() {
        this.city = []
    }

    listAllBuildingCity() {
        return this.city
        // return this.city.map(building => Object.getOwnPropertyNames(building))
        // return this.city.map(building => Object.keys(building))
        // return Object.getOwnPropertyNames(this)
        // return Object.getPrototypeOf(this)
        // return this.city.map(building => building.keys())
    }

    addBuilding(building) {
        this.city.push(building)
        return building
    }
}

module.exports = {City}
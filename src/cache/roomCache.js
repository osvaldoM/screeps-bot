module.exports = class RoomCache {
    constructor(room) {
        this.room = room;
        this.myTowers = undefined;
        this.myStructures = undefined;
        this.myConstructionSites = undefined;
    }

    getMyStructures() {
        if (this.myStructures === undefined) {
            this.myStructures = this.room.find(FIND_MY_STRUCTURES);
        }
        return this.myStructures;
    }

    getMyTowers() {
        if (this.myTowers === undefined) {
            this.myTowers = this.getMyStructures().filter(structure => structure.structureType == STRUCTURE_TOWER);
        }
        return this.myTowers;
    }

    getMyConstructionSites() {
        if (this.myConstructionSites === undefined) {
            this.myConstructionSites = this.room.find(FIND_CONSTRUCTION_SITES);
        }
        return this.myConstructionSites;
    }
};

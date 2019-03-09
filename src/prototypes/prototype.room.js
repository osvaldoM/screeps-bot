Room.prototype.getActiveSources = function () {
    if (global.activeSources === undefined) {
        global.activeSources = this.find(FIND_SOURCES_ACTIVE);
    }

    return global.activeSources;
};

Room.prototype.getWalls = function () {
    if (global.wallsInRoom === undefined) {
        global.wallsInRoom = this.find(FIND_STRUCTURES, {
            filter: structure => structure.structureType === STRUCTURE_WALL,
        });
    }
    return global.wallsInRoom;
};

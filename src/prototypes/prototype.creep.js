Creep.prototype.collectEnergyFromSource = function (source) {
    // closest By range works better than by path if path between two points is a straight line
    // That can be ensured by creating almost straight roads.
    const mySource = source || this.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    if (this.harvest(mySource) === ERR_NOT_IN_RANGE) {
        this.moveTo(mySource, { visualizePathStyle: { stroke: '#ffaa00' } });
    }
};

Creep.prototype.closestActiveSourceFromSpawnByRange = function () {
    if (this.memory.closestActiveSourceId) {
        return this.room.getActiveSources().find(source => source.id === this.memory.closestActiveSourceId);
    }

    const closestSource = this.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
    this.memory.closestActiveSourceId = closestSource.id;
    return closestSource;
};

Creep.prototype.getClosestActiveSourceFromControllerByRange = function () {
    const activeSourceId = this.memory.closestActiveSourceId;
    if (activeSourceId) {
        return this.room.getActiveSources().find(source => source.id === activeSourceId);
    }
    return this.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
};
Creep.prototype.setClosestActiveSourceFromControllerByRange = function () {
    if (!this.memory.closestActiveSourceId) {
        const closestSource = this.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        if (closestSource) {
            this.memory.closestActiveSourceId = closestSource.id;
        }
    }
    return this;
};

Creep.prototype.repairWall = function (wall) {
    if (this.repair(wall) === ERR_NOT_IN_RANGE) {
        return this.moveTo(wall, { visualizePathStyle: { stroke: '#ffffff' } });
    }
    return false;
};
Creep.prototype.isAtHome = function () {
    return this.memory.homeRoom === this.room.name;
};
Creep.prototype.goBackHome = function () {
    const exit = this.room.findExitTo(this.memory.homeRoom);
    this.moveTo(this.pos.findClosestByRange(exit));
};
Creep.prototype.isOverseas = function () {
    return this.memory.targetRoom === this.room.name;
};
Creep.prototype.goOverseas = function () {
    console.log('trying to exit');
    const exit = this.room.findExitTo(this.memory.targetRoom);
    this.moveTo(this.pos.findClosestByPath(exit));
};

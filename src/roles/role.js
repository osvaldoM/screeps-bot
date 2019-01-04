const getCurrentNumberOfScreepsByRole = creepRole => Object.values(Game.creeps)
    .reduce((accumulator, creep) => (creep.memory.role === creepRole ? (accumulator + 1) : accumulator), 0);

module.exports = class Role {
    constructor(name, minimumNumberOfCreeps, module) {
        this.name = name;
        this.minimumNumberOfCreeps = minimumNumberOfCreeps;
        this.module = module;
    }

    needsMoreCreeps() {
        const currentNumberOfCreeps = getCurrentNumberOfScreepsByRole(this.name);
        return currentNumberOfCreeps < this.minimumNumberOfCreeps;
    }
};

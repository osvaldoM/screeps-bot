const roleRemoteHarvester = {

    run: (creep) => {
        if (creep.memory.storingEnergy && creep.carry.energy === 0) {
            creep.memory.storingEnergy = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.storingEnergy && creep.carry.energy === creep.carryCapacity) {
            creep.memory.storingEnergy = true;
            creep.say('⚡ store energy');
        }
        if (creep.memory.storingEnergy) {
            if (creep.isAtHome()) {
                const targets = creep.room.find(FIND_STRUCTURES, {
                    filter: structure => (structure.structureType === STRUCTURE_EXTENSION
                        || structure.structureType === STRUCTURE_SPAWN
                        || structure.structureType === STRUCTURE_TOWER)
                    && structure.energy < structure.energyCapacity,
                });
                if (targets.length > 0) {
                    if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                    }
                }
            } else {
                creep.goBackHome();
            }
        } else if (creep.isOverseas()) {
            creep.collectEnergyFromSource(creep.room.find(FIND_SOURCES)[creep.memory.sourceIndex]);
        } else {
            creep.goOverseas();
        }
    },
};

module.exports = roleRemoteHarvester;

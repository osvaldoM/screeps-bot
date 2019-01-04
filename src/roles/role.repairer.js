const roleHarvester = require('./role.harvester');

const roleRepairer = {

    /** @param {Creep} creep * */
    run: (creep) => {
        if (creep.memory.repairing && creep.carry.energy === 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.repairing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('🔧 repair');
        }

        if (creep.memory.repairing) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.hits < structure.hitsMax && structure.structureType !== STRUCTURE_WALL,
            });
            if (targets.length) {
                if (creep.repair(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            } else {
                roleHarvester.run(creep);
            }
        } else {
            creep.collectEnergyFromSource();
        }
    },
};

module.exports = roleRepairer;

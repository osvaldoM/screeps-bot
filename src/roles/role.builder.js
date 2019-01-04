const roleUpgrader = require('./role.upgrader');

const roleBuilder = {

    /** @param {Creep} creep * */
    run: (creep) => {
        if (creep.memory.building && creep.carry.energy === 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.building && creep.carry.energy === creep.carryCapacity) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if (creep.memory.building) {
            const targets = CACHE.getMyConstructionSites();
            if (targets.length) {
                if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#ffffff' } });
                }
            } else {
                roleUpgrader.run(creep);
            }
        } else {
            creep.collectEnergyFromSource();
        }
    },
};

module.exports = roleBuilder;

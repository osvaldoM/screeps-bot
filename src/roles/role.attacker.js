const roleUpgrader = require('./role.upgrader');

const roleAttacker = {
    run: (creep) => {
        if (creep.memory.attacking && creep.carry.energy === 0) {
            creep.memory.attacking = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.attacking && creep.carry.energy === creep.carryCapacity) {
            creep.memory.attacking = true;
            creep.say('🚧 attack');
        }
        if (creep.memory.attacking) {
            const targets = creep.room.find(FIND_HOSTILE_STRUCTURES);
            if (targets.length) {
                if (creep.attack(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            } else {
                roleUpgrader.run(creep);
            }
        } else {
            creep.collectEnergyFromSource();
        }
    },
};

module.exports = roleAttacker;

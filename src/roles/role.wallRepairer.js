const roleHarvester = require('./role.harvester');

/*
max HP for a wall is 300M
Let's set our min HP threshold as 300
300 is 0.0001% of 300M
 */
global.initialHitPointsPercentage = Memory.initialHitPointsPercentage || 0.0001;

// So we don't spend unreasonable amounts of energy on walls.
const maxDesiredHitPointsPercentage = 1; // 3M

const findWallThatNeedsRepair = (walls, minHitPointsPercentage) => walls.find((wall) => {
    const hitPointsPercentage = (wall.hits / wall.hitsMax) * 100;
    return hitPointsPercentage < minHitPointsPercentage;
});

// Should consider using towers rather than creeps for repairing walls.
const roleWallRepairer = {
    run: (creep) => {
        if (creep.memory.repairing && creep.carry.energy === 0) {
            creep.memory.repairing = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.repairing && creep.carry.energy === creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('🔧 repair wall');
        }

        if (creep.memory.repairing) {
            const walls = creep.room.getWalls();
            for (; global.initialHitPointsPercentage < maxDesiredHitPointsPercentage; global.initialHitPointsPercentage += 0.0001) {
                const wallThatNeedsRepair = findWallThatNeedsRepair(walls, global.initialHitPointsPercentage);
                if (wallThatNeedsRepair) {
                    Memory.initialHitPointsPercentage = global.initialHitPointsPercentage;
                    return creep.repairWall(wallThatNeedsRepair);
                }
                roleHarvester.run(creep);
            }
        } else {
            creep.collectEnergyFromSource();
        }
        return creep;
    },
};

module.exports = roleWallRepairer;

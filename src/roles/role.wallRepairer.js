const roleHarvester = require('./role.harvester');

/*
max HP for a wall is 300M
Let's set our min HP threshold as 300
300 is 0.0001% of 300M
 */
const initialHitPointsPercentage = 0.0001;

// So we don't spend all our energy on walls.
const maxDesiredHitPointsPercentage = 1;

const repairWall = (creep, wall) => {
    if (creep.repair(wall) === ERR_NOT_IN_RANGE) {
        creep.moveTo(wall, { visualizePathStyle: { stroke: '#ffffff' } });
    } else {
        roleHarvester.run(creep);
    }
};
const findWallsThatShouldBeRepaired = (walls, minHitPointsPercentage) => {
    return walls.find((wall) => {
        const hitPointsPercentage = (wall.hits / wall.hitsMax) * 100;
        return hitPointsPercentage < minHitPointsPercentage;
    });
};


//TODO improve this module as it's a source of bugs
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
            const walls = creep.room.find(FIND_STRUCTURES, {
                filter: structure => structure.structureType === STRUCTURE_WALL,
            });

            //save 000.1 in memory
            for (let i = initialHitPointsPercentage; i < maxDesiredHitPointsPercentage; i += 0.001) {
                const wallThatNeedsRepair = findWallsThatShouldBeRepaired(walls, i);
                if (wallThatNeedsRepair) {
                    return repairWall(creep, wallThatNeedsRepair);
                }
            }
        } else {
            creep.collectEnergyFromSource();
        }
        return creep;
    },
};

module.exports = roleWallRepairer;

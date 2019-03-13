const roleHarvester = require('./roles/role.harvester');
const roleUpgrader = require('./roles/role.upgrader');
const roleBuilder = require('./roles/role.builder');
const roleRepairer = require('./roles/role.repairer');
const roleAttacker = require('./roles/role.attacker');
const roleWallRepairer = require('./roles/role.wallRepairer');
const roleRemoteHarvester = require('./roles/role.remoteHarvester');
const Role = require('./roles/role');

const HOME_ROOM_NAME = 'W16N18';
const MINIMUM_COST_FOR_CREEP = BODYPART_COST.move + BODYPART_COST.work + BODYPART_COST.carry;

const ROLES = [
    new Role('harvester', 4, roleHarvester, [WORK, WORK, CARRY, CARRY, MOVE]),
    new Role('upgrader', 3, roleUpgrader, [WORK, CARRY, CARRY, MOVE]),
    new Role('builder', 0, roleBuilder, [WORK, CARRY, CARRY, MOVE]),
    new Role('repairer', 1, roleRepairer, [WORK, CARRY, MOVE, MOVE]),
    new Role('wallRepairer', 1, roleWallRepairer, [WORK, CARRY, CARRY, MOVE]),
    new Role('remoteHarvester', 0, roleRemoteHarvester, [WORK, CARRY, CARRY, CARRY, MOVE, MOVE]),
    new Role('attacker', 0, roleAttacker, [WORK, CARRY, MOVE]),
];

module.exports = () => ({
    HOME_ROOM_NAME,
    ROLES,
    MINIMUM_COST_FOR_CREEP,
});

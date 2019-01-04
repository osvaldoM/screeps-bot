const roleHarvester = require('./roles/role.harvester');
const roleUpgrader = require('./roles/role.upgrader');
const roleBuilder = require('./roles/role.builder');
const roleRepairer = require('./roles/role.repairer');
const roleAttacker = require('./roles/role.attacker');
const roleWallRepairer = require('./roles/role.wallRepairer');
const roleRemoteHarvester = require('./roles/role.remoteHarvester');
const Role = require('./roles/role');

const HOME_ROOM_NAME = 'W16N18';

const ROLES = [
    new Role('harvester', 3, roleHarvester),
    new Role('upgrader', 5, roleUpgrader),
    new Role('builder', 1, roleBuilder),
    new Role('repairer', 1, roleRepairer),
    new Role('wallRepairer', 1, roleWallRepairer),
    new Role('remoteHarvester', 0, roleRemoteHarvester),
    new Role('attacker', 0, roleAttacker),
];

module.exports = () => ({
    HOME_ROOM_NAME,
    ROLES,
});

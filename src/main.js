require('./prototypes/prototype.room');
require('./prototypes/prototype.spawn');
require('./prototypes/prototype.creep');
const constants = require('./constants')();
const Util = require('./utilities');
const RoomCache = require('./cache/roomCache');
const roleManager = require('./managers/roleManager');
const spawnManager = require('./managers/spawnManager');

global.HOME_ROOM_NAME = constants.HOME_ROOM_NAME;
global.CACHE = new RoomCache(Game.rooms[constants.HOME_ROOM_NAME]);
global.ROLES = constants.ROLES;

CACHE.getMyTowers().forEach((tower) => {
    const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
        tower.attack(closestHostile);
    }
});
module.exports.loop = () => {
    Util.clearMemory();

    Object.values(Game.creeps).forEach((creep) => {
        roleManager.run(creep);
    });
    spawnManager.run(Game.spawns.Spawn1);
};

module.exports = {
    "extends": "airbnb-base",
    "globals": {
        "ERR_NOT_IN_RANGE":true,
        "Game": true,
        "Room": true,
        "Creep": true,
        "Spawn": true,
        "Memory": true,
        "HOME_ROOM_NAME": true,
        "CACHE": true,
        "ROLES": true,
        "FIND_HOSTILE_CREEPS": true,
        "FIND_SOURCES_ACTIVE": true,
        "FIND_MY_STRUCTURES": true,
        "FIND_CONSTRUCTION_SITES": true,
        "STRUCTURE_TOWER": true
    },
    "rules": {
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["creep"] }],
        "indent": ["error", 4],
        "max-len": ["error",150],
    },
};
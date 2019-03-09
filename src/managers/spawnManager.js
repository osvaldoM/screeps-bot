function createCreep(spawn, role) {
    const availableEnergy = spawn.room.energyAvailable;
    if (availableEnergy < MINIMUM_COST_FOR_CREEP) {
        return;
    }
    if (role.name === 'remoteHarvester') {
        spawn.createRemoteHarvesterCreep(role, HOME_ROOM_NAME, 'W15N18', 0);
    } else {
        spawn.createSimpleeCreep(role);
    }
}
module.exports.run = (spawn) => {
    const roleWithoutEnoughCreeps = ROLES.find(role => role.needsMoreCreeps());
    if (roleWithoutEnoughCreeps) {
        createCreep(spawn, roleWithoutEnoughCreeps);
    }
};

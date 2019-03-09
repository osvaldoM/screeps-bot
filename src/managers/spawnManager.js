function createCreep(spawn, role) {
    const availableEnergy = spawn.room.energyAvailable;
    if (availableEnergy < MINIMUM_COST_FOR_CREEP) {
        return;
    }
    if (role.name === 'harvester') {
        spawn.createWorkerCreep(role.name);
    } else if (role.name === 'upgrader') {
        spawn.createWorkerCreep(role.name);
    } else if (role.name === 'builder') {
        spawn.createSimpleCreep(availableEnergy, role.name);
    } else if (role.name === 'repairer') {
        spawn.createSimpleCreep(availableEnergy, role.name);
    } else if (role.name === 'wallRepairer') {
        spawn.createSimpleCreep(availableEnergy, role.name);
    } else if (role.name === 'attacker') {
        spawn.createAttackerCreep();
    } else if (role.name === 'remoteHarvester') {
        spawn.createRemoteHarvesterCreep(HOME_ROOM_NAME, 'W15N18', 0);
    }
}
module.exports.run = (spawn) => {
    const roleWithoutEnoughCreeps = ROLES.find(role => role.needsMoreCreeps());
    if (roleWithoutEnoughCreeps) {
        createCreep(spawn, roleWithoutEnoughCreeps);
    }
};

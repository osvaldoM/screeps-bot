const Roles = require('../constants')();

// build creeps specialized for working with more work and carry than move parts.
// I have observed that creeps spend more time working
// than moving which causes them to cluster arround energy sources rather than on roads..

StructureSpawn.prototype.createWorkerCreep = function (role) {
    let shouldIncludeMovePart = false;
    let bodyParts = [];
    const temporaryBodyParts = [WORK, CARRY, MOVE];
    while (this.spawnCreep(temporaryBodyParts, new Date().getTime(), { dryRun: true }) === 0) {
        bodyParts = [...temporaryBodyParts];
        temporaryBodyParts.push(...[WORK, CARRY]);
        if (shouldIncludeMovePart) {
            temporaryBodyParts.push(MOVE);
        }
        shouldIncludeMovePart = !shouldIncludeMovePart;
    }
    const creationStatus = this.spawnCreep(bodyParts.sort(), role + new Date().getTime(), { memory: { role } });
    if (creationStatus === 0) {
        console.log(role, ' Creep succesfully created.');
    }
};

StructureSpawn.prototype.createAttackerCreep = function () {
    const creationStatus = this.spawnCreep([WORK, CARRY, MOVE, ATTACK], `attacker${new Date().getTime()}`,
        { memory: { role: 'attacker' } });
    if (creationStatus === 0) {
        console.log('Attacker Creep succesfully created.');
    }
};

// Since there will be fewer remoteHarvester, it's unlikely that they will cluster next to sources
// Therefore it is not of much importance that they work faster
StructureSpawn.prototype.createRemoteHarvesterCreep = function (homeRoom, targetRoom, sourceIndex) {
    if (!homeRoom || !targetRoom || typeof sourceIndex === 'undefined') {
        return;
    }
    let shouldIncludeWorkPart = false;
    const temporaryBodyParts = [WORK, CARRY, MOVE];
    let bodyParts = [];
    while (this.spawnCreep(temporaryBodyParts, new Date().getTime(), { dryRun: true }) === 0) {
        bodyParts = [...temporaryBodyParts];
        temporaryBodyParts.push(...[MOVE, CARRY]);
        if (shouldIncludeWorkPart) {
            temporaryBodyParts.push(WORK);
        }
        shouldIncludeWorkPart = !shouldIncludeWorkPart;
    }
    const creationStatus = this.spawnCreep(bodyParts.sort(), Roles.REMOTE_HARVESTER_ROLE + new Date().getTime(),
        {
            memory: {
                role: Roles.REMOTE_HARVESTER_ROLE, homeRoom, targetRoom, sourceIndex,
            },
        });
    if (creationStatus === 0) {
        console.log(Roles.REMOTE_HARVESTER_ROLE, ' Creep succesfully created.');
    }
};

StructureSpawn.prototype.createSimpleCreep = function(energy, role) {
    const minimumEnergyRequiredForCreep = 200;
    const numberOfBodyParts = Math.floor(energy / minimumEnergyRequiredForCreep);
    const bodyParts = [];

    for (let i = 0; i < numberOfBodyParts; i++) {
        bodyParts.push(WORK);
    }
    for (let i = 0; i < numberOfBodyParts; i++) {
        bodyParts.push(CARRY);
    }
    for (let i = 0; i < numberOfBodyParts; i++) {
        bodyParts.push(MOVE);
    }
    const creationStatus = this.spawnCreep(bodyParts, role + new Date().getTime(), { memory: { role } });
    if (creationStatus === 0) {
        console.log(role, ' Creep succesfully created.');
    }
};

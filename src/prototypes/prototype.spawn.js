StructureSpawn.prototype.createRemoteHarvesterCreep = function (role, homeRoom, targetRoom, sourceIndex) {
    if (!homeRoom || !targetRoom || typeof sourceIndex === 'undefined') {
        return;
    }

    const creationStatus = this.spawnCreep(role.genome, role.name + new Date().getTime(),
        {
            memory: {
                role: role.name, homeRoom, targetRoom, sourceIndex,
            },
        });
    if (creationStatus === 0) {
        console.log(role.name, ' Creep succesfully created.');
    }
};

StructureSpawn.prototype.createSimpleeCreep = function (role) {
    const creationStatus = this.spawnCreep(role.genome, role.name + new Date().getTime(), { memory: { role: role.name } });
    if (creationStatus === 0) {
        console.log(role.name, ' Creep succesfully created.');
    }
};

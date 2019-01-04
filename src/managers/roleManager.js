module.exports.run = (creep) => {
    ROLES.find(role => role.name === creep.memory.role)
        .module.run(creep);
};

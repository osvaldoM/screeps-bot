
const Utilities = {
    clearMemory: () => {
        for (const name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
        }
    },
};

module.exports = Utilities;

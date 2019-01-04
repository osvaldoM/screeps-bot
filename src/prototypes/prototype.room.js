Room.prototype.getActiveSources = function () {
    if (global.activeSources === undefined) {
        global.activeSources = this.find(FIND_SOURCES_ACTIVE);
    }

    return global.activeSources;
};

const roleHarvester = {
  /** @param {Creep} creep **/
  run: function (creep: any) {
    if (creep.store.getFreeCapacity() > 0) {
      creep.say("🔄 harvest");
      const sources = creep.room.find(FIND_SOURCES);
      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#2ECC71" } });
      }
    } else {
      if (creep.transfer(Game.spawns["Spawn1"], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns["Spawn1"], { visualizePathStyle: { stroke: "#85C1E9" } });
      }
    }
  }
};

export default roleHarvester;

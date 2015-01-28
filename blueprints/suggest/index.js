module.exports = {
  description: 'Generates suggestion component template.',
  normalizeEntityName: function(entityName) {
    entityName = this.lookupBlueprint('component').normalizeEntityName(entityName);
    return entityName;
  },

  fileMapTokens: function() {
    return this.lookupBlueprint('component').fileMapTokens();
  }
}
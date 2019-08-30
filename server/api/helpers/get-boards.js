module.exports = {
  inputs: {
    criteria: {
      type: 'json',
      custom: value => _.isArray(value) || _.isPlainObject(value)
    }
  },

  fn: async function(inputs, exits) {
    const boards = await Board.find(inputs.criteria).sort('position');

    return exits.success(boards);
  }
};

exports.seed = function(knex) {
  return knex('foods').truncate()
    .then(function () {
      return knex('foods').insert([
        {foodName: 'steam broccoli'},
        {foodName: 'chicken noodlesoup'},
        {foodName: 'baked beans'},
        {foodName: 'bbq ribs'},
        {foodName: 'carrot cake'},
        {foodName: 'chimichanga'},
        {foodName: 'duck'},
        {foodName: 'donuts'},
        {foodName: 'dumplings'},
        {foodName: 'enchiladas'},
        {foodName: 'eggrolls'},
        {foodName: 'sushi'},
        {foodName: 'gumbo'},
        {foodName: 'grits'},
        {foodName: 'guancamole and chips'},
        {foodName: 'hamburgers'},
        {foodName: 'hot dogs'},
        {foodName: 'ice cream'},
        {foodName: 'stew'},
        {foodName: 'jambalaya'},
        {foodName: 'jello'},
        {foodName: 'kabobs'},
      ]);
    });
};

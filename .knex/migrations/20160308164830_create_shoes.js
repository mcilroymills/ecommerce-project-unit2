
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoes', function(table){
    table.increments();
    table.string('style');//shoe boot slipon
    table.integer('price');
    table.string('color');
    table.integer('order_id').references('orders','id');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shoes');
};
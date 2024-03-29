exports.up = function(knex) {
  return knex.schema.createTable("messages", table => {
    table.increments("id").primary();
    table.timestamp("date");
    table.string("message");
    table.string("author");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("messages");
};

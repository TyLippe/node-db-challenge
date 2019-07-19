
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl  => {
        tbl.increments()

        tbl.string('name', 128)
            .unique()
            .notNullable()
        tbl.string('description', 256)
            .notNullable()
        tbl.boolean('complete')
            .notNullable()
    })
    .createTable('actions', tbl => {
        tbl.increments()

        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('action_desc', 128)
            .notNullable()
        tbl.string('notes', 256)
        tbl.boolean('complete')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions');
};

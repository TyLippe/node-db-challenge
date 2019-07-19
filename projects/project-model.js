const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findActions,
    add,
    addAction,
    update,
    remove
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where({ id })
        .first()
        .then(project => {
            if(project) {
                return project;
            } else {
                return null;
            }
        })
}

function findActions(id) {
    return db('projects')
        .innerJoin('actions', 'projects.id', 'actions.project_id')
        .where({ project_id: id})
        .select('projects.name', 'actions.action_desc', 'actions.notes', 'actions.complete')
}

function add(project) {
    return db('projects')
        .insert(project)
}

function addAction(action, project_id) {
    return db('actions')
        .insert({ ...action, project_id })
}

function update(changes, id) {
    return db('projects')
        .where({ id })
        .update(changes)
}

function remove(id) {
    return db('projects')
        .where({ id })
        .del()
}
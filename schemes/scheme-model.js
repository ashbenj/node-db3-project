const db = require('../data/db-config.js');

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db
		.select('*')
		.from('steps')
		.join('schemes', 'steps.scheme_id', 'schemes.id')
		.where({ scheme_id: id })
		.orderBy('steps.step_number');
}

function add(schemeData) {
	return db('schemes').insert(schemeData);
}

function update(changes, id) {
	return db('schemes')
		.where({ id })
		.update(changes)
		.then((res) => {
			return db('schemes').where({ id });
		});
}

function remove(id) {
	return db('schemes').where({ id }).del();
}

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove,
};

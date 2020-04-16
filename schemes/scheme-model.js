const db = require('../data/db-config.js');

function find() {
	return db('schemes');
}

function findById(id) {
	console.log(id);
	return db('schemes').where({ id }).first();
}

function findSteps(id) {
	return db
		.select(
			'steps.id',
			'schemes.scheme_name',
			'steps.step_number',
			'steps.step_number',
			'steps.instructions'
		)
		.from('steps')
		.join('schemes', 'steps.scheme_id', 'schemes.id')
		.where('steps.scheme_id', id)
		.orderBy('steps.step_number');
}

function add(schemeData) {
	return db('schemes').insert(schemeData);
}

function update(changes, id) {
	return db('schemes')
		.where({ id })
		.update(changes)
		.then((ids) => {
			return findByID;
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

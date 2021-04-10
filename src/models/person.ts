import { IPerson } from '../intefaces/IPerson'


const { Schema, model } = require('mongoose');

const schema = new Schema({
	name: { type: String, }
})

module.exports = model('Person', schema)
const express = require('express');
const config = require('config');
const mogoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));
console.log('hi');

app.use('/api', require('./routers/person.routes'));

const PORT = config.get('port') || 4000;

async function start() {
	try {
		await mogoose.connect(config.get('MongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		app.listen(PORT, () => console.log(`Server start, port:  ${PORT}`));


	} catch (error) {
		console.log('Server error', error.message);
	}
}
start();

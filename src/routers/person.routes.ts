const { Router } = require('express');
const router = Router();
const fs = require("fs");
import { Person } from '../classes/person';



router.post('/savePerson', async (req, res) => {

	try {
		const { name, strength, agility, intelligence, charisma } = req.body;
		const filedir = process.cwd() + `/src/personsFile/`;

		const paramPerson = {
			name, strength, agility, intelligence, charisma
		}



		let files = [];
		files = fs.readdirSync(filedir, function (err, files) {

		})
		if (files.includes(name + '.json')) {
			return res.status(201).json({ message: 'Person don\'t created', error: 'Such a person already exists' });

		}
		if (strength > 5) {
			return res.status(201).json({ message: 'Person don\'t created', error: 'The strength value exceeds the value of 5' });
		}
		if (agility > 5) {
			return res.status(201).json({ message: 'Person don\'t created', error: 'The agility value exceeds the value of 5' });

		}
		if (intelligence > 5) {
			return res.status(201).json({ message: 'Person don\'t created', error: 'The intelligence value exceeds the value of 5' });

		}
		if (charisma > 5) {
			return res.status(201).json({ message: 'Person don\'t created', error: 'The charisma value exceeds the value of 5' });

		}

		await fs.writeFile(filedir + `${name}.json`, JSON.stringify(paramPerson), (e) => {
			if (e) return console.log(e);
		});

		return res.status(201).json({ message: 'Person created' });

	} catch (e) {
		res.status(500).json({ message: 'Error' });
	}

});


router.post('/loadPersons', async (req, res) => {
	try {
		// const { name, strength, agility, intelligence, charisma } = req.body;
		const filedir = process.cwd() + `\\src\\personsFile\\`;
		const fileExist = [];
		let person = [];
		// const person = new Person(name, strength, agility, intelligence, charisma);

		let files = [];
		files = fs.readdirSync(filedir, function (err, files) {

		});
		let i = 0;
		console.log(files);

		files.forEach(file => {
			let fileContent = JSON.parse(fs.readFileSync(filedir + file, 'utf8', (e) => {
				if (e) return console.log(e);
			}));
			person[i] = new Person(fileContent.name, fileContent.strength, fileContent.agility, fileContent.intelligence, fileContent.charisma, filedir + file);

			console.log('fileConten: ' + fileContent);

			i++;
		})

		console.log(person);

		res.status(201).json({ person })

	} catch (e) {
		res.status(500).json({ message: e.message });
	}
});

router.get('/donwload', async (req, res) => {
	try {

		var file = process.cwd() + `/src/personsFile/` + 'new.txt';
		res.setHeader('Content-disposition', 'attachment; filename=dramaticpenguin.MOV');
		res.setHeader('Content-type', 'text/txt');
		res.download(file); // Set disposition and send it.

	} catch (e) {
		res.status(500).json({ message: e.message });
	}
});

// router.post('/menu', async (req, res) => {

// });

module.exports = router;
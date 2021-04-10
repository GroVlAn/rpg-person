import { IPerson } from '../intefaces/IPerson'

export class Person implements IPerson {
	id: number;
	name: string = 'Unnamed';
	parametrs = {
		Strength: {
			value: 0,
			upValue: function (up: number): void {
				this.value += Math.abs(up);
			},
			description: '',
			skills: {
				attack: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Strength.value) {
							this.parametrs.Strength.skills.attack.level += Math.abs(level);
						}
					},
					description: ''
				},
			}
		},
		Agility: {
			value: 0,
			upValue: (up: number): void => {
				this.parametrs.Agility.value += Math.abs(up);
				this.setEvasion();
				this.setEnergy();
			},
			description: '',
			skills: {
				stealth: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Agility.value) {
							this.parametrs.Agility.skills.stealth.level += Math.abs(level);
						}
					},
					description: ''
				},
				archery: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Agility.value) {
							this.parametrs.Agility.skills.archery.level += Math.abs(level);
						}
					},
					description: ''
				},
			}
		},
		Intelligence: {
			value: 0,
			upValue: (up: number): void => {
				this.parametrs.Intelligence.value += Math.abs(up);
				this.setEnergy()
			},
			description: '',
			skills: {
				learnability: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Intelligence.value) {
							this.parametrs.Intelligence.skills.learnability.level += Math.abs(level);
						}
					},
					description: ''
				},
				survival: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Intelligence.value) {
							this.parametrs.Intelligence.skills.survival.level += Math.abs(level);
						}
					},
					description: ''
				},
				medicine: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Intelligence.value) {
							this.parametrs.Intelligence.skills.medicine.level += Math.abs(level);
						}
					},
					description: ''
				},
			}
		},
		Charisma: {
			value: 0,
			upValue: function (up: number): void {
				this.value += Math.abs(up);
			},
			description: '',
			skills: {
				intimidation: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Charisma.value) {
							this.parametrs.Charisma.skills.intimidation.level += Math.abs(level);
						}
					},
					description: ''
				},
				insight: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Charisma.value) {
							this.parametrs.Charisma.skills.insight.level += Math.abs(level);
						}
					},
					description: ''
				},
				appearance: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Charisma.value) {
							this.parametrs.Charisma.skills.appearance.level += Math.abs(level);
						}
					},
					description: ''
				},
				manipulation: {
					level: 0,
					upLevel: (level: number): void => {
						if (Math.abs(level) <= this.parametrs.Charisma.value) {
							this.parametrs.Charisma.skills.manipulation.level += Math.abs(level);
						}
					},
					description: ''
				},
			}
		}
	}
	private hp: number;
	takeDamage(damage: number): void {
		this.hp--;
	}
	private evasion: number = 10;
	setEvasion(): void {
		this.evasion += this.parametrs.Agility.value;
	}
	getEvasion(): number {
		return this.evasion;
	}
	private energy: number = this.parametrs.Agility.value + this.parametrs.Intelligence.value;
	setEnergy(): void {
		this.energy = this.parametrs.Agility.value + this.parametrs.Intelligence.value;
	}
	pathPerson: string = '';

	constructor(name: string = '', Strength: number, Agility: number, Intelligence: number, Charisma: number, pathPerson: string) {
		this.id = 0;
		this.name = name;
		this.parametrs.Strength.value = Strength;
		this.parametrs.Agility.value = Agility;
		this.parametrs.Intelligence.value = Intelligence;
		this.parametrs.Charisma.value = Charisma;
		this.hp = 3 + this.parametrs.Strength.value;
		this.energy = this.parametrs.Agility.value + this.parametrs.Intelligence.value;
		this.evasion += this.parametrs.Agility.value;
		this.pathPerson = pathPerson;
	}
}



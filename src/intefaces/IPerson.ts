type skill = {
	level: number,
	upLevel(level: number): void,
	description: string
}
type parametr = {
	value: number,
	upValue(up: number): void,
	description: string,
	skills: {
		attack?: skill
		stealth?: skill
		archery?: skill
		learnability?: skill
		survival?: skill
		medicine?: skill
		intimidation?: skill
		insight?: skill
		appearance?: skill
		manipulation?: skill
	}
}
export interface IPerson {
	readonly id: number
	name: string,
	parametrs: {
		Strength: parametr,
		Agility: parametr,
		Intelligence: parametr,
		Charisma: parametr
	},
	//hp: number,
	takeDamage(damage: number): void,
	// evasion: number,
	//energy: number,
}



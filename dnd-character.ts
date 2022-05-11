export class DnDCharacter {

    strength: number
    dexterity: number
    constitution: number
    intelligence: number
    wisdom: number
    charisma: number
    hitpoints: number

    constructor() {
        this.strength = this.scoreCalculation
        this.dexterity = this.scoreCalculation
        this.constitution = this.scoreCalculation
        this.intelligence = this.scoreCalculation
        this.wisdom = this.scoreCalculation
        this.charisma = this.scoreCalculation
        this.hitpoints = this.getHitpoints(this.constitution)
    }

    static getModifierFor(number: number): number {
        return Math.floor((number - 10) / 2)
    }

    getHitpoints(variable: number) {
        return 10 + DnDCharacter.getModifierFor(variable)
    }

    static generateAbilityScore() {
        const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        const score = diceRolls[1] + diceRolls[2] + diceRolls[3]
        return score
    }

    private get scoreCalculation() {
        const diceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        const score = diceRolls[1] + diceRolls[2] + diceRolls[3]
        return score
    }
}
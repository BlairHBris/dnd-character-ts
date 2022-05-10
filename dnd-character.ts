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

/*
        const strengthRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.strength = strengthRolls[1] + strengthRolls[2] + strengthRolls[3]
        const dexterityRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.dexterity = dexterityRolls[1] + dexterityRolls[2] + dexterityRolls[3]
        const constitutionRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.constitution = constitutionRolls[1] + constitutionRolls[2] + constitutionRolls[3]
        const intelligenceRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.intelligence = intelligenceRolls[1] + intelligenceRolls[2] + intelligenceRolls[3]
        const wisdomRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.wisdom = wisdomRolls[1] + wisdomRolls[2] + wisdomRolls[3]
        const charismaRolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * (6 - 1 + 1)) + 1).sort()
        this.charisma = charismaRolls[1] + charismaRolls[2] + charismaRolls[3]
*/
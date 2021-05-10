interface ISkill {
    name: string
    description: string
    optionProp?: number
    getSkill: () => string
    getDescription: () => string
}

interface ICategory {
    name: string
    optionProp?: number
    getCategory: () => string
}

interface IUser {
    name: string
    optionProp?: number
    getUser: () => string
}

interface ILevel {
    level: number
    optionProp?: number
    getLevel: () => string
}

interface IProgression {
    progression: number
    levelFromPrevious: number
    optionProp?: number
    getProgression: () => string
}

type categoryProps = {
    name: string,
    optionProp?: number
}

type skillProps = {
    name: string,
    description: string
    optionProp?: number
}

type userProps = {
    name: string
    optionProp ?: number
}

type levelProps = {
    level: number,
    optionProp?: number
}

type progressionProps = {
    progression: number
    levelFromPrevious: number
    optionProp ?: number
}

class Skill implements ISkill {
    public name: string;
    public description: string;
    public optionProp?: number;

    constructor(props: skillProps) {
        this.name = props.name;
        this.description = props.description;
        this.optionProp = props.optionProp
    }

    public getSkill(): string {
        return `Skill : ${this.name}`
    }

    public getDescription(): string {
        return `Description : ${this.description}`
    }
}

class Category implements ICategory {
    public name: string;
    public optionProp?: number;

    constructor(props: categoryProps){
        this.name = props.name;
        this.optionProp = props.optionProp
    }

    public getCategory(): string {
        return `Category : ${this.name}`
    }
}

class User implements IUser {
    public name: string;
    public optionProp?: number

    constructor(props: userProps){
        this.name = props.name
        this.optionProp = props.optionProp
    }

    public getUser(): string {
        return `User : ${this.name}`
    }
}

class Level implements ILevel {
    public level: number;
    public optionProp?: number

    constructor(props: levelProps){
        this.level = props.level
        this.optionProp = props.optionProp
    }

    public getLevel(): string {
        return `Level : ${this.level}`
    }
}

class Progression implements IProgression {
    public progression: number;
    public optionProp?: number
    public levelFromPrevious: number

    constructor(props: progressionProps){
        this.progression = props.progression
        this.levelFromPrevious = props.levelFromPrevious
        this.optionProp = props.optionProp
    }

    public getProgression(): string {
        return `Le niveau a progressé de ${ this.progression - this.levelFromPrevious } et maintenant de ${this.progression}`
    }
}

const skill1Props = {
    name: "Collaborer à la gestion...",
    description: "Collaborer à la gestion description ...",
}
const skill1: Skill = new Skill(skill1Props);

const category1Props = {
    name: "Concevoir et développer ..."
}
const category1: Category = new Category(category1Props)

const user1Props = {
    name: 'Arnaud'
}
const user1: User = new User(user1Props)

const level1Props = {
    level: 3
}
const level1: Level = new Level(level1Props)

const progression1Props = {
    progression: 3,
    levelFromPrevious: 1
}
const progression1: Progression = new Progression(progression1Props)

console.log(progression1.getProgression())
console.log(level1.getLevel())
console.log(user1.getUser())
console.log(category1.getCategory())
console.log(skill1.getSkill());
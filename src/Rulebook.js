

//merge Rule and Chapter to one data structure?
class Rule {
    constructor(id, description) {
        this.id = id
        this.description = description
        this.subrules = []
    }
}

class Chapter {
    constructor(name) {
        this.name = name
        this.rules = new Map
    }

    addRule(id, description) {
        this.rules.set(id, description)
    }
}

class Rulebook {

    constructor() {
        this.chapters = new Map
    }

    addChapter(id, name) {
        this.chapters.set(id, new Chapter(name))
        //this.chapters[id] = new Chapter(name)
    }

    addRule(id, description, chapterId) {
        this.chapters.get(chapterId).addRule(id, description)
        //this.chapters[chapterId].addRule(id, description)
    }

}

export default Rulebook
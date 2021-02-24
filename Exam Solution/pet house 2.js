function solveClasses() {
    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }
        addComment(comment) {
            if (this.comments.includes(comment)) {
                throw new Error('This comment is already added!');
            } else {
                this.comments.push(comment);
                return 'Comment is added.';
            }
        }
        feed() {
            return `${this.name} is fed`;
        }
        toString() {
            let result = [`Here is ${this.owner}'s pet ${this.name}.`];
            if (this.comments.length > 0) {
                let cString = 'Special requirements: ';
                let cArr = [];
                for (let i = 0; i < this.comments.length; i++) {
                    cArr.push(this.comments[i]);
                }
                cString += cArr.join(', ');
                result.push(cString);
            }
            return result.join('\n');
        }
    }
    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }
        feed() {
            return `${this.name} is fed, happy and purring.`;
        }
        toString() {
            let result = [`Here is ${this.owner}'s pet ${this.name}.`];
            if (this.comments.length > 0) {
                let cString = 'Special requirements: ';
                let cArr = [];
                for (let i = 0; i < this.comments.length; i++) {
                    cArr.push(this.comments[i]);
                }
                cString += cArr.join(', ');
                result.push(cString);
            }

            if (this.scratching === true) {
                result.push(`Main information:\n${this.name} is a cat with ${this.insideHabits}, but beware of scratches.`);
            } else {
                result.push(`Main information: ${this.name} is a cat with ${this.insideHabits}`);
            }
            return result.join('\n');
        }

    }
    class Dog extends Pet{
        constructor(owner, name, runningNeeds, trainability){
            super(owner,name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }
        feed(){
            return `${this.name} is fed, happy and wagging tail.`;
        }
        toString(){
            let result = [`Here is ${this.owner}'s pet ${this.name}.`];
            if (this.comments.length > 0) {
                let cString = 'Special requirements: ';
                let cArr = [];
                for (let i = 0; i < this.comments.length; i++) {
                    cArr.push(this.comments[i]);
                }
                cString += cArr.join(', ');
                result.push(cString);
            }
            result.push(`Main information:\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`)
            return result.join('\n');
        }
    }

    return { Pet, Cat, Dog}

}
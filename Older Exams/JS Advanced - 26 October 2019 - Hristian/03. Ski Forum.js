class Forum {
    constructor() {
        this.id = 1;
        this.users = [];
        this.questions = [];
        this.currentLoggedUsers = []
    }

    register(username, password, repeatPassword, email) {
        if (!(username && password && repeatPassword && email)) {
            throw new Error('Input can not be empty')
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match')
        }

        if (this.users.find(x => x.username === username || x.email === email)) {
            throw new Error('This user already exists!')
        }
        this.users.push({
            username,
            email,
            password
        })

        return `${username} with ${email} was registered successfully!`
    }

    login(username, password) {
        //What if the pass is wrong
        if(!this.users.find(x => x.username === username && x.password === password)) {
            throw new Error('There is no such user')
        }

        if(this.users.find(x => x.username === username && x.password === password)) {
            this.currentLoggedUsers.push(username);
            return 'Hello! You have logged in successfully'
        }
    }

    logout(username, password) {
        if(!this.users.find(x => x.username === username)) {
            throw new Error('There is no such user')
        }

        if(this.users.find(x => x.username === username && x.password === password)) {
            return 'You have logged out successfully'
        }

        this.currentLoggedUsers = this.currentLoggedUsers.filter(x => x !== username)
    }

    postQuestion(username, question) {
        if(!this.users.find(x => x.username === username) || !this.currentLoggedUsers.includes(username)) {
            throw new Error('You should be logged in to post questions')
        }

        if (!question) {
            throw new Error('Invalid question')
        }

        this.questions.push({
            id: this.id,
            question,
            postedBy: username,
            answers: []
        })
        this.id++;
        return 'Your question has been posted successfully'
    }

    postAnswer(username, questionId, answer) {
        if(!this.users.find(x => x.username === username || !this.currentLoggedUsers.includes(username))) {
            throw new Error ('You should be logged in to post answers')
        }

        if(!answer) {
            throw new Error('Invalid answer')
        }

        if(questionId >= this.id || questionId < 1) {
            throw new Error('There is no such question')
        }

        let questionRef = this.questions.find(question => question.id === questionId);
        questionRef.answers.push({
            answeredBy: username,
            answer
        })

        return 'Your answer has been posted successfully'
    }

    showQuestions(){
        let temp = this.questions

        return this.questions.reduce((acc, x, i) => {
            return acc += `Question ${x.id} by ${x.postedBy}: ${x.question}`
            + x.answers.reduce((answerAcc, answer) => {
                return answerAcc += `\n---${answer.answeredBy}: ${answer.answer}`
                }, '') + '\n'
        }, '').trim()
    }
}
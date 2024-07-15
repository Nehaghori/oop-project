import inquirer from "inquirer"
import chalk from "chalk"

class Person {
    private _personality: string;
    constructor(){
        this._personalitypersonality = 'Mystery';
    }
}

userInput(input:string) {
    if(input.includes('talk to other about yourself openly')) {
        this._personality = 'talk happily';
    } else if (input.includes ('keep your word to yourself')) {
        this._personality = 'talk rude';
    }


get personality() ;{
    return this._personality
}
}

class Main{
    public async main() {
        const ans = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            m7: chalk.yellow ('tell your behavior?'),
            choices: [
                '1: talk to others about myself.',
                '2: keep quite and dont ask questions.'
            ]

        })
        let myPerson = new Person()
        myPerson.userInput(ans.choice);

        console.log('you are ${myPerson.personality}')
    }
}

const myObject = new Main();
myObject.main();
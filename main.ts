#! /usr/bin/env node

import inquirer from "inquirer";
let todos=[];
let condition=true;

while(condition){
    const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'todo', 
          message: "What do you want to add to your to-dos?"
        },
        {
          type: 'confirm',
          name: 'addMore', 
          message: "Do you want to add more?",
          default: false
        }
      ]);
    
      todos.push(answers.todo);
      condition = answers.addMore;
      console.log(todos);
}
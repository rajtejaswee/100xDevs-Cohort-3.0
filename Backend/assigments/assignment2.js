const { Command } = require('commander')
const fs = require('fs')

const program = new Command()
const TODO_FILE = 'todo.json';

program
    .command('add <task>')
    .description('Add a new todo')
    .action((task) => {
        const data = fs.readFileSync('todo.json', 'utf-8')
        const todos = JSON.parse(data);

        const newtodo = {
            id: todos.length + 1,
            task: task,
            done: false,
        };
        todos.push(newtodo);
        fs.writeFileSync('todo.json', JSON.stringify(todos, null, 2));

        console.log(`✅ Added: "${task}"`)
    }
);

//utility functions
function ensureTodoFileExists() {
    if (!fs.existsSync(TODO_FILE)) {
      fs.writeFileSync(TODO_FILE, JSON.stringify([], null, 2)); 
    }
} 
function getTodos() {
    ensureTodoFileExists(); 
    const data = fs.readFileSync(TODO_FILE, 'utf8');
    return JSON.parse(data);
}
function saveTodos(todos) {
    fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
  }



program
    .command('delete <id>')
    .description('Delete the todo by id')
    .action((id) => {
    
        const todos = getTodos();
        const updatedTodos = todos.filter(todo => todo.id !== parseInt(id)); 

        if (todos.length === updatedTodos.length) {
            console.log(`❌ No todo found with ID ${id}`);
          } else {
            saveTodos(updatedTodos); 
            console.log(`✅ Todo with ID ${id} deleted.`);
          }
    });

    program
  .command('done <id>')
  .description('Mark a todo as done by ID')
  .action((id) => {
    const todos = getTodos(); 
    const todo = todos.find(todo => todo.id === parseInt(id)); 

    if (!todo) {
      console.log(`❌ No todo found with ID ${id}`);
    } else {
      todo.done = true; 
      saveTodos(todos); 
      console.log(`✅ Todo with ID ${id} marked as done.`);
    }
  });
program.parse();
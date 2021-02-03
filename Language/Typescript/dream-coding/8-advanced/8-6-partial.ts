export {}

type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
}

function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return {...todo, ...fieldsToUpdate};
}

const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high',
}

const updated = updateTodo(todo, {priority: 'low'});
console.log(updated);

// 이렇게 해도 에러는 나지 않음.
// let partialTodo : ToDo;
// const partialTodoObj = {
//     title: 'learn TypeScript',
//     description: 'study hard',
//     label: 'study',
//     priority: 'high' as 'high',
//     aa: 33
// };

// partialTodo = partialTodoObj
// const updated = updateTodo(todo, partialTodo);
// console.log(updated);
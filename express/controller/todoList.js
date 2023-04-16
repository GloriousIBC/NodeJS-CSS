let todoList = []

const getTodoList = (req, res) => {
    res.status(200).send("GET METHOD")
}

const createTodoList = (req, res) => {
    //console.log(req.body)
    const newTodo = {
        id: uniqueId(),
        task: req.body.task
    }
    //res.send("POST METHOD")
    todoList.push(mewTodo)
    res.status(201).send(newTodo)
} 

const updateTodoList = (req, res) => {
    //console.log(req.body)
    //res.send("PUT METHOD")
    const targetId = String(req.params.id)
    const targetIdx = todoList.findIndex(todo => todo.id === targetId)
    todoList[targetIdx] = {
        id: targetId,
        task: req.body.Todotask,
    }
    res.status(200).send({ message: "Updating is success"})
}

const deleteTodoList = (req, res) => {
    //res.send("DELETE METHOD")
    const targetId = String(req.params.id)
    todoList = todoList.filter(todo => todo.id !== targetId)
    res.status(204).send()
}

module.exports = {
    createTodoList,
    getTodoList,
    updateTodoList,
    deleteTodoList
}
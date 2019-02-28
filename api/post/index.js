const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const todoItem = await ctx.request.body
 
  const item = await insertTodo(todoItem)
  
  ctx.body = item
})

async function insertTodo(item) {
  try {
    

    const itemData = await pool.query(`INSERT INTO todoList 
    (todoItem, todoDateAdded, todoStatus, todoDueBy)
    VALUES ("${item.todoItem}", NOW(), ${item.todoStatus}, "${item.todoDueBy}")`)
    return itemData
    
  } catch (error) {
    console.log(error)
  }
}

 module.exports = app.callback()
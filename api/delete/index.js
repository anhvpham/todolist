const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const todoItem = await ctx.request.body
 
  const item = await deleteTodo(todoItem)
  
  ctx.body = item
})

async function deleteTodo(item) {
  try {
    

    const itemData = await pool.query (`DELETE FROM todoList 
    WHERE todoId=${item.todoId}`)
    return itemData
    
  } catch (error) {
    console.log(error)
  }
}

 module.exports = app.callback()

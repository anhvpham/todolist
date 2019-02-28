const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {

  const todoItem = await ctx.request.body
 
  const item = await updateStatus(todoItem)
  
  ctx.body = item
})

async function updateStatus(item) {
  try {
    

    const itemData = await pool.query(`UPDATE todoList 
    SET todoStatus=${item.todoStatus}
    WHERE todoId=${item.todoId}`)

    return itemData
    
  } catch (error) {
    console.log(error)
  }
}

 module.exports = app.callback()
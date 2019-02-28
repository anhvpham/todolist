use todos;
CREATE TABLE todoList (
  todoID       INT  AUTO_INCREMENT,
  todoItem 		VARCHAR(250) UNIQUE NOT NULL,
  todoDateAdded DATE NOT NULL,
  todoStatus	BOOLEAN NOT NULL,
  todoDueBy		DATE,

  PRIMARY KEY  (todoID)

);
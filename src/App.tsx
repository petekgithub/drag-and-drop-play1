
import React, { useState } from "react"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import './App.css';


// items
const listItems = [
  {
    id: "1",
    name: "Workout"

  },
  {
    id: "2",
    name: "Eat Popcorn"

  },
  {
    id: "3",
    name: "Watch: Big Lebowski"

  }, {
    id: "4",
    name: "Catch the Bee"

  }
]

// styling
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  padding: 10,
  margin: `0 50px 15px 50px` ,
  background: isDragging ? "#fb8500" : "#ffdab9",
  color: isDragging ? "white" : "black",
  border: `1px solid black`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle
})



function App() {
  //state for todos
  const [todo, setTodo] = useState(listItems);

  // whole process here
  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result
    if(!destination) return

    //shallow array of this items
    const items = Array.from(todo)
    // variable newOrder
    // splice it and hen replace it in neworder 
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder )

    // setting that new items in state 
    setTodo(items)

  }   

// inside return, draganddrop library use in
  return (
    <div className="App">
      <h1>Drag and Drop</h1>
      
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='todo'>
            {(provided) => (
              <div className='todo' {...provided.droppableProps} ref={provided.innerRef}>
                  {todo.map(({id, name}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                          >
                            {name}
                          </div>
                        )}
                      </Draggable>
                    )
                  } )}
              </div> 
            )}
          </Droppable>

      </DragDropContext>

    </div>
  );
}

export default App;

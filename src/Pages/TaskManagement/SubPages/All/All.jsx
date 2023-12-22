import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


const tasks = [
    {
        task: 1
    },
    {
        task: 2
    },
    {
        task: 3
    },
    {
        task: 4
    }
]




const All = () => {



    const [todoTasks, setTodoTasks] = useState(tasks)

  const handleDrag = ( source, destination, type ) => {
    console.log("Draged");
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <div className="py-12 grid grid-cols-3 gap-16">
          {/* To Do Box */}
          <Droppable droppableId="todo" type="group">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="w-full border-4 border-[#3498db] py-5 px-8"
              >
                {/* Title */}
                <h3 className="text-2xl text-left uppercase font-bold">
                  To Do
                </h3>
                <div className="mt-6 space-y-4">
                  {todoTasks.map( (task, index) => (
                  <Draggable draggableId={`task-${index}`} index={index} key={index}>
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="py-3 px-4 bg-yellow-400 text-white rounded-md"
                      >
                        <h4 className="text-lg font-bold text-left">Task {task.task}</h4>
                      </div>
                    )}
                  </Draggable>
                  )
                  )
                  }
                  
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* In Progress Box */}
          <div className="w-full border-4 border-[#3498db] py-5 px-8">
            {/* Title */}
            <h3 className="text-2xl text-left uppercase font-bold">
              In Progress
            </h3>
            <div className="mt-6 space-y-4">
              <div className="py-3 px-4 bg-yellow-400 text-white rounded-md">
                <h4 className="text-lg font-bold text-left">Task 1</h4>
              </div>
              <div className="py-3 px-4 bg-yellow-400 text-white rounded-md">
                <h4 className="text-lg font-bold text-left">Task 1</h4>
              </div>
            </div>
          </div>

          {/* Complete Box */}
          <div className="w-full border-4 border-[#3498db] py-5 px-8">
            {/* Title */}
            <h3 className="text-2xl text-left uppercase font-bold">Complete</h3>
            <div className="mt-6 space-y-4">
              <div className="py-3 px-4 bg-yellow-400 text-white rounded-md">
                <h4 className="text-lg font-bold text-left">Task 1</h4>
              </div>
              <div className="py-3 px-4 bg-yellow-400 text-white rounded-md">
                <h4 className="text-lg font-bold text-left">Task 1</h4>
              </div>
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default All;

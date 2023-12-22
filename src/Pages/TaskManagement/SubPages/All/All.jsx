import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const toDoData = [
  {
    task: 1,
  },
  {
    task: 2,
  },
  {
    task: 3,
  },
  {
    task: 4,
  },
];
const inProgressData = [
  {
    task: 1,
  },
  {
    task: 2,
  },
];
const completeData = [
  {
    task: 1,
  },
  {
    task: 2,
  },
  {
    task: 3,
  },
  {
    task: 4,
  },
  {
    task: 5
  }
];

const All = () => {
  const [todoTasks, setTodoTasks] = useState(toDoData);
  const [inProgressTasks, setInProgressTasks] = useState(inProgressData);
  const [completeTasks, setCompleteTasks] = useState(completeData);

  const handleDrag = (results) => {

    const { source, destination, type } = results;


    // Never Droped
    if (!destination) return;


    // Dropped in the same Place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) return;



    // Dropped in the same box but Different place TODO
    if (type === "todo" && source.droppableId === destination.droppableId) {
      const reorderedToDoTasks = [...todoTasks];

      const toDoTaskSourceIndex = source.index;
      const toDoTaskDestinatonIndex = destination.index;

      const [kickOutToDoTask] = reorderedToDoTasks.splice(toDoTaskSourceIndex, 1);
      reorderedToDoTasks.splice(toDoTaskDestinatonIndex, 0, kickOutToDoTask);

      return setTodoTasks(reorderedToDoTasks)
    }




    // Dropped in the same box but Different place INPROGRESS
    if (type === "inprogress" && source.droppableId === destination.droppableId) {
      const reorderedToDoTasks = [...inProgressTasks];

      const toDoTaskSourceIndex = source.index;
      const toDoTaskDestinatonIndex = destination.index;

      const [kickOutToDoTask] = reorderedToDoTasks.splice(toDoTaskSourceIndex, 1);
      reorderedToDoTasks.splice(toDoTaskDestinatonIndex, 0, kickOutToDoTask);

      return setInProgressTasks(reorderedToDoTasks)
    }




    // Dropped in the same box but Different place COMPLETE
    if (type === "complete" && source.droppableId === destination.droppableId) {
      const reorderedToDoTasks = [...completeTasks];

      const toDoTaskSourceIndex = source.index;
      const toDoTaskDestinatonIndex = destination.index;

      const [kickOutToDoTask] = reorderedToDoTasks.splice(toDoTaskSourceIndex, 1);
      reorderedToDoTasks.splice(toDoTaskDestinatonIndex, 0, kickOutToDoTask);

      return setCompleteTasks(reorderedToDoTasks)
    }



    // Dropped in the different box
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <div className="py-12 grid grid-cols-3 gap-16">
          {/* To Do Box */}
          <Droppable droppableId="todo" type="inprogress">
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
                  {todoTasks.map((task, index) => (
                    <Draggable
                      draggableId={`toDoTask-${index}`}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="py-3 px-4 bg-yellow-400 text-white rounded-md"
                        >
                          <h4 className="text-lg font-bold text-left">
                            Task {task?.task}
                          </h4>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* In Progress Box */}
          <Droppable droppableId="inprogress" type="inprogress">
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
                  {inProgressTasks.map((task, index) => (
                    <Draggable
                      draggableId={`inProgressTask-${index}`}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="py-3 px-4 bg-yellow-400 text-white rounded-md"
                        >
                          <h4 className="text-lg font-bold text-left">
                            Task {task?.task}
                          </h4>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>

          {/* Complete Box */}
          <Droppable droppableId="complete" type="complete">
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
                  {completeTasks.map((task, index) => (
                    <Draggable
                      draggableId={`completeTask-${index}`}
                      index={index}
                      key={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="py-3 px-4 bg-yellow-400 text-white rounded-md"
                        >
                          <h4 className="text-lg font-bold text-left">
                            Task {task?.task}
                          </h4>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default All;

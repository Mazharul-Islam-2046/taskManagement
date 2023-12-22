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
    task: 5,
  },
];

const All = () => {
  const [todoTasks, setTodoTasks] = useState(toDoData);
  const [inProgressTasks, setInProgressTasks] = useState(inProgressData);
  const [completeTasks, setCompleteTasks] = useState(completeData);

  const handleDrag = (results) => {
    const { source, destination } = results;

    // Never Droped
    if (!destination) return;

    // Dropped in the same Place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // Dropped in the same box but Different place TODO
    if (
      source.droppableId === "todo" &&
      source.droppableId === destination.droppableId
    ) {
      const reorderedToDoTasks = [...todoTasks];

      const toDoTaskSourceIndex = source?.index;
      const toDoTaskDestinatonIndex = destination?.index;

      const [kickOutToDoTask] = reorderedToDoTasks.splice(
        toDoTaskSourceIndex,
        1
      );
      reorderedToDoTasks.splice(toDoTaskDestinatonIndex, 0, kickOutToDoTask);

      return setTodoTasks(reorderedToDoTasks);
    }

    // Dropped in the same box but Different place INPROGRESS
    if (
      source.droppableId === "inprogress" &&
      source.droppableId === destination.droppableId
    ) {
      const reorderedInProgressTasks = [...inProgressTasks];

      const inProgressTaskSourceIndex = source?.index;
      const inProgressTaskDestinatonIndex = destination?.index;

      const [kickOutInProgressTask] = reorderedInProgressTasks.splice(
        inProgressTaskSourceIndex,
        1
      );
      reorderedInProgressTasks.splice(
        inProgressTaskDestinatonIndex,
        0,
        kickOutInProgressTask
      );

      return setInProgressTasks(reorderedInProgressTasks);
    }

    // Dropped in the same box but Different place COMPLETE
    if (
      source.droppableId === "complete" &&
      source.droppableId === destination.droppableId
    ) {
      const reorderedCompleteTasks = [...completeTasks];

      const completeTaskSourceIndex = source.index;
      const completeTaskDestinatonIndex = destination.index;

      const [kickOutCompleteTask] = reorderedCompleteTasks.splice(
        completeTaskSourceIndex,
        1
      );
      reorderedCompleteTasks.splice(
        completeTaskDestinatonIndex,
        0,
        kickOutCompleteTask
      );

      return setCompleteTasks(reorderedCompleteTasks);
    }

    // Dropped in the different box from TODO
    if (
      source.droppableId === "todo" &&
      source?.droppableId !== destination?.droppableId
    ) {
      const toDoTaskSourceIndex = source?.index;
      const toDoTaskDestinatonIndex = destination?.index;
      const toDoTaskDestinationID = destination?.droppableId;
      const reorderedTodo = [...todoTasks];
      console.log(toDoTaskSourceIndex, toDoTaskDestinatonIndex, toDoTaskDestinationID);
      if (toDoTaskDestinationID === "inprogress") {
        const reorderedInprogress = [...inProgressTasks]
        const [kickOutTodoTask] = reorderedTodo.splice(
            toDoTaskSourceIndex,
            1
          );
          reorderedInprogress.splice(
            toDoTaskDestinatonIndex,
            0,
            kickOutTodoTask
          );
    
          setInProgressTasks(reorderedInprogress);
          setTodoTasks(reorderedTodo)
          return
      }
      const reorderedComplete = [...completeTasks]
        const [kickOutTodoTask] = reorderedTodo.splice(
            toDoTaskSourceIndex,
            1
          );
          reorderedComplete.splice(
            toDoTaskDestinatonIndex,
            0,
            kickOutTodoTask
          );

    
          setCompleteTasks(reorderedComplete);
          setTodoTasks(reorderedTodo)
          return
    }

    
    // Dropped in the different box from INPROGRESS
    if (
        source.droppableId === "inprogress" &&
        source?.droppableId !== destination?.droppableId
      ) {
        const inProgressTaskSourceIndex = source?.index;
        const inProgressTaskDestinatonIndex = destination?.index;
        const inProgressTaskDestinationID = destination?.droppableId;
        const reorderedInProgressTasks = [...inProgressTasks];
        console.log(inProgressTaskSourceIndex, inProgressTaskDestinatonIndex, inProgressTaskDestinationID);
        if (inProgressTaskDestinationID === "todo") {
          const reorderedToDoTasks = [...todoTasks]
          const [kickOutInProgressTask] = reorderedInProgressTasks.splice(
            inProgressTaskSourceIndex,
            1
          );
          reorderedToDoTasks.splice(
            inProgressTaskDestinatonIndex,
            0,
            kickOutInProgressTask
          )
          setTodoTasks(reorderedToDoTasks)
          setInProgressTasks(reorderedInProgressTasks)
            return
        }
        const reorderedComplete = [...completeTasks]
          const [kickOutInProgressTask] = reorderedInProgressTasks.splice(
              inProgressTaskSourceIndex,
              1
            );
            reorderedComplete.splice(
              inProgressTaskDestinatonIndex,
              0,
              kickOutInProgressTask
            );
  
      
            setCompleteTasks(reorderedComplete);
            setInProgressTasks(reorderedInProgressTasks)
            return
      }


      
    // Dropped in the different box from Complete
    if (
        source.droppableId === "complete" &&
        source?.droppableId !== destination?.droppableId
      ) {
        const completeTaskSourceIndex = source?.index;
        const completeTaskDestinatonIndex = destination?.index;
        const completeTaskDestinationID = destination?.droppableId;
        const reorderedComplete = [...completeTasks];
        console.log(completeTaskSourceIndex, completeTaskDestinatonIndex, completeTaskDestinationID);
        if (completeTaskDestinationID === "inprogress") {
          const reorderedInprogress = [...inProgressTasks]
          const [kickOutCompleteTask] = reorderedComplete.splice(
              completeTaskSourceIndex,
              1
            );
            reorderedInprogress.splice(
              completeTaskDestinatonIndex,
              0,
              kickOutCompleteTask
            );
      
            setInProgressTasks(reorderedInprogress);
            setCompleteTasks(reorderedComplete)
            return
        }
        const reorderedTodo = [...todoTasks]
          const [kickOutCompleteTask] = reorderedComplete.splice(
              completeTaskSourceIndex,
              1
            );
            reorderedTodo.splice(
              completeTaskDestinatonIndex,
              0,
              kickOutCompleteTask
            );
  
      
            setTodoTasks(reorderedTodo);
            setCompleteTasks(reorderedComplete)
            return
      }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDrag}>
        <div className="py-12 grid grid-cols-3 gap-16">
          {/* To Do Box */}
          <Droppable droppableId="todo" type="status">
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
          <Droppable droppableId="inprogress" type="status">
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
          <Droppable droppableId="complete" type="status">
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

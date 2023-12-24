import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";

const All = () => {
  const {
    inProgressData,
    toDoData,
    completeData,
    setCompleteData,
    setInProgressData,
    setTodoData,
    reFetch,
    setReFetch
  } = useContext(AuthContext);


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
      const reorderedToDoTasks = [...toDoData];

      const toDoTaskSourceIndex = source?.index;
      const toDoTaskDestinatonIndex = destination?.index;

      const [kickOutToDoTask] = reorderedToDoTasks.splice(
        toDoTaskSourceIndex,
        1
      );
      reorderedToDoTasks.splice(toDoTaskDestinatonIndex, 0, kickOutToDoTask);

      setTodoData(reorderedToDoTasks);
      return;
    }

    // Dropped in the same box but Different place INPROGRESS
    if (
      source.droppableId === "inprogress" &&
      source.droppableId === destination.droppableId
    ) {
      const reorderedInProgressTasks = [...inProgressData];

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

      setInProgressData(reorderedInProgressTasks);

      return;
    }

    // Dropped in the same box but Different place COMPLETE
    if (
      source.droppableId === "complete" &&
      source.droppableId === destination.droppableId
    ) {
      const reorderedCompleteTasks = [...completeData];

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

      setCompleteData(reorderedCompleteTasks);

      return;
    }

    // Dropped in the different box from TODO
    if (
      source.droppableId === "todo" &&
      source?.droppableId !== destination?.droppableId
    ) {
      const toDoTaskSourceIndex = source?.index;
      const toDoTaskDestinatonIndex = destination?.index;
      const toDoTaskDestinationID = destination?.droppableId;
      const reorderedTodo = [...toDoData];
      
      if (toDoTaskDestinationID === "inprogress") {
        const status = "inprogress";
        const reorderedInprogress = [...inProgressData];
        const [kickOutTodoTask] = reorderedTodo.splice(toDoTaskSourceIndex, 1);
        reorderedInprogress.splice(toDoTaskDestinatonIndex, 0, kickOutTodoTask);
        fetch(`http://localhost:5000/tasks/${kickOutTodoTask?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        setInProgressData(reorderedInprogress);
        setTodoData(reorderedTodo);
        return;
      }
      const reorderedComplete = [...completeData];
      const [kickOutTodoTask] = reorderedTodo.splice(toDoTaskSourceIndex, 1);
      const status = "complete";
      reorderedComplete.splice(toDoTaskDestinatonIndex, 0, kickOutTodoTask);
      fetch(`http://localhost:5000/tasks/${kickOutTodoTask?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      setCompleteData(reorderedComplete);
      setTodoData(reorderedTodo);
      return;
    }

    // Dropped in the different box from INPROGRESS
    if (
      source.droppableId === "inprogress" &&
      source?.droppableId !== destination?.droppableId
    ) {
      const inProgressTaskSourceIndex = source?.index;
      const inProgressTaskDestinatonIndex = destination?.index;
      const inProgressTaskDestinationID = destination?.droppableId;
      const reorderedInProgressTasks = [...inProgressData];
      
      if (inProgressTaskDestinationID === "todo") {
        const reorderedToDoTasks = [...toDoData];
        const status = "todo";
        const [kickOutInProgressTask] = reorderedInProgressTasks.splice(
          inProgressTaskSourceIndex,
          1
        );
        reorderedToDoTasks.splice(
          inProgressTaskDestinatonIndex,
          0,
          kickOutInProgressTask
        );
        fetch(`http://localhost:5000/tasks/${kickOutInProgressTask?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
        setTodoData(reorderedToDoTasks);
        setInProgressData(reorderedInProgressTasks);
        return;
      }
      const reorderedComplete = [...completeData];
      const status = "complete";
      const [kickOutInProgressTask] = reorderedInProgressTasks.splice(
        inProgressTaskSourceIndex,
        1
      );
      reorderedComplete.splice(
        inProgressTaskDestinatonIndex,
        0,
        kickOutInProgressTask
      );
      fetch(`http://localhost:5000/tasks/${kickOutInProgressTask?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });

      setCompleteData(reorderedComplete);
      setInProgressData(reorderedInProgressTasks);
      return;
    }

    // Dropped in the different box from Complete
    if (
      source.droppableId === "complete" &&
      source?.droppableId !== destination?.droppableId
    ) {
      const completeTaskSourceIndex = source?.index;
      const completeTaskDestinatonIndex = destination?.index;
      const completeTaskDestinationID = destination?.droppableId;
      const reorderedComplete = [...completeData];
      
      if (completeTaskDestinationID === "inprogress") {
        const reorderedInprogress = [...inProgressData];

        const status = "inprogress";
        const [kickOutCompleteTask] = reorderedComplete.splice(
          completeTaskSourceIndex,
          1
        );
        reorderedInprogress.splice(
          completeTaskDestinatonIndex,
          0,
          kickOutCompleteTask
        );

        fetch(`http://localhost:5000/tasks/${kickOutCompleteTask?._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });

        setInProgressData(reorderedInprogress);
        setCompleteData(reorderedComplete);
        return;
      }
      const reorderedTodo = [...toDoData];
      const status = "todo"
      const [kickOutCompleteTask] = reorderedComplete.splice(
        completeTaskSourceIndex,
        1
      );
      reorderedTodo.splice(completeTaskDestinatonIndex, 0, kickOutCompleteTask);


      fetch(`http://localhost:5000/tasks/${kickOutCompleteTask?._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      setTodoData(reorderedTodo);
      setCompleteData(reorderedComplete);
      return;
    }
  };



  


  // Handle Delete

  const handleDelete = (id) => {
      console.log(id);
      fetch(`http://localhost:5000/deleteTask/${id}`,
      {method: "DELETE"}
      ).then((res) => res.json())
      .then((data) => {
        data && setReFetch(!reFetch)
      }).catch((error) => {
        console.log(error);
      })
  }




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
                {toDoData.length ? (
                  <div className="mt-6 space-y-4">
                    {toDoData.map((task, index) => (
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
                            className="py-4 px-4 bg-yellow-400 text-white rounded-md"
                          >
                            <h4 className="text-lg  text-gray-800 mb-1 font-bold text-left">
                              Task {task?.title}
                            </h4>
                            <p className="text-left text-sm mb-4">
                              {task?.description.slice(0, 80)}...
                            </p>
                            <div className="flex justify-between pr-2">
                              <div className="border-2 border-[#3498db] py-1 px-4 rounded-full font-bold text-sm text-gray-900">
                                <h4>ToDo</h4>
                              </div>
                              <button onClick={(() => handleDelete(task?._id))} className="text-xl text-[#ff7869]">
                                <MdDelete />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                ) : (
                  <div className="flex items-center font-bold mt-2">
                    <h1>No Task Available ...</h1>
                  </div>
                )}
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
                  In Progress
                </h3>
                {inProgressData.length ? (
                  <div className="mt-6 space-y-4">
                    {inProgressData.map((task, index) => (
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
                            className="py-4 px-4 bg-yellow-400 text-white rounded-md"
                          >
                            <h4 className="text-lg  text-gray-800 mb-1 font-bold text-left">
                              Task {task?.title}
                            </h4>
                            <p className="text-left text-sm mb-4">
                              {task?.description.slice(0, 80)}...
                            </p>
                            <div className="flex justify-between pr-2">
                              <div className="border-2 border-[#3498db] py-1 px-4 rounded-full font-bold text-sm text-gray-900">
                                <h4>In Progress</h4>
                              </div>
                              <button onClick={(() => handleDelete(task?._id))} className="text-xl text-[#ff7869]">
                                <MdDelete />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                ) : (
                  <div className="flex items-center font-bold mt-2">
                    <h1>No Task Available ...</h1>
                  </div>
                )}
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
                  Complete
                </h3>
                {completeData?.length ? (
                  <div className="mt-6 space-y-4">
                    {completeData.map((task, index) => (
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
                            className="py-4 px-4 bg-yellow-400 text-white rounded-md"
                          >
                            <h4 className="text-lg  text-gray-800 mb-1 font-bold text-left">
                              Task {task?.title}
                            </h4>
                            <p className="text-left text-sm mb-4">
                              {task?.description.slice(0, 80)}...
                            </p>
                            <div className="flex justify-between pr-2">
                              <div className="border-2 border-[#3498db] py-1 px-4 rounded-full font-bold text-sm text-gray-900">
                                <h4>Complete</h4>
                              </div>
                              <button onClick={(()=> handleDelete(task?._id))} className="text-xl text-[#ff7869]">
                                <MdDelete />
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </div>
                ) : (
                  <div className="flex items-center font-bold mt-2">
                    <h1>No Task Available ...</h1>
                  </div>
                )}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
};

export default All;

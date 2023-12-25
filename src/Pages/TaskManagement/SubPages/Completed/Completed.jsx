import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { FaEdit } from "react-icons/fa";

const Completed = () => {
  const { reFetch, setReFetch, completeData } = useContext(AuthContext);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://task-management-server-topaz.vercel.app/deleteTask/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        data && setReFetch(!reFetch);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const handleEdit = () => {
    console.log("edit");
  }
  return (
    <div className="mt-5 md:mt-14 py-16">
      {completeData.length ? (
        completeData.map((task, index) => (
          <div
            key={index}
            className="py-6 px-8 bg-yellow-400 text-white rounded-lg mt-8"
          >
            <h4 className="text-2xl  text-gray-800 mb-3 font-bold text-left">
              Task {task?.title}{" "}
              <span className="text-xs rounded-full py-[2px] px-2 border-2 border-gray-800">
                {task?.priority}
              </span>
            </h4>
            <p className="text-left mb-8">{task?.description}</p>
            <div className="flex justify-between pr-2">
              <div className="border-2 border-[#3498db] py-1 px-4 rounded-full font-bold text-sm text-gray-900">
                <h4>Complete</h4>
              </div>
              <div className="flex gap-6">
                <button
                  onClick={() => handleDelete(task?._id)}
                  className="text-xl text-[#ff7869] "
                >
                  <MdDelete />
                </button>
                <button onClick={handleEdit} className="text-xl text-[#ff7869] ">
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[40vh] max-h-[550px] flex justify-center items-center">
          <h3 className="text-3xl font-bold">No Data Available....</h3>
        </div>
      )}
    </div>
  );
};

export default Completed;

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//   Modal.setAppElement('#yourAppElement');

const TaskManagement = () => {
  const { reFetch, setReFetch, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleAddTask = (data) => {
    const title = data?.title;
    const description = data?.description;
    const priority = data?.priority;
    fetch("https://task-management-server-topaz.vercel.app/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
        user_email: user.email,
        status: "todo",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setReFetch(!reFetch);
        // console.log(reFetch);
        data && Swal.fire("Task Added Successfully");
        closeModal();
        reset();
      });
  };

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div>
      <div className="py-10 flex justify-between px-5 md:px-24 border-b-4 border-b-[#2ecc71] mb-6">
        <h2 className="text-2xl md:text-5xl font-bold text-left text-[#2ecc71]">
          Dashboard
        </h2>
        <button
          onClick={handleLogOut}
          className="py-2 px-4 text-sm md:text-base rounded-full border-2 border-[#2ecc71] hover:bg-[#2ecc71] font-semibold"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 px-5 md:px-24">
        {/* Tabs */}
        <div data-aos="fade-right" className="flex flex-wrap gap-4">
          <NavLink
            to="/taskmanagement/all"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            All
          </NavLink>
          <NavLink
            to="todo"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            To Do
          </NavLink>
          <NavLink
            to="/taskmanagement/ongoing"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            On Going
          </NavLink>
          <NavLink
            to="/taskmanagement/Complete"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            Completed
          </NavLink>
        </div>

        {/* Add Task */}
        <button
          data-aos="fade-left"
          onClick={openModal}
          className="flex items-center justify-center py-1 px-6 mb-1 rounded-full border-2 border-[#2ecc71] gap-2 hover:bg-[#2ecc71]"
        >
          <IoMdAdd /> Add Task
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h3 className="text-3xl font-semibold text-center uppercase mb-6">
            Add Task
          </h3>
          <form
            onSubmit={handleSubmit(handleAddTask)}
            className="flex flex-col md:w-[40vw] py-5 px-10"
          >
            <label htmlFor="">Title</label>
            <input
              {...register("title", {
                required: true,
              })}
              className="mb-8 bg-transparent border-2 border-[#2ecc71]"
              type="text"
              name="title"
              id=""
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Title is required</p>
            )}

            <label>Description</label>
            <input
              {...register("description", {
                required: true,
              })}
              className="mb-8 bg-transparent border-2 border-[#2ecc71]"
              type="text"
              name="description"
              id=""
            />

            {errors.email?.type === "required" && (
              <p className="text-red-600">Description is required</p>
            )}

            <label htmlFor="">Priority(High, Moderate, Low)</label>
            <select
              {...register("priority", {
                required: true,
              })}
              className="mb-8 bg-transparent border-2 border-[#2ecc71]"
              type=""
              name="priority"
              id=""
            >
              <option value="High">High</option>
              <option value="Moderate">Moderate</option>
              <option value="Low">Low</option>
            </select>

            {errors.email?.type === "required" && (
              <p className="text-red-600">Priority is required</p>
            )}

            <input
              className="cursor-pointer bg-[#2ecc71] py-3 text-white font-bold text-lg hover:bg-gray-800"
              type="submit"
              value="Create"
            />
          </form>
        </Modal>
      </div>
      <div className="px-5 md:px-24">
        <Outlet />
      </div>
    </div>
  );
};

export default TaskManagement;

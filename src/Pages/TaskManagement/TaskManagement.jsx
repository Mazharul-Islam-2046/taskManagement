import { NavLink, Outlet } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const TaskManagement = () => {
  return (
    <div>
      <div className="py-10 px-24 border-b-4 border-b-[#2ecc71] mb-6">
        <h2 className="text-5xl font-bold text-left text-[#2ecc71]">
          Dashboard
        </h2>
      </div>
      <div className="flex justify-between items-center px-24">
        {/* Tabs */}
        <div className="space-x-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            All
          </NavLink>
          <NavLink
            to="taskmanagement/todo"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            To Do
          </NavLink>
          <NavLink
            to="taskmanagement/inProgress"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            In Progress
          </NavLink>
          <NavLink
            to="taskmanagement/Complete"
            className={({ isActive }) =>
              isActive
                ? "bg-[#2ecc71]  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
                : "bg-transparent  py-1 px-6 hover:bg-[#2ecc71] border-2 border-[#2ecc71] rounded-full overflow-hidden"
            }
          >
            Complete
          </NavLink>
        </div>

        {/* Add Task */}
            <button className="flex items-center justify-center py-1 px-6 mb-1 rounded-full border-2 border-[#2ecc71] gap-2 hover:bg-[#2ecc71]">
                <IoMdAdd/> Add Task
            </button>
      </div>
      <div className="px-24">
        <Outlet />
      </div>
    </div>
  );
};

export default TaskManagement;

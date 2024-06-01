import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumb";
import { getEmployeeList } from "../../service/EmployeeService";
import { User } from "../../types/type";

const CompanyEmployeeList = () => {
  const {
    isPending,
    error,
    data: employees,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: () => {
      return getEmployeeList();
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs
        title="Employee List"
        link="/"
        linkText="Employee"
        current="View"
      />
      <div className="">
        <div className="grid grid-cols-1 gap-5">
          {employees.map((employee) => (
            <EmployeeList key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyEmployeeList;

function EmployeeList({ employee }: { employee: User }) {
  return (
    <div className=" bg-white dark:bg-gray-4 relative overflow-hidden  rounded shadow hover:shadow-md dark:shadow-gray-4 p-5 transition-all duration-500">
      <div className="md:flex justify-between items-center">
        <div className="flex items-center md:w-1/4">
          <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
            <img
              src={`/src/Images/Employee/ProfilePic/${employee.id}.png`}
              className="h-13 w-13"
              alt="profile pic"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/src/Images/Employee/ProfilePic/1.png";
              }}
            />
          </div>
          <div>
            <Link
              className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
              to={`/employee/profile`}
            >
              {employee.name}
            </Link>
            <div className="ms-3">{employee.occupation}</div>
          </div>
        </div>
        <div className="md:block flex justify-between md:mt-0 mt-2 md:w-1/4">
          <span className="flex items-center">{employee.email}</span>
          <span className="block font-semibold md:mt-1 mt-0">
            {employee.mobile}
          </span>
        </div>
        <div className="md:mt-0 mt-4 ">
          <div className="flex gap-1">
            <button
              name="approve"
              value="NO"
              className=" trans-effect border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 mr-1 rounded-full"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

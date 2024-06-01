import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../Components/Breadcrumb";
import { queryClient } from "../../react-query";
import {
  getApplicationList,
  updateApplicationStatus,
} from "../../service/CompanyService";
import { showError } from "../../service/notificationService";
import { Application } from "../../types/type";

const CompnayApplication = () => {
  const {
    isPending,
    error,
    data: applications,
  } = useQuery({
    queryKey: ["applications"],
    queryFn: () => {
      return getApplicationList();
    },
  });

  const { mutate: updateApp } = useMutation({
    mutationFn: (params: { id: number; value: string }) => {
      const { id, value } = params;
      return updateApplicationStatus(id, value);
    },
    onError(e) {
      showError(`${e}`);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs
        title="Application List"
        link="/"
        linkText="Application"
        current="View"
      />
      <div className="">
        <div className="grid grid-cols-1 gap-5">
          {applications.map((application) => (
            <ApplicationList
              key={application.id}
              application={application}
              updateApp={updateApp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompnayApplication;

function ApplicationList({
  application,
  updateApp,
}: {
  application: Application;
  updateApp: (args: { id: number; value: string }) => void;
}) {
  return (
    <div className=" bg-white dark:bg-gray-4 relative overflow-hidden  rounded shadow hover:shadow-md dark:shadow-gray-4 p-5 transition-all duration-500">
      <div className="md:flex justify-between items-center">
        <div className="flex items-center w-2/4">
          <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
            <img
              src={`/src/Images/Employee/ProfilePic/${application.userID}.png`}
              className="h-13 w-13"
              alt=""
            />
          </div>
          <div>
            <Link
              className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
              to={`/employee/profile`}
            >
              {application.name}
            </Link>
            <div className="ms-3">{application.occupation}</div>
          </div>
        </div>
        <div className="md:block flex justify-between md:mt-0 mt-2 w-1/4">
          <span className="flex items-center">{application.job}</span>
          <span className="block font-semibold md:mt-1 mt-0">
            {application.Number}
          </span>
        </div>
        <div className="md:mt-0 mt-4 w-1/4 ">
          {application.status === "Accepted" ? (
            <span className="bg-green-400 border-white text-white hover:bg-green-500 rounded p-2">
              Accepted
            </span>
          ) : (
            <div className="flex gap-1">
              <button
                type="submit"
                className=" trans-effect border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white py-2 px-4 rounded-full"
                onClick={() =>
                  updateApp({ id: application.id, value: "Accepted" })
                }
              >
                Approve
              </button>
              <button
                name="approve"
                value="NO"
                className=" trans-effect border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-2 px-4 mr-1 rounded-full"
              >
                Deny
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

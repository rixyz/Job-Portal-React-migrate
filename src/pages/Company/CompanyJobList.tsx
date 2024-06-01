import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumb";
import { queryClient } from "../../react-query";
import { deleteJob, getJobsByCompany } from "../../service/JobService";
import { showError, showSuccess } from "../../service/notificationService";
import { Job } from "../../types/type";

const CompanyJobList = () => {
  const comID = 1;
  const {
    isPending,
    error,
    data: jobs,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: () => {
      return getJobsByCompany(comID);
    },
  });

  const { mutate: deleteJobItem } = useMutation({
    mutationFn: (id: number) => {
      return deleteJob(id);
    },
    onError(e) {
      showError(`${e}`);
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      showSuccess("Job Deleted");
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className=" relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs title="Your Jobs" link="/" linkText="Jobs" current="View" />
      <div className="">
        <div className="mb-4 flex gap-3 flex-row sm:items-center justify-between ">
          <h2 className="text-3xl font-semibold "></h2>
          <nav>
            <Link to="/company/jobs/add">
              <button className="bg-violet-500 hover:bg-violet-600 p-2 px-3 rounded text-white text-center ml-2 flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
                Add
              </button>
            </Link>
          </nav>
        </div>
        <section className="">
          <div className="">
            <div className="grid grid-cols-1 gap-5">
              {jobs.map((job) => (
                <JobItem key={job.id} job={job} deleteJobItem={deleteJobItem} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default CompanyJobList;

const JobItem = ({
  job,
  deleteJobItem,
}: {
  job: Job;
  deleteJobItem: (id: number) => void;
}) => {
  const removeJob = (id: number) => {
    const confirm = window.confirm("Are you sure want to delete this job?");
    if (confirm) {
      deleteJobItem(id);
    }
  };

  return (
    <div className=" bg-white dark:bg-gray-4 relative overflow-hidden  rounded shadow hover:shadow-md dark:shadow-gray-4 p-5 transition-all duration-500">
      <div className="md:flex justify-between items-center">
        <div className="flex items-center w-2/4">
          <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow rounded-md">
            <img
              src="/src/Images/Company/ProfilePic/1.png"
              className="h-13 w-13"
              alt=""
            />
          </div>
          <div>
            <Link
              className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
              to={`/employee/jobs/info/${job.id}`}
            >
              {job.title}
            </Link>
          </div>
        </div>
        <div className="md:block flex justify-between md:mt-0 mt-2 md:w-1/4">
          <span className="text-slate-400 flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {job.location}
          </span>
          <span className="block font-semibold md:mt-1 mt-0">
            Rs. {job.salary}
          </span>
        </div>
        <div className="md:mt-0 mt-4 flex">
          <button className="p-2 btn rounded-md  md:ms-2 w-full md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#c084fc"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
              <path d="M13.5 6.5l4 4" />
            </svg>
          </button>
          <button
            className="p-2 btn rounded-md  md:ms-2 w-full md:w-auto"
            onClick={() => {
              if (job.id) removeJob(job.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#DC3545"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

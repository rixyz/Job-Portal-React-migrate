import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumb";
const employeeAppliedJobs = () => {
  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs
        title="Applied Jobs"
        link="/"
        linkText="Jobs"
        current="Applied"
      />
      <div className="">
        <div className="grid grid-cols-1 gap-[30px] ">
          <div className="bg-white dark:bg-gray-4 relative overflow-hidden  rounded shadow hover:shadow-md dark:shadow-gray-4  p-5">
            <div className="md:flex justify-between items-center">
              <div className="flex items-center w-full md:w-1/4">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
                  <img
                    src="/src/Images/Company/ProfilePic/1.png"
                    className="h-13 w-13"
                    alt=""
                  />
                </div>
                <div>
                  <Link
                    className="text-lg hover:text-cyan-600 font-semibold ms-3 min-w-[180px]"
                    to="/employee/jobs/info/1"
                  >
                    Developer
                  </Link>
                  <span className="ms-3 block">Hamro Patro </span>
                </div>
              </div>
              <div className="md:block flex justify-between md:mt-0 mt-4">
                <span className="block">
                  <span className="bg-cyan-600/10 inline-block text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                    Internship
                  </span>
                </span>
              </div>
              <div className="md:block flex justify-between md:mt-0 mt-2">
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
                  Kathmandu
                </span>
                <span className="block font-semibold md:mt-1 mt-0">
                  Rs. 75426
                </span>
              </div>
              <div className="md:mt-0 mt-4">
                <Link
                  className="p-2 btn rounded-md bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white md:ms-2 w-full md:w-auto"
                  to="/job-apply"
                >
                  Unapply
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-4 flex position-relative pt-10 mt-10">
              <ol className="steps">
                <li className="step is-complete" data-step="1">
                  Apply to job
                </li>
                <li className="step is-active" data-step="2">
                  Pass Application
                </li>
                <li className="step" data-step="3">
                  Pass Interview
                </li>
                <li className="step" data-step="4">
                  Done!
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-4 relative overflow-hidden  rounded shadow hover:shadow-md dark:shadow-gray-4  p-5">
            <div className="md:flex justify-between items-center">
              <div className="flex items-center w-full md:w-1/4">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
                  <img
                    src="/src/Images/Company/ProfilePic/2.png"
                    className="h-13 w-13"
                    alt=""
                  />
                </div>
                <div>
                  <Link
                    className="text-lg hover:text-cyan-600 font-semibold ms-3 min-w-[180px]"
                    to="/employee/jobs/info/1"
                  >
                    Technical Writer
                  </Link>
                  <span className="ms-3 block">F1Soft </span>
                </div>
              </div>
              <div className="md:block flex justify-between md:mt-0 mt-4">
                <span className="block">
                  <span className="bg-cyan-600/10 inline-block text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                    Internship
                  </span>
                </span>
              </div>
              <div className="md:block flex justify-between md:mt-0 mt-2">
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
                  Lalitpur
                </span>
                <span className="block font-semibold md:mt-1 mt-0">
                  Rs. 75426
                </span>
              </div>
              <div className="md:mt-0 mt-4">
                <Link
                  className="p-2 btn rounded-md bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white md:ms-2 w-full md:w-auto"
                  to="/job-apply"
                >
                  Unapply
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-4 flex position-relative pt-10 mt-10">
              <ol className="steps">
                <li className="step is-complete" data-step="1">
                  Apply to job
                </li>
                <li className="step is-complete" data-step="2">
                  Pass Application
                </li>
                <li className="step is-active" data-step="3">
                  Pass Interview
                </li>
                <li className="step" data-step="4">
                  Done!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default employeeAppliedJobs;

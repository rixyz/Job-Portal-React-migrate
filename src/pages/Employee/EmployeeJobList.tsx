import { Link } from "react-router-dom";
import { Select, Autocomplete, MultiSelect, Pagination } from "@mantine/core";
import { useState } from "react";

import { getJobsList, getJobsByName } from "../../service/JobService";
import { useQuery } from "@tanstack/react-query";
import { Job } from "../../types/type";
const EmployeeJobList = () => {
  const [activePage, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const {
    isPending,
    error,
    data: jobs,
  } = useQuery({
    queryKey: ["jobs", { activePage, search }],
    queryFn: () => {
      if (!search) {
        return getJobsList(activePage);
      } else {
        return getJobsByName(search);
      }
    },
  });

  if (error) return "An error has occurred: " + error.message;

  return (
    <section>
      <div className="relative table w-full py-36 bg-[url('https://jobstack-shreethemes.vercel.app/static/media/bg.9f5fc6c84f7a4eb68e0c.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-employee/90 dark:bg-cyan-600/90"></div>
        <div className="relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="md:text-3xl text-2xl md:leading-snug tracking-wide leading-snug font-medium text-white">
              Job Vacancies
            </h3>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="shape absolute start-0 end-0 sm:-bottom-px -bottom-[2px] overflow-hidden z-1 text-gray dark:text-boxdark-2">
          <svg
            className="w-full h-auto"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-5">
        <div className="bg-white dark:bg-boxdark border-0 shadow rounded-md p-3">
          <div className="grid grid-cols-6 lg:grid-cols-7 gap-3 lg:gap-10 content-evenly ">
            <Autocomplete
              className="col-span-2"
              placeholder="Search"
              value={search}
              onChange={setSearch}
              data={[
                {
                  group: "Development",
                  items: ["Developer", "Quality Assurance"],
                },
                { group: "Admin", items: ["Human Resources", "Manager"] },
                { group: "Documentation", items: ["Technical Writer"] },
              ]}
            />
            <Select
              className="col-span-2"
              placeholder="Sort by:"
              data={["Name", "Location", "Salary"]}
              clearable
            />
            <MultiSelect
              className="col-span-2"
              placeholder="Type of Job"
              data={[
                "Full-Time",
                "Part-Time",
                "One-Time",
                "Temporary",
                "Internship",
              ]}
              clearable
            />
            <button className="bg-employee text-white p-2 rounded hover:bg-employee/85">
              Search
            </button>
          </div>
        </div>
        <section className="p-8 m-5 bg-white dark:bg-boxdark rounded-lg dark:text-white">
          <div className="">
            <div className="grid grid-cols-1 gap-[30px]">
              {isPending
                ? [...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="animate-pulse flex gap-5 bg-white dark:bg-gray-4 rounded shadow hover:shadow-md dark:shadow-gray-4 p-5"
                    >
                      <div className="rounded-lg bg-slate-300 dark:bg-white h-10 w-10"></div>
                      <div className="flex-1 py-1">
                        <div className="grid grid-cols-3 gap-2 gap-x-96 w-full">
                          <div className="h-2 bg-slate-300 dark:bg-white rounded col-span-1"></div>
                          <div className="h-2 bg-slate-300 dark:bg-white rounded col-span-1"></div>
                          <div></div>
                          <div className="h-2 bg-slate-300 dark:bg-white rounded col-span-1"></div>
                          <div className="h-2 bg-slate-300 dark:bg-white rounded col-span-1"></div>
                        </div>
                      </div>
                    </div>
                  ))
                : jobs.map((job) => <JobItem key={job.id} job={job} />)}
            </div>
          </div>
          <div className="mx-auto w-fit mt-10">
            <Pagination value={activePage} onChange={setPage} total={2} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default EmployeeJobList;

function JobItem({ job }: { job: Job }) {
  return (
    <div className=" bg-white dark:bg-gray-4 relative overflow-hidden md:flex justify-between items-center rounded shadow hover:shadow-md dark:shadow-gray-4 transition-all duration-500 p-5">
      <div className="flex items-center w-full md:w-1/4">
        <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow rounded-md">
          <img
            src={`/src/Images/Company/ProfilePic/${job.companyID}.png`}
            className="h-13 w-13"
            alt=""
          />
        </div>
        <div>
          <Link
            className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
            to="/employee/jobs/info/1"
          >
            {job.title}
          </Link>
          <span className="ms-3 block">{job.companyName} </span>
        </div>
      </div>
      <div className="md:block flex justify-between md:mt-0 mt-4 md:w-1/4">
        <span className="block">
          <span className="bg-cyan-600/10 inline-block text-cyan-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
            {job.type}
          </span>
        </span>
        <span className="flex items-center text-slate-400 text-sm md:mt-1 mt-0">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="me-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
          </svg>{" "}
          {job.deadline}
        </span>
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
      <div className="md:mt-0 mt-4 flex gap-1">
        <div className="relative ">
          <Link
            className="hover:bg-employee text-employee flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-employee/10 bg-employee/5  hover:text-white duration-500"
            to="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </Link>
        </div>
        <Link
          className=" p-2 btn rounded-md bg-cyan-600 hover:bg-cyan-700 border-cyan-600 hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto text-center"
          to="/job-apply"
        >
          Apply Now
        </Link>
      </div>
      {job.sponsor === "gold" && (
        <span className="w-24 text-white p-1 text-center absolute -rotate-45 -start-[30px] top-3 bg-yellow-400/70 flex justify-center">
          <svg
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
          </svg>
        </span>
      )}
      {job.sponsor === "silver" && (
        <span className="w-24 text-white p-1 text-center absolute -rotate-45 -start-[30px] top-3 bg-slate-500/70 flex justify-center">
          <svg
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
          </svg>
        </span>
      )}
    </div>
  );
}

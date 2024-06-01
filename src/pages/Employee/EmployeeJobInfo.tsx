import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumb";
const EmployeeJobInfo = () => {
  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs title="Jobs Info" link="/" linkText="Jobs" current="Info" />
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-5">
        <div className="lg:col-span-8 md:col-span-6 ">
          <div className="md:flex items-center p-6 shadow dark:shadow-gray-4 rounded-md bg-white dark:bg-boxdark">
            <img
              src="/src/Images/Company/ProfilePic/1.png"
              className="rounded-full h-28 w-28 p-4 bg-white dark:bg-boxdark shadow dark:shadow-gray-4"
              alt=""
            />
            <div className="md:ms-4 md:mt-0 mt-6">
              <h5 className="text-xl font-semibold">Developer</h5>
              <Link className="mt-2" to="/company/profile">
                <span className="text-slate-400 font-medium me-2 inline-flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-[18px] text-cyan-600 me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    ></path>
                  </svg>
                  Hamro Patro
                </span>
                <span className="text-slate-400 font-medium me-2 inline-flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 256 256"
                    className="text-[18px] text-cyan-600 me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                  </svg>{" "}
                  Kathmandu
                </span>
              </Link>
            </div>
          </div>
          <div className="text-black">
            <h5 className="text-lg font-semibold mt-6">Job Description:</h5>
            <p className="text-slate-400 mt-4">
              One disadvantage of Lorum Ipsum is that in Latin certain letters
              appear more frequently than others - which creates a distinct
              visual impression. Moreover, in Latin only words at the beginning
              of sentences are capitalized.
            </p>
            <p className="text-slate-400 mt-4">
              This means that Lorem Ipsum cannot accurately represent, for
              example, German, in which all nouns are capitalized. Thus, Lorem
              Ipsum has only limited suitability as a visual filler for German
              texts. If the fill text is intended to illustrate the
              characteristics of different typefaces.
            </p>
            <p className="text-slate-400 mt-4">
              It sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <h5 className="text-lg font-semibold mt-6">
              Responsibilities and Duties:{" "}
            </h5>
            <p className="text-slate-400 mt-4">
              It sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <ul className="list-none flex-col flex-1">
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Participate in requirements analysis
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Write clean, scalable code using C# and .NET frameworks
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Test and deploy applications and systems
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Revise, update, refactor and debug code
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Improve existing software
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Develop documentation throughout the software development life
                cycle (SDLC)
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Serve as an expert on applications and provide technical support
              </li>
            </ul>
            <h5 className="text-lg font-semibold mt-6">
              Required Experience, Skills and Qualifications:{" "}
            </h5>
            <p className="text-slate-400 mt-4">
              It sometimes makes sense to select texts containing the various
              letters and symbols specific to the output language.
            </p>
            <ul className="list-none">
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Proven experience as a .NET Developer or Application Developer
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                good understanding of SQL and Relational Databases, specifically
                Microsoft SQL Server.
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Experience designing, developing and creating RESTful web
                services and APIs
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Basic know how of Agile process and practices
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Good understanding of object-oriented programming.
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Good understanding of concurrent programming.
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex w-full">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Sound knowledge of application architecture and design.
              </li>
              <li className="text-slate-400 mt-2 items-center inline-flex">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-cyan-600 me-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                </svg>
                Excellent problem solving and analytical skills
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6">
          <div className="shadow dark:shadow-gray-4 rounded-md bg-white dark:bg-boxdark sticky top-20">
            <div className="p-6">
              <h5 className="text-lg font-semibold">Job Information</h5>
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-t-gray-4">
              <ul className="list-none">
                <li className="flex items-center">
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
                    className="h-5 w-5"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <polyline points="17 11 19 13 23 9"></polyline>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Employee Type:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      Internship
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Location:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      Kathmandu
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Job Type:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      Web Designer / Developer
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Experience:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      None
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Qualifications:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      MCA
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Salary:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      $4000 - $4500
                    </span>
                  </div>
                </li>
                <li className="flex items-center mt-3">
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
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div className="ms-4">
                    <p className="font-medium">Deadline:</p>
                    <span className="text-cyan-600 font-medium text-sm">
                      28th April, 2024
                    </span>
                  </div>
                </li>
                <li className="mt-4">
                  <Link
                    className="p-2 btn rounded-md bg-employee hover:bg-cyan-700 border-employee hover:border-cyan-700 text-white md:ms-2 w-full md:w-auto"
                    to="/job-apply"
                  >
                    Apply Now
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 mt-16 lg:w-3/4 lg:mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold dark:text-black">
            Related Vacancies
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
          <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-boxdark">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-boxdark shadow dark:shadow-gray-4 rounded-md">
                  <img
                    src="/src/Images/Company/ProfilePic/1.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <Link
                    className="block text-[16px] font-semibold hover:text-cyan-600 transition-all duration-500"
                    to="/employer-detail/1"
                  >
                    Hamro Patro
                  </Link>
                  <span className="block text-sm text-slate-400">
                    2 days ago
                  </span>
                </div>
              </div>
              <span className="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                Full Time
              </span>
            </div>
            <div className="mt-6">
              <Link
                className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
                to="/job-detail-two/1"
              >
                Web Designer / Developer
              </Link>
              <h6 className="text-base font-medium flex items-center">
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
                </svg>{" "}
                Kathmandu
              </h6>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div className="bg-cyan-600 h-[6px] rounded-full w-1/2"></div>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 text-sm">
                  <span className="text-boxdark dark:text-white font-semibold inline-block">
                    21 applied
                  </span>{" "}
                  of 40 vacancy
                </span>
              </div>
            </div>
          </div>
          <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-boxdark">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-boxdark shadow dark:shadow-gray-4 rounded-md">
                  <img
                    src="/src/Images/Company/ProfilePic/2.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <Link
                    className="block text-[16px] font-semibold hover:text-cyan-600 transition-all duration-500"
                    to="/employer-detail/2"
                  >
                    F1Soft
                  </Link>
                  <span className="block text-sm text-slate-400">
                    2 days ago
                  </span>
                </div>
              </div>
              <span className="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                Part Time
              </span>
            </div>
            <div className="mt-6">
              <Link
                className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
                to="/job-detail-two/2"
              >
                Marketing Director
              </Link>
              <h6 className="text-base font-medium flex items-center">
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
                </svg>{" "}
                Lalitpur
              </h6>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div className="bg-cyan-600 h-[6px] rounded-full w-1/2"></div>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 text-sm">
                  <span className="text-boxdark dark:text-white font-semibold inline-block">
                    21 applied
                  </span>{" "}
                  of 40 vacancy
                </span>
              </div>
            </div>
          </div>
          <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-boxdark">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-boxdark shadow dark:shadow-gray-4 rounded-md">
                  <img
                    src="/src/Images/Company/ProfilePic/3.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <Link
                    className="block text-[16px] font-semibold hover:text-cyan-600 transition-all duration-500"
                    to="/employer-detail/3"
                  >
                    Android
                  </Link>
                  <span className="block text-sm text-slate-400">
                    2 days ago
                  </span>
                </div>
              </div>
              <span className="bg-cyan-600/10 group-hover:bg-cyan-600 inline-block text-cyan-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                Remote
              </span>
            </div>
            <div className="mt-6">
              <Link
                className="text-lg hover:text-cyan-600 font-semibold transition-all duration-500"
                to="/job-detail-two/3"
              >
                Application Developer
              </Link>
              <h6 className="text-base font-medium flex items-center">
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
                </svg>{" "}
                Australia (Hybrid)
              </h6>
            </div>
            <div className="mt-6">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                <div className="bg-cyan-600 h-[6px] rounded-full w-1/2"></div>
              </div>
              <div className="mt-2">
                <span className="text-slate-400 text-sm">
                  <span className="text-boxdark dark:text-white font-semibold inline-block">
                    21 applied
                  </span>{" "}
                  of 40 vacancy
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeJobInfo;

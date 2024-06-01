import { Link } from "react-router-dom";

import Breadcrumbs from "../../Components/Breadcrumb";
const EmployeeHome = () => {
  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs title="Home" link="/" linkText="Dashboard" current="Home" />
      <div className="rounded-lg p-8 bg-white dark:bg-boxdark dark:text-white">
        <div className="p-5">
          <div className="mb-10">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                Jobs For You
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Based on your recent activities...
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-3 gap-[30px]">
              <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
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
                      <span className="text-slate-900 dark:text-white font-semibold inline-block">
                        21 applied
                      </span>{" "}
                      of 40 vacancy
                    </span>
                  </div>
                </div>
              </div>
              <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
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
                      <span className="text-slate-900 dark:text-white font-semibold inline-block">
                        21 applied
                      </span>{" "}
                      of 40 vacancy
                    </span>
                  </div>
                </div>
              </div>
              <div className="group shadow dark:shadow-gray-4 p-6 rounded-md bg-white dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-4 rounded-md">
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
                      <span className="text-slate-900 dark:text-white font-semibold inline-block">
                        21 applied
                      </span>{" "}
                      of 40 vacancy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Latest Blog or News
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 30000+
              companies worldwide.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-4">
              <div className="relative overflow-hidden">
                <img
                  src="https://jobstack-shreethemes.vercel.app/static/media/01.77f204828e1974ac5467.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>
              <div className="relative p-6">
                <div className="absolute start-6 -top-4">
                  <span className="bg-employee text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    arts
                  </span>
                </div>
                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
                      </svg>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ms-3 flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <i></i>5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out dark:text-white dark:hover:text-employee"
                    to="/blog-detail/1"
                  >
                    11 Tips to Help You Get New Clients Through Cold Calling
                  </Link>
                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-employee after:bg-employee duration-500 ease-in-out items-center inline-flex"
                      to="/blog-detail/1"
                    >
                      Read More{" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="ms-1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                      </svg>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        className="text-slate-900 dark:text-white hover:text-employee dark:hover:text-employee font-medium"
                        to="/index-eight"
                      >
                        {" "}
                        Google
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-4">
              <div className="relative overflow-hidden">
                <img
                  src="https://jobstack-shreethemes.vercel.app/static/media/02.4be7e70c2b2a4948b34d.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>
              <div className="relative p-6">
                <div className="absolute start-6 -top-4">
                  <span className="bg-employee text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Illustration
                  </span>
                </div>
                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
                      </svg>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ms-3 flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <i></i>5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out dark:text-white dark:hover:text-employee"
                    to="/blog-detail/2"
                  >
                    DigitalOcean launches first Canadian data centre in Toronto
                  </Link>
                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-employee after:bg-employee duration-500 ease-in-out items-center inline-flex"
                      to="/blog-detail/2"
                    >
                      Read More{" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="ms-1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                      </svg>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        className="text-slate-900 dark:text-white hover:text-employee dark:hover:text-employee font-medium"
                        to="/index-eight"
                      >
                        {" "}
                        Facebook
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-4">
              <div className="relative overflow-hidden">
                <img
                  src="https://jobstack-shreethemes.vercel.app/static/media/03.af46bba7667e676029f3.jpg"
                  className="scale-110 group-hover:scale-100 transition-all duration-500"
                  alt=""
                />
              </div>
              <div className="relative p-6">
                <div className="absolute start-6 -top-4">
                  <span className="bg-employee text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">
                    Music
                  </span>
                </div>
                <div className="">
                  <div className="flex mb-4">
                    <span className="text-slate-400 text-sm flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
                      </svg>
                      20th February, 2023
                    </span>
                    <span className="text-slate-400 text-sm ms-3 flex items-center">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        className="text-slate-900 dark:text-white me-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      <i></i>5 min read
                    </span>
                  </div>
                  <Link
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out dark:text-white dark:hover:text-employee"
                    to="/blog-detail/3"
                  >
                    Using Banner Stands To Increase Trade Show Traffic
                  </Link>
                  <div className="flex justify-between items-center mt-3">
                    <Link
                      className="btn btn-link hover:text-employee after:bg-employee duration-500 ease-in-out items-center inline-flex"
                      to="/blog-detail/3"
                    >
                      Read More{" "}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="ms-1"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                      </svg>
                    </Link>
                    <span className="text-slate-400 text-sm">
                      by{" "}
                      <Link
                        className="text-slate-900 dark:text-white hover:text-employee dark:hover:text-employee font-medium"
                        to="/index-eight"
                      >
                        {" "}
                        Linkedin
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="lg:mx-5 md:py-24 py-16">
          <div className="">
            <div className="grid grid-cols-1 pb-8 text-center">
              <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
                Find Best Companies
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Search all the open positions on the web. Get your own
                personalized salary estimate. Read reviews on over 30000+
                companies worldwide.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              <div className="group relative p-6 rounded-md shadow dark:shadow-gray-4 mt-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-4 rounded-md relative -mt-12">
                  <img
                    src="/src/Images/Company/ProfilePic/1.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <Link
                    className="text-lg hover:text-employee font-semibold"
                    to="/employer-detail/5"
                  >
                    HamroPatro
                  </Link>
                  <p className="text-slate-400 mt-2">Nepali Calender</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray dark:border-gray-4 flex justify-between">
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
                    </svg>{" "}
                    Kathmandu
                  </span>
                  <span className="block font-semibold text-employee">
                    2 Jobs
                  </span>
                </div>
              </div>
              <div className="group relative p-6 rounded-md shadow dark:shadow-gray-4 mt-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-4 rounded-md relative -mt-12">
                  <img
                    src="/src/Images/Company/ProfilePic/2.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <Link
                    className="text-lg hover:text-employee font-semibold"
                    to="/employer-detail/6"
                  >
                    F1Soft
                  </Link>
                  <p className="text-slate-400 mt-2">Digital Payment</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray dark:border-gray-4 flex justify-between">
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
                    </svg>{" "}
                    Lalitpur
                  </span>
                  <span className="block font-semibold text-employee">
                    5 Jobs
                  </span>
                </div>
              </div>
              <div className="group relative p-6 rounded-md shadow dark:shadow-gray-4 mt-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-4 rounded-md relative -mt-12">
                  <img
                    src="/src/Images/Company/ProfilePic/3.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <Link
                    className="text-lg hover:text-employee font-semibold"
                    to="/employer-detail/7"
                  >
                    {" "}
                    Elise
                  </Link>
                  <p className="text-slate-400 mt-2">
                    Digital Marketing Solutions for Tomorrow
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray dark:border-gray-4 flex justify-between">
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
                    </svg>{" "}
                    Australia
                  </span>
                  <span className="block font-semibold text-employee">
                    5 Jobs
                  </span>
                </div>
              </div>
              <div className="group relative p-6 rounded-md shadow dark:shadow-gray-4 mt-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-4 rounded-md relative -mt-12">
                  <img
                    src="/src/Images/Company/ProfilePic/4.png"
                    className="h-8 w-8"
                    alt=""
                  />
                </div>
                <div className="mt-4">
                  <Link
                    className="text-lg hover:text-employee font-semibold"
                    to="/employer-detail/8"
                  >
                    Cedar Gate
                  </Link>
                  <p className="text-slate-400 mt-2">Software Development</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray dark:border-gray-4 flex justify-between">
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
                    </svg>{" "}
                    United States of America
                  </span>
                  <span className="block font-semibold text-employee">
                    2 Jobs
                  </span>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
              <div className="md:col-span-12 text-center">
                <Link
                  className="btn btn-link text-slate-400 hover:text-employee after:bg-employee duration-500 ease-in-out !inline-flex items-center"
                  to="/index-eight"
                >
                  See More Companies{" "}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="ms-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default EmployeeHome;

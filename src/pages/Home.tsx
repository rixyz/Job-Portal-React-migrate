import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-white dark:bg-boxdark dark:text-white">
      <section
        className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('https://jobstack-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg')] bg-center bg-cover"
        id="home"
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="lg:w-3/4 lg:mx-auto relative ">
          <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-[30px]">
            <div className="lg:col-span-7 lg:me-6">
              <h4 className="text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">
                Find a new job and <br /> build career
              </h4>
              <p className="text-white/70 text-lg max-w-xl">
                Find Jobs, Employment &amp; Career Opportunities. Some of the
                companies we've helped recruit excellent applicants over the
                years.
              </p>
              <div className="grid grid-cols-1" id="reserve-form">
                <div className="mt-8">
                  <div className="bg-white dark:bg-slate-900 border-0 shadow rounded p-3">
                    <form action="#">
                      <div className="registration-form text-dark text-start">
                        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-6">
                          <div className="lg:col-span-8 md:col-span-7">
                            <div className="filter-search-form relative filter-border">
                              <i className="fa fa-briefcase mr-1 text-employee"></i>
                              <input
                                name="name"
                                type="text"
                                id="job-keyword"
                                className="form-input filter-input-box bg-gray-50 dark:bg-slate-900 dark:text-white border-0 p-5"
                                placeholder="Search your Keywords"
                              />
                            </div>
                          </div>
                          <div className="lg:col-span-4 md:col-span-5">
                            <input
                              type="submit"
                              id="search"
                              name="search"
                              className="btn bg-employee hover:bg-emerald-700 border-employee hover:border-emerald-700 text-white searchbtn submit-btn w-full"
                              value="Search"
                              style={{ height: "60px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-white/70">
                  <span className="text-white">Popular Searches :</span>{" "}
                  Designer, Developer, Web, IOS, PHP Senior Engineer
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 mt-8 md:mt-0">
              <div className="relative z-2">
                <div className="p-3 shadow dark:shadow-gray-4 rounded-md bg-white dark:bg-slate-900">
                  <img
                    src="	https://jobstack-shreethemes.vercel.app/static/media/hero.16132c41b7103b868ff0.jpg"
                    className="shadow-md rounded-md"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape overflow-hidden text-white dark:text-slate-900 rtl:-scale-x-[1]">
          <svg
            viewBox="0 0 2880 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M720 125L2160 0H2880V250H0V125H720Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="lg:w-3/4 lg:mx-auto md:mt-24 mt-16">
        <div className="relative grid md:grid-cols-3 grid-cols-1 items-center gap-[30px] z-1">
          <div className="counter-box text-center">
            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
              <span>1,548</span>K+
            </h1>
            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
              Job Fulfillment
            </h5>
          </div>
          <div className="counter-box text-center">
            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
              <span>25</span>+
            </h1>
            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
              Branches
            </h5>
          </div>
          <div className="counter-box text-center">
            <h1 className="lg:text-5xl text-4xl font-semibold mb-2 dark:text-white">
              <span>9</span>+
            </h1>
            <h5 className="counter-head text-sm font-semibold text-slate-400 uppercase">
              Years Experience
            </h5>
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 lg:mx-auto md:mt-24 mt-16">
        <div className="grid md:grid-cols-12 grid-cols-1 pb-8 items-end">
          <div className="lg:col-span-8 md:col-span-6 ltr:md:text-left rtl:md:text-right text-center">
            <h3 className="mb-4 md:text-[26px] md:leading-normal text-2xl leading-normal font-semibold">
              Browse by Categories
            </h3>
            <p className="text-slate-400 max-w-xl">
              Search your career opportunity with our categories
            </p>
          </div>
          <div className="lg:col-span-4 md:col-span-6 ltr:md:text-right rtl:md:text-left hidden md:block">
            <Link
              className="btn btn-link text-slate-400 hover:text-employee after:bg-employee duration-500 ease-in-out inline-flex items-center"
              to="/index-eight"
            >
              All Categories{" "}
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
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Human Resource
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              It &amp; Networking
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Sales &amp; Marketing
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Accounting
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Delivery Boy
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Data Science
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Project Manager
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Engineering
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Help Center
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
          <div className="group p-4 rounded-md shadow dark:shadow-gray-4 bg-slate-50 dark:bg-slate-800 hover:bg-employee dark:hover:bg-employee transition-all duration-500">
            <h5 className="text-lg font-semibold group-hover:text-white">
              Full Stack Developer
            </h5>
            <span className="block text-slate-400 group-hover:text-white/50 text-sm mt-1">
              90 Jobs Available
            </span>
            <div className="mt-2">
              <Link
                className="text-employee dark:text-white/80 group-hover:text-white font-medium items-center inline-flex"
                to="/job-grid-one"
              >
                Explore Jobs
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
      </div>
      <section className="lg:w-3/4 lg:mx-auto md:py-24 py-16">
        <div className="container">
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
            <div className="md:col-span-12 text-center ">
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
        <div className="container md:mt-24 mt-16">
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
                      20th February, 2024
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
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out"
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
                      20th February, 2024
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
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out"
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
                      20th February, 2024
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
                    className="title text-lg font-semibold hover:text-employee duration-500 ease-in-out"
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
      </section>
    </div>
  );
};

export default Home;

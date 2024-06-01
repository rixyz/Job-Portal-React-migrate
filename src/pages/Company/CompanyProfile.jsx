import { useState } from "react";

import TextInput from "../../Components/TextInput";
const isLogin = localStorage.getItem("isLogin");
const CompanyView = () => {
  console.log(isLogin);
  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="text-black dark:text-white">
      <section className="relative table w-full py-40 bg-[url('/src/Images/Company//Office/cover.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-company/60"></div>
      </section>
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
      <section className="relative mb:pb-24 pb-16 -mt-16 z-1  mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px]">
        <div className="">
          <div className="grid grid-cols-1">
            <div className="md:flex justify-between items-center shadow dark:shadow-gray-4 rounded-md p-6 bg-white dark:bg-boxdark">
              <div className="flex items-center">
                <img
                  src="/src/Images/Company/ProfilePic/1.png"
                  className="h-20 w-20 p-3 shadow dark:shadow-gray-4 rounded-md bg-slate-50 dark:bg-gray-4"
                  alt=""
                />
                <div className="ms-4">
                  <h5 className="text-xl font-bold">Hamro Patro</h5>
                  <h6 className="text-base text-slate-400 flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 256 256"
                      className="me-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                    </svg>{" "}
                    Kathmandu
                  </h6>
                </div>
              </div>
              <div className="md:mt-0 mt-4">
                {isLogin === "company" ? (
                  isEditing ? (
                    <button
                      className="btn btn-link p-5 py-1 bg-company hover:bg-company/90 border-company dark:border-company text-white rounded-md"
                      onClick={toggleEdit}
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      className="btn btn-link p-5 py-1 bg-company hover:bg-company/90 border-company dark:border-company text-white rounded-md"
                      onClick={toggleEdit}
                    >
                      Edit
                    </button>
                  )
                ) : (
                  <a
                    className="btn btn-link p-5 py-1 bg-company hover:bg-company/90 border-company dark:border-company text-white rounded-md"
                    href="/employer-detail/1"
                  >
                    Follow
                  </a>
                )}
                <a
                  className="btn btn-link p-5 py-1 bg-company/5 hover:bg-company border-company/10 hover:border-company text-company hover:text-white rounded-md ms-1"
                  href="/employer-detail/1"
                >
                  See Jobs
                </a>
              </div>
            </div>
          </div>
        </div>
        {isEditing ? <EditProfile /> : <ViewProfile />}
        <div className="md:mt-24 mt-16">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="relative overflow-hidden lg:px-8 px-6 py-10 rounded-xl shadow-lg dark:shadow-gray-4">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                  <div className="lg:col-span-8 md:col-span-7">
                    <div className="ltr:md:text-left rtl:md:text-right text-center relative z-1">
                      <h3 className="text-2xl font-semibold mb-4">
                        Explore a job now!
                      </h3>
                      <p className="text-slate-400 max-w-xl">
                        Search all the open positions on the web. Get your own
                        personalized salary estimate. Read reviews on over
                        30000+ companies worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-4 md:col-span-5">
                    <div className="ltr:text-right rtl:text-left relative z-1">
                      <a
                        className="btn p-2 bg-company hover:bg-company/90 border-company dark:border-company text-white rounded-md"
                        href="/employer-detail"
                      >
                        Apply Now
                      </a>
                      <a
                        className="btn  text-company rounded-md ms-2"
                        href="/aboutus"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-5 -start-5">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lg:text-[150px] text-7xl text-black/5 ltr:-rotate-45 rtl:rotate-45"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="absolute -bottom-5 -end-5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="lg:text-[150px] text-7xl text-black/5  rtl:-rotate-90"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
                  </svg>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CompanyView;

const EditProfile = () => {
  return (
    <div id="edit" className="p-8 mt-10 bg-white dark:bg-gray-4 rounded-lg">
      <div className="rounded p-5">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
            <TextInput
              title="Name"
              name="name"
              type="text"
              color="company"
              defaultValue="Hamro Patro"
              errMessage=""
            />
            <TextInput
              title="Email"
              name="email"
              type="email"
              color="company"
              defaultValue="company@gmail.com"
              errMessage=""
            />
            <TextInput
              title="Address"
              name="address"
              type="text"
              color="company"
              defaultValue="Kathmandu"
              errMessage=""
            />
            <div className="md:flex justify-between">
              <TextInput
                title="Founded"
                name="founded"
                type="text"
                color="company"
                defaultValue="2010"
                errMessage=""
              />
              <TextInput
                title="Founder"
                name="founder"
                type="text"
                color="company"
                defaultValue="Shankar Uprety"
                errMessage=""
              />
            </div>
          </div>
          <div className="my-2">
            <div className="mb-6">
              <TextInput
                title="About you"
                name="about"
                type="about"
                errMessage=""
                defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage."
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button
              type="submit"
              className=" bg-company hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-1"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ViewProfile = () => {
  return (
    <div className="mt-12">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] bg-white dark:bg-boxdark p-5 rounded-lg">
        <div className="lg:col-span-8 md:col-span-7">
          <h5 className="text-xl font-semibold">Company Story</h5>
          <p className="text-slate-400 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>
          <p className="text-slate-400 mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage.
          </p>
          <div className="grid grid-cols-12 gap-6 mt-6">
            <div className="col-span-12">
              <img
                src="/src/Images/Company//Office/1.jpg"
                className="rounded-md shadow dark:shadow-gray-4"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <img
                src="/src/Images/Company//Office/2.jpg"
                className="rounded-md shadow dark:shadow-gray-4"
                alt=""
              />
            </div>
            <div className="col-span-6">
              <img
                src="/src/Images/Company//Office/3.jpg"
                className="rounded-md shadow dark:shadow-gray-4"
                alt=""
              />
            </div>
          </div>
          <h5 className="text-xl font-semibold mt-6">Vacancies:</h5>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-4">
              <div className="p-6">
                <a
                  className="title h5 text-lg font-semibold hover:text-company"
                  href="/employer-detail/1"
                >
                  Software Engineering
                </a>
                <p className="text-slate-400 mt-2 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-company me-1"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                  </svg>{" "}
                  Posted 3 Days ago
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-company/5 text-company text-xs font-bold px-2.5 py-0.5 rounded h-5">
                    Full Time
                  </span>
                  <p className="text-slate-400 flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="text-company me-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                      <path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path>
                    </svg>
                    Rs. 950 - Rs. 1100/mo
                  </p>
                </div>
              </div>
              <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-4 border-gray">
                <img
                  src="/src/Images/Company/ProfilePic/1.png"
                  className="h-12 w-12 shadow-md dark:shadow-gray-4 rounded-md p-2 bg-white dark:bg-boxdark"
                  alt=""
                />
                <div className="ms-3">
                  <h6 className="mb-0 font-semibold text-base">Hamro Patro</h6>
                  <span className="text-slate-400 text-sm">Kathmandu</span>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-md shadow dark:shadow-gray-4">
              <div className="p-6">
                <a
                  className="title h5 text-lg font-semibold hover:text-company"
                  href="/employer-detail/1"
                >
                  Web Developer
                </a>
                <p className="text-slate-400 mt-2 flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    className="text-company"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                    <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                  </svg>
                  Posted 3 Days ago
                </p>
                <div className="flex justify-between items-center mt-4">
                  <span className="bg-company/5 text-company text-xs font-bold px-2.5 py-0.5 rounded h-5">
                    Remote
                  </span>
                  <p className="text-slate-400 flex items-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="text-company"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                      <path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path>
                    </svg>{" "}
                    Rs. 2500 - Rs. 2600/mo
                  </p>
                </div>
              </div>
              <div className="flex items-center p-6 border-t border-gray-100 dark:border-gray-4 border-gray">
                <img
                  src="/src/Images/Company/ProfilePic/1.png"
                  className="h-12 w-12 shadow-md dark:shadow-gray-4 rounded-md p-2 bg-white dark:bg-boxdark"
                  alt=""
                />
                <div className="ms-3">
                  <h6 className="mb-0 font-semibold text-base">Hamro Patro</h6>
                  <span className="text-slate-400 text-sm">
                    Kathmandu (Hybrid)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-md shadow dark:shadow-gray-4 mt-8">
            <h5 className="text-xl font-semibold">Leave A Comment:</h5>
            <form className="mt-8">
              <div className="grid lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-6 mb-5">
                  <div className="text-left">
                    <label htmlFor="name" className="font-semibold">
                      Your Name:
                    </label>
                    <div className="form-icon relative mt-2">
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
                        className="w-4 h-4 absolute top-3 start-4"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="inherit  border-1 ps-11 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Name :"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 mb-5">
                  <div className="text-left">
                    <label htmlFor="email" className="font-semibold">
                      Your Email:
                    </label>
                    <div className="form-icon relative mt-2">
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
                        className="w-4 h-4 absolute top-3 start-4"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="inherit  border-1 ps-11 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Email :"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="mb-5">
                  <div className="text-left">
                    <label htmlFor="comments" className="font-semibold">
                      Your Comment:
                    </label>
                    <div className="form-icon relative mt-2">
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
                        className="w-4 h-4 absolute top-3 start-4"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <textarea
                        name="comments"
                        id="comments"
                        className="inherit  border-1 ps-11 h-28 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                className="btn p-3 bg-company hover:bg-company/90 border-company hover:border-company/90 text-white rounded-md w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-5">
          <div className="bg-slate-50 dark:bg-gray-4 rounded-md shadow dark:shadow-gray-4 p-6 sticky top-20">
            <div className="w-full leading-[0] border-0">
              <iframe
                title="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113097.44782258329!2d85.27262375611812!3d27.64633572241154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1925bee80bb3%3A0x1e704f88b404f106!2sHamro%20Patro!5e0!3m2!1sen!2snp!4v1715610346558!5m2!1sen!2snp"
                className="w-full h-[350px] rounded-md shadow dark:shadow-gray-4"
                allowfullscreen=""
              ></iframe>
            </div>
            <ul className="list-none mt-4">
              <li className="flex justify-between mt-2">
                <span className="text-slate-400 font-medium">Founded:</span>
                <span className="font-medium">2010</span>
              </li>
              <li className="flex justify-between mt-2">
                <span className="text-slate-400 font-medium">Founder:</span>
                <span className="font-medium">Shankar Uprety</span>
              </li>
              <li className="flex justify-between mt-2">
                <span className="text-slate-400 font-medium">
                  Headquarters:
                </span>
                <span className="font-medium">Kathmandu</span>
              </li>
              <li className="flex justify-between mt-2">
                <span className="text-slate-400 font-medium">
                  Number of companys:
                </span>
                <span className="font-medium">314</span>
              </li>
              <li className="flex justify-between mt-2">
                <span className="text-slate-400 font-medium">Website:</span>
                <span className="font-medium">https://www.hamropatro.com/</span>
              </li>
            </ul>
            {isLogin !== "company" && (
              <div className="mt-4 pt-2 border-t-2 border-gray dark:border-t-gray-4">
                <h5 className="text-lg font-semibold">Contact us</h5>
                <form>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <label htmlFor="name2" className="font-semibold">
                        Your Name:
                      </label>

                      <input
                        name="name"
                        id="name2"
                        type="text"
                        className="inherit  border-1 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Name :"
                      />
                    </div>
                    <div>
                      <label htmlFor="email2" className="font-semibold">
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email2"
                        type="email"
                        className="inherit  border-1 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Email :"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="font-semibold">
                        Your Question:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="inherit  border-1 dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Subject :"
                      />
                    </div>
                    <div>
                      <label htmlFor="comments2" className="font-semibold">
                        Your Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments2"
                        className="inherit  border-1   dark:bg-[rgb(15,23,42)] dark:border-[rgb(31,41,55)] border-gray dark:text-[rgb(226,232,240)] bg-transparent border inherit rounded border-solid border-1 text-sm h-10 outline-none outline-offset-2 px-2 py-1 w-full"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit2"
                    name="send"
                    className="btn p-2 bg-company hover:bg-company/90 text-white rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../Components/Breadcrumb";
import TextInput from "../../Components/TextInput";
import { queryClient } from "../../react-query";
import { getEmployeeInfo, updateEmployee } from "../../service/EmployeeService";
import { showError, showSuccess } from "../../service/notificationService";
import { User, UserErrorMsg } from "../../types/type";
import UserOne from "/src/Images/Employee/ProfilePic/1.png";

const EmployeeProfile = () => {
  const userID = 1;
  const isLogin = localStorage.getItem("isLogin");
  const [isEditing, setIsEditing] = useState(false);

  const {
    isPending,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return getEmployeeInfo(userID);
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const toggleEdit = () => {
    setIsEditing((old) => !old);
  };

  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs
        title="Profile"
        link="/"
        linkText="Dashboard"
        current="Profile"
      />
      <div className="overflow-hidden border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark rounded-lg">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src="/src/Images/Employee/CoverPic/1.png"
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          {isLogin === "employee" ? (
            <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
              <label
                htmlFor="cover"
                className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4"
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                />
                <span>
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99992 5.83329C6.03342 5.83329 5.24992 6.61679 5.24992 7.58329C5.24992 8.54979 6.03342 9.33329 6.99992 9.33329C7.96642 9.33329 8.74992 8.54979 8.74992 7.58329C8.74992 6.61679 7.96642 5.83329 6.99992 5.83329ZM4.08325 7.58329C4.08325 5.97246 5.38909 4.66663 6.99992 4.66663C8.61075 4.66663 9.91659 5.97246 9.91659 7.58329C9.91659 9.19412 8.61075 10.5 6.99992 10.5C5.38909 10.5 4.08325 9.19412 4.08325 7.58329Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span>Edit</span>
              </label>
            </div>
          ) : null}
        </div>

        <div className="px-4 pb-6 text-justify lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2 p-1">
              <img
                src={UserOne}
                alt="profile"
                className="mx-auto mt-auto rounded-full bg-white/20"
              />
              {isLogin === "employee" ? (
                <label
                  htmlFor="profile"
                  className=" m-0 absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                >
                  <svg
                    className="fill-current"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.76464 1.42638C4.87283 1.2641 5.05496 1.16663 5.25 1.16663H8.75C8.94504 1.16663 9.12717 1.2641 9.23536 1.42638L10.2289 2.91663H12.25C12.7141 2.91663 13.1592 3.101 13.4874 3.42919C13.8156 3.75738 14 4.2025 14 4.66663V11.0833C14 11.5474 13.8156 11.9925 13.4874 12.3207C13.1592 12.6489 12.7141 12.8333 12.25 12.8333H1.75C1.28587 12.8333 0.840752 12.6489 0.512563 12.3207C0.184375 11.9925 0 11.5474 0 11.0833V4.66663C0 4.2025 0.184374 3.75738 0.512563 3.42919C0.840752 3.101 1.28587 2.91663 1.75 2.91663H3.77114L4.76464 1.42638ZM5.56219 2.33329L4.5687 3.82353C4.46051 3.98582 4.27837 4.08329 4.08333 4.08329H1.75C1.59529 4.08329 1.44692 4.14475 1.33752 4.25415C1.22812 4.36354 1.16667 4.51192 1.16667 4.66663V11.0833C1.16667 11.238 1.22812 11.3864 1.33752 11.4958C1.44692 11.6052 1.59529 11.6666 1.75 11.6666H12.25C12.4047 11.6666 12.5531 11.6052 12.6625 11.4958C12.7719 11.3864 12.8333 11.238 12.8333 11.0833V4.66663C12.8333 4.51192 12.7719 4.36354 12.6625 4.25415C12.5531 4.14475 12.4047 4.08329 12.25 4.08329H9.91667C9.72163 4.08329 9.53949 3.98582 9.4313 3.82353L8.43781 2.33329H5.56219Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.00004 5.83329C6.03354 5.83329 5.25004 6.61679 5.25004 7.58329C5.25004 8.54979 6.03354 9.33329 7.00004 9.33329C7.96654 9.33329 8.75004 8.54979 8.75004 7.58329C8.75004 6.61679 7.96654 5.83329 7.00004 5.83329ZM4.08337 7.58329C4.08337 5.97246 5.38921 4.66663 7.00004 4.66663C8.61087 4.66663 9.91671 5.97246 9.91671 7.58329C9.91671 9.19412 8.61087 10.5 7.00004 10.5C5.38921 10.5 4.08337 9.19412 4.08337 7.58329Z"
                      fill=""
                    />
                  </svg>
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    className="sr-only"
                  />
                </label>
              ) : null}
            </div>
          </div>
          <div className="mt-4 text-black dark:text-white">
            <div className="text-center">
              <h3 className="mb-1.5 text-2xl font-semibold">
                {user.name}

                {isLogin === "employee" ? (
                  isEditing ? (
                    <button
                      onClick={toggleEdit}
                      className="bg-red-500 hover:bg-red-600 p-1 px-2 rounded text-white text-center ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={toggleEdit}
                      className="bg-emerald-500 hover:bg-emerald-600 p-1 px-2 rounded text-white text-center ml-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#fff"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                      </svg>
                    </button>
                  )
                ) : null}
              </h3>
              <p className="font-medium">{user.occupation}</p>
            </div>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold ">259</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold">129K</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold ">2K</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
            {isEditing ? (
              <EditProfile user={user} toggleEdit={toggleEdit} />
            ) : (
              <ViewProfile user={user} />
            )}
            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-center">Follow me on</h4>
              <div className="flex items-center justify-center gap-3.5">
                <Link
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_966)">
                      <path
                        d="M12.8333 12.375H15.125L16.0416 8.70838H12.8333V6.87504C12.8333 5.93088 12.8333 5.04171 14.6666 5.04171H16.0416V1.96171C15.7428 1.92229 14.6144 1.83337 13.4227 1.83337C10.934 1.83337 9.16663 3.35229 9.16663 6.14171V8.70838H6.41663V12.375H9.16663V20.1667H12.8333V12.375Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_966">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_970)">
                      <path
                        d="M20.9813 5.18472C20.2815 5.49427 19.5393 5.69757 18.7795 5.78789C19.5804 5.30887 20.1798 4.55498 20.4661 3.66672C19.7145 4.11405 18.8904 4.42755 18.0315 4.59714C17.4545 3.97984 16.6898 3.57044 15.8562 3.43259C15.0225 3.29474 14.1667 3.43617 13.4218 3.83489C12.6768 4.2336 12.0845 4.86726 11.7368 5.63736C11.3891 6.40746 11.3056 7.27085 11.4993 8.0933C9.97497 8.0169 8.48376 7.62078 7.12247 6.93066C5.76118 6.24054 4.56024 5.27185 3.59762 4.08747C3.25689 4.67272 3.07783 5.33801 3.07879 6.01522C3.07879 7.34439 3.75529 8.51864 4.78379 9.20614C4.17513 9.18697 3.57987 9.0226 3.04762 8.72672V8.77439C3.04781 9.65961 3.35413 10.5175 3.91465 11.2027C4.47517 11.8878 5.2554 12.3581 6.12304 12.5336C5.55802 12.6868 4.96557 12.7093 4.39054 12.5996C4.63517 13.3616 5.11196 14.028 5.75417 14.5055C6.39637 14.983 7.17182 15.2477 7.97196 15.2626C7.17673 15.8871 6.2662 16.3488 5.29243 16.6212C4.31866 16.8936 3.30074 16.9714 2.29688 16.8502C4.04926 17.9772 6.08921 18.5755 8.17271 18.5735C15.2246 18.5735 19.081 12.7316 19.081 7.66522C19.081 7.50022 19.0765 7.33339 19.0691 7.17022C19.8197 6.62771 20.4676 5.95566 20.9822 5.18564L20.9813 5.18472Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_970">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.666138)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_974)">
                      <path
                        d="M6.69548 4.58327C6.69523 5.0695 6.50185 5.53572 6.15786 5.87937C5.81387 6.22301 5.34746 6.41593 4.86123 6.41569C4.375 6.41545 3.90878 6.22206 3.56513 5.87807C3.22149 5.53408 3.02857 5.06767 3.02881 4.58144C3.02905 4.09521 3.22244 3.62899 3.56643 3.28535C3.91042 2.9417 4.37683 2.74878 4.86306 2.74902C5.34929 2.74927 5.81551 2.94265 6.15915 3.28664C6.5028 3.63063 6.69572 4.09704 6.69548 4.58327ZM6.75048 7.77327H3.08381V19.2499H6.75048V7.77327ZM12.5438 7.77327H8.89548V19.2499H12.5071V13.2274C12.5071 9.87244 16.8796 9.56077 16.8796 13.2274V19.2499H20.5005V11.9808C20.5005 6.32494 14.0288 6.53577 12.5071 9.31327L12.5438 7.77327Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_974">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.333862)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_978)">
                      <path
                        d="M18.3233 10.6077C18.2481 9.1648 17.7463 7.77668 16.8814 6.61929C16.6178 6.90312 16.3361 7.16951 16.038 7.41679C15.1222 8.17748 14.0988 8.79838 13.0011 9.25929C13.1542 9.58013 13.2945 9.89088 13.4182 10.1842V10.187C13.4531 10.2689 13.4867 10.3514 13.519 10.4345C14.9069 10.2786 16.3699 10.3355 17.788 10.527C17.9768 10.5527 18.1546 10.5802 18.3233 10.6077ZM9.72038 3.77854C10.6137 5.03728 11.4375 6.34396 12.188 7.69271C13.3091 7.25088 14.2359 6.69354 14.982 6.07296C15.2411 5.8595 15.4849 5.62824 15.7117 5.38088C14.3926 4.27145 12.7237 3.66426 11 3.66671C10.5711 3.66641 10.1429 3.70353 9.72038 3.77762V3.77854ZM3.89862 9.16396C4.52308 9.1482 5.1468 9.11059 5.76863 9.05121C7.27163 8.91677 8.7618 8.66484 10.2255 8.29771C9.46051 6.96874 8.63463 5.67578 7.75046 4.42296C6.80603 4.89082 5.97328 5.55633 5.30868 6.37435C4.64409 7.19236 4.16319 8.14374 3.89862 9.16396ZM5.30113 15.6155C5.65679 15.0957 6.12429 14.5109 6.74488 13.8747C8.07771 12.5089 9.65071 11.4455 11.4712 10.8589L11.528 10.8424C11.3768 10.5087 11.2347 10.2108 11.0917 9.93029C9.40871 10.4207 7.63588 10.7269 5.86946 10.8855C5.00779 10.9634 4.23504 10.9973 3.66671 11.0028C3.66509 12.6827 4.24264 14.3117 5.30204 15.6155H5.30113ZM13.7546 17.7971C13.4011 16.0144 12.9008 14.2641 12.2586 12.5639C10.4235 13.2303 8.96138 14.2047 7.83113 15.367C7.375 15.8276 6.97021 16.3362 6.62388 16.8841C7.88778 17.8272 9.42308 18.3356 11 18.3334C11.9441 18.3347 12.8795 18.1533 13.7546 17.799V17.7971ZM15.4715 16.8117C16.9027 15.7115 17.8777 14.1219 18.2096 12.3475C17.898 12.2696 17.5029 12.1917 17.0684 12.1312C16.1023 11.9921 15.1221 11.9819 14.1534 12.101C14.6988 13.6399 15.1392 15.2141 15.4715 16.8126V16.8117ZM11 20.1667C5.93729 20.1667 1.83337 16.0628 1.83337 11C1.83337 5.93729 5.93729 1.83337 11 1.83337C16.0628 1.83337 20.1667 5.93729 20.1667 11C20.1667 16.0628 16.0628 20.1667 11 20.1667Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_978">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="hover:text-primary"
                  aria-label="social-icon"
                >
                  <svg
                    className="fill-current"
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_30_982)">
                      <path
                        d="M11.6662 1.83337C6.6016 1.83337 2.49951 5.93546 2.49951 11C2.49847 12.9244 3.10343 14.8002 4.22854 16.3613C5.35366 17.9225 6.94181 19.0897 8.76768 19.6974C9.22602 19.7771 9.39743 19.5021 9.39743 19.261C9.39743 19.0438 9.38552 18.3224 9.38552 17.5542C7.08285 17.9786 6.48701 16.9932 6.30368 16.4771C6.2001 16.2131 5.75368 15.4 5.3641 15.1819C5.04326 15.0105 4.58493 14.586 5.35218 14.575C6.07451 14.5631 6.58968 15.2396 6.76201 15.5146C7.58701 16.9006 8.90518 16.511 9.43135 16.2709C9.51202 15.675 9.75218 15.2745 10.0162 15.0453C7.9766 14.8161 5.84535 14.025 5.84535 10.5188C5.84535 9.52146 6.2001 8.69737 6.78493 8.05479C6.69326 7.82562 6.37243 6.88604 6.8766 5.62562C6.8766 5.62562 7.64385 5.38546 9.39743 6.56612C10.1437 6.35901 10.9147 6.25477 11.6891 6.25629C12.4683 6.25629 13.2474 6.35896 13.9808 6.56521C15.7334 5.37354 16.5016 5.62654 16.5016 5.62654C17.0058 6.88696 16.6849 7.82654 16.5933 8.05571C17.1772 8.69737 17.5329 9.51046 17.5329 10.5188C17.5329 14.037 15.3906 14.8161 13.351 15.0453C13.6829 15.3313 13.9698 15.8813 13.9698 16.7411C13.9698 17.9667 13.9579 18.9521 13.9579 19.262C13.9579 19.5021 14.1302 19.7881 14.5885 19.6965C16.4081 19.0821 17.9893 17.9126 19.1094 16.3526C20.2296 14.7926 20.8323 12.9206 20.8329 11C20.8329 5.93546 16.7308 1.83337 11.6662 1.83337Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_30_982">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.666138)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeProfile;

const EditProfile = ({
  user,
  toggleEdit,
}: {
  user: User;
  toggleEdit: () => void;
}) => {
  const [userNew, setUserNew] = useState<User>(user);
  const [errorMsg, setErrMsg] = useState<UserErrorMsg>({
    name: "",
    email: "",
    address: "",
    mobile: "",
    postal: "",
    occupation: "",
    about: "",
  });
  const validateForm = () => {
    let isValid = true;
    const err = { ...errorMsg };
    if (userNew.name === "") {
      err.name = "Name is required";
      isValid = false;
    } else {
      err.name = "";
    }
    if (userNew.email === "") {
      err.email = "Email is required";
      isValid = false;
    } else {
      err.email = "";
    }
    if (userNew.address === "") {
      err.address = "Address is required";
      isValid = false;
    } else {
      err.address = "";
    }
    if (userNew.mobile === "") {
      err.mobile = "Mobile is required";
      isValid = false;
    } else {
      err.mobile = "";
    }
    if (userNew.postal === "") {
      err.postal = "Postal is required";
      isValid = false;
    } else {
      err.postal = "";
    }
    if (userNew.occupation === "") {
      err.occupation = "Occupation is required";
      isValid = false;
    } else {
      err.occupation = "";
    }
    if (userNew.about === "") {
      err.about = "About is required";
      isValid = false;
    } else {
      err.about = "";
    }
    setErrMsg(err);
    console.log(isValid, err);
    return isValid;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (params: { userID: number; user: User }) => {
      const { userID, user } = params;
      console.log("BEEP");
      return updateEmployee(userID, user);
    },
    onError(e) {
      showError(`${e}`);
    },
    onSuccess() {
      toggleEdit();
      queryClient.invalidateQueries({ queryKey: ["user"] });
      showSuccess("User Updated");
    },
  });

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setUserNew({ ...userNew, [event.target.name]: event.target.value });
  };

  return (
    <div id="edit" className="p-8 m-10 bg-gray dark:bg-gray-4 rounded-lg">
      <div className="rounded p-5">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5">
            <TextInput
              title="Name"
              name="name"
              type="text"
              color="employee"
              defaultValue={userNew.name}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.name}
            />
            <TextInput
              title="Email"
              name="email"
              type="email"
              color="employee"
              defaultValue={userNew.email}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.email}
            />
            <TextInput
              title="Address"
              name="address"
              type="text"
              color="employee"
              defaultValue={userNew.address}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.address}
            />
            <TextInput
              title="Postal"
              name="postal"
              type="text"
              color="employee"
              defaultValue={userNew.postal}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.postal}
            />
            <TextInput
              title="Mobile Number"
              name="mobile"
              type="text"
              color="employee"
              defaultValue={userNew.mobile}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.mobile}
            />
            <TextInput
              title="Occupation"
              name="occupation"
              type="text"
              color="employee"
              defaultValue={userNew.occupation}
              handleInputChange={handleInputChange}
              errMessage={errorMsg.occupation}
            />
          </div>
          <div className="my-2">
            <div className="mb-6">
              <TextInput
                title="About you"
                name="about"
                type="text"
                defaultValue={userNew.about}
                handleInputChange={handleInputChange}
                errMessage={errorMsg.about}
              />
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button
              onClick={() => {
                if (validateForm())
                  mutate({ userID: userNew.id, user: userNew });
              }}
              disabled={isPending}
              type="submit"
              className=" bg-employee hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mt-1"
            >
              Update
            </button>
          </div>
        </div>
        <div className="my-3 w-96">
          <form
            action="/UploadDownload/UploadResume"
            method="post"
            encType="multipart/form-data"
          >
            <label
              htmlFor="ResumeFile"
              className="text-grey-darker text-sm font-bold mb-2 "
            >
              Upload Resume:
            </label>
            <input
              type="file"
              id="ResumeFile"
              name="filename"
              accept="application/pdf"
              className="block w-full mb-2 px-2 py-1 text-sm font-normal text-gray-4 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-4 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <input
              type="submit"
              defaultValue="Upload"
              className="bg-employee hover:bg-cyan-600 text-white font-bold mb-2 py-2 px-4 rounded m-1"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

const ViewProfile = ({ user }: { user: User }) => {
  return (
    <div
      className=" p-8 m-10 mx-auto grid gap-10 md:grid-cols-3 grid-cols-2"
      id="detail"
    >
      <div className="col-span-2 ">
        <h5 className="text-xl font-semibold">About Me</h5>
        <p className="mt-4.5">{user.about}</p>
      </div>
      <div className=" row-span-2 col-span-2 md:col-span-1">
        <div className=" bg-slate-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-4 p-6 sticky top-20">
          <h5 className="text-lg font-semibold">Personal Detail:</h5>
          <ul className="list-none mt-4">
            <li className="flex justify-between mt-3 items-center font-medium">
              <span>
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
                  className="h-4 w-4 text-slate-400 me-3 inline"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-slate-400 me-3">Email :</span>
              </span>
              <span>{user.email}</span>
            </li>
            <li className="flex justify-between mt-3 items-center font-medium">
              <span>
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
                  className="h-4 w-4 text-slate-400 me-3 inline"
                >
                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                  <rect x="2" y="7" width="20" height="5"></rect>
                  <line x1="12" y1="22" x2="12" y2="7"></line>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
                <span className="text-slate-400 me-3">D.O.B. :</span>
              </span>
              <span>25th Dec 2000</span>
            </li>
            <li className="flex justify-between mt-3 items-center font-medium">
              <span>
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
                  className="h-4 w-4 text-slate-400 me-3 inline"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="text-slate-400 me-3">Address :</span>
              </span>
              <span>{user.address}</span>
            </li>

            <li className="flex justify-between mt-3 items-center font-medium">
              <span>
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
                  className="h-4 w-4 text-slate-400 me-3 inline"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <span className="text-slate-400 me-3">Postal Code :</span>
              </span>
              <span>{user.postal}</span>
            </li>
            <li className="flex justify-between mt-3 items-center font-medium">
              <span>
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
                  className="h-4 w-4 text-slate-400 me-3 inline"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-slate-400 me-3">Mobile :</span>
              </span>
              <span>{user.mobile}</span>
            </li>
            <li className="mt-3 w-full bg-white dark:bg-slate-900 p-3 rounded-md shadow dark:shadow-gray-4">
              <div className="flex items-center mb-3">
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
                  className="h-8 w-8 text-slate-400"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <span className="font-medium ms-2">
                  {`${user.name.toLowerCase().split(" ").join("-")}-resume.pdf`}
                </span>
              </div>
              <Link
                className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 dark:border-emerald-600 text-white rounded-md w-full flex items-center justify-center"
                download=""
                to="/candidate-profile/assets/images/resume.pdf"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>{" "}
                Download CV
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <h5 className="text-xl font-semibold">Experience:</h5>
        <div className="flex mt-6">
          <div className="text-slate-400 font-semibold min-w-[80px] text-center">
            <img
              src="/src/Images/Company/ProfilePic/1.png"
              className="h-16 w-16 mx-auto mb-2 block"
              alt=""
            />{" "}
            2019-22
          </div>
          <div className="ms-4">
            <h5 className="text-lg font-medium mb-0">Full Stack Developer</h5>
            <span className="text-slate-400 company-university">
              HamroPatro - Nepal
            </span>
            <p className="text-slate-400 mt-2 mb-0">
              It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. One may speculate that over the
              course of time certain letters were added or deleted at various
              positions within the text.{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-6">
          <div className="text-slate-400 font-semibold min-w-[80px] text-center">
            <img
              src="/src/Images/Company/ProfilePic/3.png"
              className="h-16 w-16 mx-auto mb-2 block"
              alt=""
            />{" "}
            2017-19
          </div>
          <div className="ms-4">
            <h5 className="text-lg font-medium mb-0">Back-end Developer</h5>
            <span className="text-slate-400 company-university">
              Elsie - Austrlia
            </span>
            <p className="text-slate-400 mt-2 mb-0">
              It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. One may speculate that over the
              course of time certain letters were added or deleted at various
              positions within the text.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

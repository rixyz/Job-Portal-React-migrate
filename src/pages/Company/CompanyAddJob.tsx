import { Select } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Breadcrumbs from "../../Components/Breadcrumb";
import TextInput from "../../Components/TextInput";
import { createJob } from "../../service/JobService";
import { showError } from "../../service/notificationService";
import { Job } from "../../types/type";

const CompanyAddJob = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState<Job>({
    title: "",
    companyID: 1,
    location: "",
    salary: "",
    type: "",
    deadline: "",
    sponsor: "",
    vacancy: 5,
  });
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setJob({ ...job, [event.target.name]: event.target.value });
  };

  const { mutate: addJob } = useMutation({
    mutationFn: () => {
      return createJob(job);
    },
    onError(e) {
      showError(`${e}`);
    },
    onSuccess() {
      navigate("/company/job");
    },
  });

  return (
    <section className="relative mx-auto px-3 w-full  rounded-lg lg:max-w-[1280px] md:max-w-[1024px] sm:max-w-[640px] p-15 text-black dark:text-white">
      <Breadcrumbs title="Add Job" link="/" linkText="Jobs" current="Add" />
      <div className="rounded-xl flex flex-col ">
        <div>
          <label className="text-grey-darker text-sm font-bold" htmlFor="loc">
            Credit: 90
          </label>
          <TextInput
            title="Title"
            name="title"
            type="text"
            color="company"
            placeholder="Title(Developer,Manager,Teacher,Painter)"
            handleInputChange={handleInputChange}
            errMessage=""
          />
          <div className="flex w-full justify-between">
            <TextInput
              title="Salary"
              name="salary"
              type="number"
              placeholder="in Nepali Rupees(NRS)"
              color="company"
              handleInputChange={handleInputChange}
              errMessage=""
            />
            <TextInput
              title="Vacancy"
              name="vacancy"
              type="number"
              color="company"
              handleInputChange={handleInputChange}
              errMessage=""
            />
          </div>
          <TextInput
            title="Deadline"
            name="deadline"
            type="date"
            placeholder="Deadline"
            color="company"
            handleInputChange={handleInputChange}
            errMessage=""
          />
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="about"
            >
              Job Description
            </label>
            <textarea
              name="about"
              id="about"
              placeholder="Job Description"
              title="3-1000 letters"
              className="w-full p-2 rounded-lg border-2 border-gray outline-none focus:border-company"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="requirement"
            >
              Job Requirements
            </label>
            <textarea
              name="requirement"
              id="requirement"
              placeholder="Job Requirement"
              title="3-1000 letters"
              className="w-full p-2 rounded-lg border-2 border-gray outline-none focus:border-company"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="loc"
            >
              Location
            </label>

            <Select
              onChange={(item) => setJob({ ...job, location: item ?? "" })}
              placeholder="Pick Location"
              data={[
                "Online (Remote)",
                "Achham",
                "Arghakhanchi",
                "Baglung",
                "Baitadi",
                "Bajhang",
                "Bajura",
                "Banke",
                "Bara",
                "Bardiya",
                "Bhaktapur",
                "Bhojpur",
                "Chitwan",
                "Dadeldhura",
                "Dailekh",
                "Dang",
                "Darchula",
                "Dhading",
                "Dhankuta",
                "Dhanusa",
                "Dolakha",
                "Dolpa",
                "Doti",
                "Eastern Rukum",
                "Gorkha",
                "Gulmi",
                "Humla",
                "Ilam",
                "Jajarkot",
                "Jhapa",
                "Jumla",
                "Kailali",
                "Kalikot",
                "Kanchanpur",
                "Kapilvastu",
                "Kaski",
                "Kathmandu",
                "Kavrepalanchowk",
                "Khotang",
                "Lalitpur",
                "Lamjung",
                "Mahottari",
                "Makwanpur",
                "Manang",
                "Morang",
                "Mugu",
                "Mustang",
                "Myagdi",
                "Nawalpur",
                "Nuwakot",
                "Okhaldhunga",
                "Palpa",
                "Panchthar",
                "Parasi",
                "Parbat",
                "Parsa",
                "Pyuthan",
                "Ramechhap",
                "Rasuwa",
                "Rautahat",
                "Rolpa",
                "Rupandehi",
                "Salyan",
                "Sankhuwasabha",
                "Saptari",
                "Sarlahi",
                "Sindhuli",
                "Sindhupalchok",
                "Siraha",
                "Solukhumbu",
                "Sunsari",
                "Surkhet",
                "Syangja",
                "Tanahu",
                "Taplejung",
                "Tehrathum",
                "Udayapur",
                "Western Rukum",
              ]}
              searchable
            />
          </div>

          <div className="mb-6 flex justify-between gap-5">
            <div className="w-1/5">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Boosted Post
              </label>
              <Select
                onChange={(item) => setJob({ ...job, sponsor: item ?? "" })}
                placeholder="Boosted Post"
                data={["Normal", "Silver (+10 credit)", "Gold (+20 credit)"]}
              />
            </div>
            <div className="w-1/5">
              <label className="block text-grey-darker text-sm font-bold mb-2">
                Type of Job
              </label>
              <Select
                onChange={(item) => setJob({ ...job, type: item ?? "" })}
                placeholder="Type of job"
                data={[
                  "Full-Time Job",
                  "Part-Time Job",
                  "One-Time Job",
                  "Temporary Job",
                ]}
              />
            </div>
          </div>
          <br />

          <div className="mb-1">
            <p>&nbsp;</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => addJob()}
              type="submit"
              className="bg-company hover:bg-violet-500 text-white font-bold py-2 px-4 rounded"
            >
              Add Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAddJob;

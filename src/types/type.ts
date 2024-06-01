export type Job = {
  id?: number;
  title: string;
  companyName?: string;
  type: string;
  location: string;
  salary: string;
  companyID: number;
  vacancy: number;
  sponsor: string;
  deadline: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  address: string;
  mobile: string;
  postal: string;
  occupation: string;
  about: string;
};

export type Application = {
  userID: number;
  name: string;
  occupation: string;
  job: string;
  Number: string;
  status: string;
  id: number;
};

export type UserErrorMsg = {
  name: string;
  email: string;
  address: string;
  mobile: string;
  postal: string;
  occupation: string;
  about: string;
};

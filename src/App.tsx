import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import PrivateRoute from "./Routes/PrivateRoute";
import Layout from "./Theme/Layout";
import Home from "./pages/Home";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./react-query";

import EmployeeLayout from "./Theme/EmployeeLayout";
import EmployeeAppliedJobs from "./pages/Employee/EmployeeAppliedJobs";
import EmployeeHome from "./pages/Employee/EmployeeHome";
import EmployeeJobInfo from "./pages/Employee/EmployeeJobInfo";
import EmployeeJobList from "./pages/Employee/EmployeeJobList";
import EmployeeLogin from "./pages/Employee/EmployeeLogin";
import EmployeeProfile from "./pages/Employee/EmployeeProfile";

import CompanyLayout from "./Theme/Companylayout";
import CompanyAddJob from "./pages/Company/CompanyAddJob";
import CompanyApplication from "./pages/Company/CompanyApplication";
import CompanyEmployeeList from "./pages/Company/CompanyEmployeeList";
import CompanyHome from "./pages/Company/CompanyHome";
import CompanyRemoveJob from "./pages/Company/CompanyJobList";
import CompanyLogin from "./pages/Company/CompanyLogin";
import CompanyProfile from "./pages/Company/CompanyProfile";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "../src/assets/fontawesome/css/fontawesome-all.min.css";
import "./App.css";
import "./index.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Notifications position="top-right" zIndex={1000} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="employee" element={<EmployeeLayout />}>
                <Route
                  path="home"
                  element={
                    <PrivateRoute component={EmployeeHome} type="employee" />
                  }
                />
                <Route path="jobs/list" element={<EmployeeJobList />} />
                <Route path="jobs/info/:jobID" element={<EmployeeJobInfo />} />
                <Route
                  path="jobs/applied"
                  element={
                    <PrivateRoute
                      component={EmployeeAppliedJobs}
                      type="employee"
                    />
                  }
                />
                <Route path="profile" element={<EmployeeProfile />} />
              </Route>

              <Route path="company" element={<CompanyLayout />}>
                <Route
                  path="home"
                  element={
                    <PrivateRoute component={CompanyHome} type="company" />
                  }
                />
                <Route
                  path="jobs/add"
                  element={
                    <PrivateRoute component={CompanyAddJob} type="company" />
                  }
                />
                <Route
                  path="job"
                  element={
                    <PrivateRoute component={CompanyRemoveJob} type="company" />
                  }
                />
                <Route
                  path="application/list"
                  element={
                    <PrivateRoute
                      component={CompanyApplication}
                      type="company"
                    />
                  }
                />
                <Route
                  path="employee"
                  element={
                    <PrivateRoute
                      component={CompanyEmployeeList}
                      type="company"
                    />
                  }
                />
                <Route path="profile" element={<CompanyProfile />} />
              </Route>
              <Route path="/home" element={<Home />} />
              <Route path="/employee/auth" element={<EmployeeLogin />} />
              <Route path="/company/auth" element={<CompanyLogin />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;

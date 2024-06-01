# Job Portal Project

## Introduction

This project is a job portal built using modern web technologies. It allows users to search for jobs, view job details, and apply for jobs. 

## Features

- User authentication and authorization
- Job search and filtering
- Job detail view
- Job application process
- Employer interface for job management
- Dark Theme
- Responsive design

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/job-portal.git
   cd job-portal
   ```

2. **Install dependencies**:
   ```sh
   pnpm install
   ```

3. **Setup environment variables**:
   Create a `.env` file in the root of the project and add the necessary environment variables. Example:
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Start the development server**:
   ```sh
   pnpm dev
   ```

5. **Build for production**:
   ```sh
   pnpm build
   ```

## Usage

After setting up the project, you can access the job portal at `http://localhost:3000`. You can create an account, search for jobs, view job details, and apply for jobs.

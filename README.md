![Descriptive alt text](./public/images/Time4Care1.png)

<p align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TypeScript-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/-shadcn/ui-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/-Appwrite-F43E5F?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
</p>

<pre align="center"> <span style="background-color:#1E3A8A;color:white;padding:10px 20px;border-radius:5px;font-size:54px;">HealthCare Management System</span> </pre>

## Project Description

`HealthCare Management System` is a digital platform designed to streamline operations in healthcare facilities. It allows patients to easily register, book, and manage appointments with doctors. Built with Next.js, the system includes administrative tools for scheduling, confirming, and canceling appointments, along with integrated SMS notifications to keep patients informed.

## Features 🔋

👉 Register as a Patient: Users can sign up and create a personal profile as a patient.

👉 Book a New Appointment with Doctor: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

👉 Manage Appointments on Admin Side: Administrators can efficiently view and handle all scheduled appointments.

👉 Confirm/Schedule Appointment from Admin Side: Admins can confirm and set appointment times to ensure they are properly scheduled.

👉 Cancel Appointment from Admin Side: Administrators have the ability to cancel any appointment as needed.

👉 Send SMS on Appointment Confirmation: Patients receive SMS notifications to confirm their appointment details.

👉 Complete Responsiveness: The application works seamlessly on all device types and screen sizes.

👉 File Upload Using Appwrite Storage: Users can upload and store files securely within the app using Appwrite storage services.

👉 Manage and Track Application Performance Using Sentry: The application uses Sentry to monitor and track its performance and detect any errors.

## Tech Stack ⚙️

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio

## Getting Started 🤸

#### Clone the repository

```bash
git clone https://github.com/irabruce10/time4care.git
cd time4care
```

#### Installation

Install the project dependencies using npm:

```bash
npm install
```

#### Set Up Environment Variables

Create a new file named `.env.local` in the root of your project and add the following content:

```bash
#APPWRITE
NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=112233
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/) website.

#### Running the Project

```bash
npm run dev
```

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Appwrite.

import AppointmentForm from '@/components/forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patient.action';
import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import React from 'react';

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  Sentry.setExtra('user_view_new-appointment', patient.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[860px] flex-1 justifiy-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
            //setOpen={() => null}
          />

          <div className=" text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ©2025 Time4Care All rights reserved
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        alt="hero"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}

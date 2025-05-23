import { Button } from '@/components/ui/button';
import { Doctors } from '@/constants';
import { getAppointment } from '@/lib/actions/appointment.action';
import { getUser } from '@/lib/actions/patient.action';
import { formatDateTime } from '@/lib/utils';
import * as Sentry from '@sentry/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const success = async ({
  params: { userId },
  searchParams,
}: SearchParamProps) => {
  const appointmentId = (searchParams.appointmentId as string) || '';
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician,
  );
  const user = await getUser(userId);
  Sentry.setExtra('user_view_new-appointment', user.name);

  return (
    <div className="flex h-screen max-h-screen px-[-5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="hero"
            width={1000}
            height={1000}
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            alt="success"
            width={300}
            height={280}
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been sent successfully submitted!
          </h2>

          <p>We'll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Request appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image ?? ''}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
            <div className="flex gap-2">
              <Image
                src="/assets/icons/calendar.svg"
                alt="calendar"
                width={24}
                height={24}
              />
              <p>{formatDateTime(appointment.schedule).dateTime}</p>
            </div>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn">
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="copyright "> ©2025 Time4Care All rights reserved</p>
      </div>
    </div>
  );
};
export default success;

import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.action';
import Image from 'next/image';
import React from 'react';
import * as Sentry from '@sentry/nextjs';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  Sentry.setExtra('user_view', user.name);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container  ">
        <div className="sub-container max-w-[860px] flex-col flex-1 py-10">
          <div className="flex items-center mb-12 space-x-3">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="Time4Care logo"
              width={40}
              height={40}
              className="block"
            />
            <h1 className="text-2xl font-bold">Time4Care</h1>
          </div>

          <RegisterForm user={user} />
          <div className=" text-14-regular mt-20 flex justify-between">
            <p className="copyright  py-10">
              ©2025 Time4Care All rights reserved
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        alt="hero"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;

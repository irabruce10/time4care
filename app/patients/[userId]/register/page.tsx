import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container  ">
        <div className="sub-container max-w-[860px] flex-col flex-1 py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
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

import PatientForm from '@/components/forms/PatientForm';
import PassKeyModal from '@/components/PassKeyModal';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px]">
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

          <PatientForm />
          <div className=" text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              ©2025 Time4Care All rights reserved
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        alt="hero"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}

import { DataTable } from '@/components/table/DataTable';
import StatCard from '@/components/StatCard';
import { getRecentAppointmentList } from '@/lib/actions/appointment.action';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { columns } from '@/components/table/columns';

const Admin = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <div className="flex items-center mb-2 space-x-3">
            <Image
              src="/assets/icons/logo-icon.svg"
              alt="Time4Care logo"
              width={32}
              height={162}
              className="block h-8 w-fit"
            />
            <h1 className="text-2xl font-bold">Time4Care</h1>
          </div>
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome</h1>
          <p className="text-14-regular">Start day by managing your patients</p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments?.scheduledCount}
            label="Scheduled Appointments"
            icon="/assets/icons/appointments.svg"
          />

          <StatCard
            type="pending"
            count={appointments?.pendingCount}
            label="Pending Appointments"
            icon="/assets/icons/pending.svg"
          />

          <StatCard
            type="cancelled"
            count={appointments?.cancelledCount}
            label="Cancelled Appointments"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;

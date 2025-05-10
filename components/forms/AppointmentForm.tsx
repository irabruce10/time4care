'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { set, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@/components/ui/form';
import CustomFormField from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { FormFieldType } from './PatientForm';
import { Doctors } from '@/constants';
import { SelectItem } from '../ui/select';
import Image from 'next/image';
import { createAppointment } from '@/lib/actions/appointment.action';
import { getAppointmentSchema } from '@/lib/validation';

function AppointmentForm({
  userId,
  patientId,
  type,
}: {
  userId: string;
  patientId: string;
  type: 'create' | 'cancel' | 'schedule';
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      primaryPhysician: '',
      schedule: new Date(),
      reason: '',
      note: '',
      cancellationReason: '',
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    console.log('values', values);
    setIsLoading(true);
    let status;
    switch (type) {
      case 'cancel':
        status = 'cancelled';
        break;
      case 'schedule':
        status = 'scheduled';
        break;
      default:
        status = 'pending';
        break;
    }

    try {
      if (type === 'create' && patientId) {
        const appointmentData = {
          userId,
          patient: patientId,
          primaryPhysician: values.primaryPhysician,
          schedule: new Date(values.schedule),
          reason: values.reason!,
          note: values.note,
          status: status as Status,
        };
        const appointment = await createAppointment(appointmentData);
        console.log(appointment);

        if (appointment) {
          form.reset();
          router.push(
            `/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`,
          );
        }
      }
    } catch (error) {
      // console.log(error);
      console.log('error', error);
    }
    setIsLoading(false);
  }

  let buttonLabel;

  switch (type) {
    case 'cancel':
      buttonLabel = 'Cancel Appointment';
      break;
    case 'create':
      buttonLabel = 'Create Appointment';
      break;
    case 'schedule':
      buttonLabel = 'Schedule Appointment';
      break;
    default:
      buttonLabel = 'Schedule Appointment';
      break;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section>
          <h1 className="header">New Appointment</h1>
          <p className="text-dark-700">
            Request a new appointment in less than 1 minutes
          </p>
        </section>

        {type !== 'cancel' && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="select a Doctor"
            >
              {Doctors.map((doctor) => (
                <SelectItem key={doctor.name} value={doctor.name}>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={32}
                      height={32}
                      className=" border-dark-500 rounded-full"
                    />
                    <p>{doctor.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected appointment date"
              showTimeSelector
              dateformat="MM/dd/yyyy - h:mm aa"
            />

            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for appointment"
                placeholder="Enter reason for appointment"
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Notes"
                placeholder="Enter notes"
              />
            </div>
          </>
        )}

        {type === 'cancel' && (
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="cancellationReason"
            label="Reason for cancellation"
            placeholder="Enter reason for cancellation"
          />
        )}

        <SubmitButton
          isLoading={isLoading}
          className={`${
            type === 'cancel' ? 'shad-danger-btn' : 'shad-primary-btn'
          } w-full`}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
}

export default AppointmentForm;

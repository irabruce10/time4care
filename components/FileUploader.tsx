'use client ';

import { convertFileToUrl } from '@/lib/utils';
import { on } from 'events';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

export const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="Uploaded File"
          width={1000}
          height={1000}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            alt="Uploaded File"
            height={40}
            width={40}
            className="max-h-[400px] overflow-hidden object-cover"
          />

          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Drag and drop</span> or{' '}
              <span>select a file</span>
            </p>
            <p className="text-12-regular text-dark-600">
              PNG, JPG, JPEG up to 10MB
            </p>
          </div>
        </>
      )}

      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

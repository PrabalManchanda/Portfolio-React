import React from 'react';
import { SanitizedCertification } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import { FaCertificate } from 'react-icons/fa';

const CertificationCard = ({
  certifications,
  loading,
}: {
  certifications: SanitizedCertification[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <li key={index} className="mb-4 flex items-center space-x-3">
        {skeleton({ widthCls: 'w-5', heightCls: 'w-5', shape: 'rounded-full' })}
        <div>
          {skeleton({ widthCls: 'w-40', heightCls: 'h-4', className: 'mb-1' })}
          {skeleton({ widthCls: 'w-28', heightCls: 'h-3' })}
        </div>
      </li>
    ));
  };

  const renderCertifications = () => {
    return certifications.map((cert, index) => (
      <li key={index} className="mb-4 flex items-center space-x-3">
        <FaCertificate className="text-primary min-w-[1rem]" />
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline text-primary hover:text-secondary transition"
        >
          {cert.name}
        </a>
      </li>
    ));
  };

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Certifications</span>
            )}
          </h5>
        </div>
        <div className="px-4 py-2 text-base-content text-opacity-70">
          <ul className="list-none">
            {loading ? renderSkeleton() : renderCertifications()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;

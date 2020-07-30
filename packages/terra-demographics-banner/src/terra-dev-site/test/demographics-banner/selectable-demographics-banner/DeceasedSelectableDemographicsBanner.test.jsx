import React, { useState } from 'react';
import Image from 'terra-image';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';
import demographicsImage from '../../../doc/assets/demographicsCat.jpg';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics Banner Clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="deceased-demographics-banner"
        applicationContent={<span className="risk-score">5%</span>}
        age="27 Years"
        dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
        deceasedDate={{ value: 'March 12, 2020', ariaLabel: 'March 12, 2020' }}
        gender="M"
        genderAria="Male"
        identifiers={[
          {
            label: 'MRN',
            value: '12343',
            ariaLabel: 'MRN 1 2 3 4 5',
          },
          {
            label: 'REA',
            value: '3JSDA',
            ariaLabel: 'R E A 3JSDA',
          },
        ]}
        personName="Johnathon Doe"
        photo={<Image alt="My Cat" src={demographicsImage} />}
        preferredFirstName="John"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};
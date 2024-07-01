import React from 'react';
import compliance from '../assets/images/pictures/agric_cert.PNG'
// import compliance from '../assets/images/pictures/agric_cert.PNG'
import agric_cert from '../assets/images/pictures/exporter_certificate.PNG'

const ComplianceRegulation = () => (
  <div>

    <h3 className='text-3xl my-3'>Certiication</h3>

    <div className='max-w-[1600px] flex justify-around gap-10 flex-col md:flex-row'>
      <div className='flex-1 max-w-3xl'>
      <img src={compliance}  width="100%" className="h-full" />

      </div>
      <div className='flex-1 max-w-3xl'>
      <img src={agric_cert}  width="100%" className='h-full' />

      </div>


    </div>
  </div>
);

export default ComplianceRegulation;

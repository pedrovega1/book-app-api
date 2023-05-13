import React from 'react';
import Spinner from 'react-spinner-material';

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Spinner radius={80} color={'#333'} stroke={10} visible={true} />
      <p className='text-gray-700 text-2xl font-semibold mt-8'>Loading...</p>
    </div>
  );
};

export default Loader;

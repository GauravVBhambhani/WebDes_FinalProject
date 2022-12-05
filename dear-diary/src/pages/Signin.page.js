import React from 'react'
import Signin from '../components/signin/Signin';

const SplitScreen = () => {
  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-rows-12 text-white text-4xl  md:grid-cols-12'>

          {/* Left section */}
          <div className='w-full h-full centered row-span-4 md:col-span-4'>
            <img src={require('../components/assets/signin_landing.png')} alt='Landing page' className='text-black h-full w-full '/>
          </div>

          {/* Right section */}
          <div className='w-full h-full text-black centered row-span-8 md:col-span-8 pt-24'>
            <Signin />
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}

export default SplitScreen;

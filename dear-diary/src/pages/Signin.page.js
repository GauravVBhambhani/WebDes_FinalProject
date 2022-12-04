import React from 'react'
import Signin from '../components/signin/Signin';

const SplitScreen = () => {
  return (
    <React.Fragment>
      <section>
        <div className='w-screen h-screen grid grid-cols-12 text-white text-4xl'>

          {/* Left section */}
          <div className='w-full h-full centered col-span-4'>
            <img src={require('../components/assets/signin_landing.png')} alt='Landing page' className='text-black h-full w-full '/>
          </div>

          {/* Right section */}
          <div className='w-full h-full text-black centered col-span-8'>
            <Signin />
          </div>

        </div>
      </section>
    </React.Fragment>
  );
}

export default SplitScreen;

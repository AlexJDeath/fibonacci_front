import React from 'react';

function ContentLayout({children}) {
  return (
    <div className='wrapper'>
      <div className={'sidebar-wrapper'} data-simplebar={'true'}>
        <ul className={'metismenu'} id={'menu'}>

        </ul>
      </div>
      <header className={'top-header'}>

      </header>


    </div>
  );
}

export default ContentLayout;

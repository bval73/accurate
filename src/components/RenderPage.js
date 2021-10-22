import React from 'react';

import PageSection from './PageSection';

const RenderPage = ({datas}) => {
//  debugger
  return (
    datas.map(data => 
// Don't forget the key ;-)
      <div className='col-md-6' key={data._id}> 
        <PageSection data={data} />
      </div> 
    )
  );
}

export default RenderPage;

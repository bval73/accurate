import React from 'react';

import PageSection from './PageSection';

const RenderPage = ({datas}) => {
  return (
    datas.map(data => 
// Don't forget the key ;-)
      <div className={data.className} key={data._id}> 
        <PageSection data={data} />
      </div> 
    )
  );
}

export default RenderPage;


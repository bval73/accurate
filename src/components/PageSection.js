import React from 'react';

const PageSection = ({data}) => (
  <div>
    {data.image ? <img src={data.image} className="img-fluid" alt="" /> : null}
    {data.p.map((p, index) => 
      <p key={index}>{p}</p>
    )}
  </div>

)

export default PageSection;

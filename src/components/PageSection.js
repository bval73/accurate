import React from 'react';

const PageSection = ({data}) => (
//  console.log('PageSection data is ', data);
    <div>
      {/* {data.sectionTitle ?<h2> {data.sectionTitle} </h2> : <h2 style={{'marginTop':'10vh'}}></h2>} */}
      {data.image ? <img src={data.image} className="img-fluid" alt="" /> : null}
      {data.p.map((p, index) => 
        <p key={index}>{p}</p>
      )}
    </div>

)

export default PageSection;

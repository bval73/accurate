import React, { Component } from 'react';

class RoofWash extends Component {
  render() {
    return (
      <section className="row">
        <h1>Roof Wash</h1>
          <div className="col-md-6">
            <img src="/images/lichen.jpeg " className="img-fluid" alt="" /> 
          </div>
          <div className="col-md-6">
            <h2>Remove unattractive dark stains (Lichen).</h2>
            <p>
               Roof cleaning is not just about increasing curb appeal although that is another reason to have the dark stains removed. Better reasons to have your roof cleaned is for the stability of the roof itself and health reasone. Black streaks are usually caused by algae growing on your roof surface. Algae can grow even in dry conditions, so constant exposure to sunlight does not prevent black algae from ruining the appearance of your home.
            </p>
            <p>
             Dark stains can also be caused by debris falling down during harsh weather, and water stains. Aside from being unattractive, dark stains make your roofing less energy efficient. It begins to absorb more heat, making indoor insulation and cooling more expensive.
            </p>
            </div>
            <div className="col-md-6">
              <h2>Prevent water damage due to moss and mold growth.</h2>
              <p>
                Moss loves to grow on roofs. Unfortunately, surface cleaning won’t cut it. Moss easily grows underneath shingles and creates pits in the roof’s surface. If left untreated, moss can do extensive damage across the entire roof, leading to internal water damage.
              </p>
              <p>
                Algae can also feed off limestone in asphalt shingles, resulting in weak roofing and further damage. Internal molding and water damage are inconvenient, costly to repair, and even unhealthy.
              </p>
            </div>
            <div className="col-md-6">
              <img src="/images/weather-affect-mold_rotting-wood-mold.jpg " className="img-fluid" alt="roof damage caused by mold" /> 
            </div>
            <div className="col-md-6">
            <h2>Keep the warranty on your roof.</h2>
            <p>
              Your roof is one of the most expensive parts of the home to repair or to replace. Having a warranty on your roof helps a lot when it comes to expenses. However, some warranties are only honored if you maintain your roofing. If you don’t put any effort in roof maintenance, then you might have a problem negotiating with your manufacturer.
            </p>
          </div>
        </section>
    );
  }
}

export default RoofWash;

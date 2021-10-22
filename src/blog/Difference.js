import React, { Component } from 'react';

//import connect from '../store/connect';
import { connect } from 'react-redux';

class Intro extends Component {
  render() {
    document.title = 'The diferences between Pressure, Power and Soft Wash'
    return (
      <div>
        <h1>Power Wash vs Pressure Wash vs Soft Wash</h1>
        <h2>What is Soft Washing</h2>
        <p>
          Now, you may be thinking that soft washing has nothing to do with pressure washing. Ironically, pressure washers are used to soft wash, but they are modified to lower the PSI, or pressure per square inch.
        </p>
        <p> 
          Soft washing is done using less than 500 PSI for rinsing or cleaning application. The tip of the pressure washer is replaced with one that widens the spray, therefore dropping the point of pressure. On top of this, soft washing utilizes special cleaning solutions to break down dirt and organisms living on surfaces. These cleaning solutions are eco-friendly and will not strip protective coatings on your home's exterior. Soft washing methods are preferred in a variety of situations over pressure washing, including on surfaces like:
        </p>
        <ul>
          <li>Asphalt shingles</li>
          <li>Cedar shake siding</li>
          <li>Wood panel siding</li>
          <li>Outdoor rooted plants</li>
          <li>Stucco and coquina</li>
          <li>Outdoor wood furniture</li>
          <li>Screens, enclosures, and lanais</li>
          <li>Vinyl siding</li>
        </ul>
        <h2>Power Wash vs Pressure Wash</h2>
        <p>
          As far as the water pressure is concerned, they both use similar amounts of pressure. How much pressure really just depends on the type of machine; a household unit won’t offer up as much power as an industrial machine.
        </p>
        <p>
          If we’re talking strictly about the types of the machines, there is one key element that differentiates a power washer from a pressure washer: a heating element. Both machines create a powerful stream of high-pressure water, but a power washer also heats up the water. This might seem like a small difference, but it actually makes a huge difference in how each is used.
        </p>
        <h2>What is Power Washing?</h2>
        <p>
          A power washer uses a high-pressure stream of very hot water to blast away dirt and materials from outdoor surfaces. The combination of high pressure and the temperature of the water make it better at removing all those truly stuck on materials from surfaces. It’s great for removing residue like salt, mildew, and mold from outdoor patios, decks, driveways, and more. The added heat also makes it particularly good at removing things like chewing gum from sidewalks. Power washing is also exceptionally great for handling grease stains on driveways or garage floors.
        </p>
        <p>
          It’s also useful for helping to control weeds and moss—the powerful blast of hot water can kill them and stop them from growing back right away. Power washing is ideal for any situation where the surface is heavily saturated or has a lot of dirt or other matter to clean off. Essentially, power washing is the more heavy duty option.
        </p>
        <h2>What is Pressure Washing?</h2>
        <p>
          Pressure washing is what you’ve most likely used at your home before. It uses the same high-pressure water blast as power washing but doesn’t use heated water. This regular temperature water still does an amazing job at blasting away dirt but doesn’t perform as well against moss, mold, or other tough stuck on substances. It still does an amazing job, but might not be able to get rid of tough stains on concrete.
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}

export default connect(mapStateToProps)(Intro);

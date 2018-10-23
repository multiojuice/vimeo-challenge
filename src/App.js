import React, { Component } from 'react';
import DataContainer from './components/DataContainer';

export const ORIENTATION_CONSTANTS = {
  RIGHT: 'right',
  LEFT: 'left'
}

const data = [
  {
    imageUrl: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  },
  {
    imageUrl: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  },
  {
    imageUrl: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.RIGHT
  }
];

class App extends Component {
  render() {
    return (
      <div>
          <DataContainer {...data[0]} />
      </div>
    );
  }
}

export default App;

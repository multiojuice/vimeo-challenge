import React, { Component } from 'react';
import ColoredSection from './components/ColoredSection';

export const ORIENTATION_CONSTANTS = {
  RIGHT: 'right',
  LEFT: 'left'
}

const headerData = [
  {
    imageUrl: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
    title: 'Random 1',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  }
]

const bottomData = [
  {
    imageUrl: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
    title: 'Random 2',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  },
  {
    imageUrl: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
    title: 'Random 3',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.RIGHT
  }
];

class App extends Component {
  render() {
    return (
      <div>
          <ColoredSection data={headerData} color="white"/>
          <ColoredSection data={bottomData} color="green" />
      </div>
    );
  }
}

export default App;

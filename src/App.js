import React, { Component } from 'react';
import ColoredSection from './components/ColoredSection';
import Carousel from './components/Carousel';
import {
  Header,
  Button
} from './StyledComponents';

export const ORIENTATION_CONSTANTS = {
  RIGHT: 'right',
  LEFT: 'left'
}

const headerData = [
  {
    imageUrl: 'https://i.vimeocdn.com/video/595198868_505x160.jpg',
    textColor: 'black',
    title: 'Random 1',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  }
]

const bottomData = [
  {
    imageUrl: 'https://i.vimeocdn.com/video/590587169_530x315.jpg',
    textColor: 'white',
    title: 'Random 2',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.LEFT
  },
  {
    imageUrl: 'https://i.vimeocdn.com/video/589972810_530x315.jpg',
    textColor: 'white',
    title: 'Random 3',
    description: 'so;dfjaodsji foasijdfo ijasdpoif jpoadsij fpoiasjd pofijasdpo ijfpaosdijfpjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjaspoidfjasdoijfpadsijfpi uadsfpo ujadpsiufj padsoij fpoiasjd poifjapsdo ijfpoi adsjpfoij padsoif padsf poijadspofij podsij fpoisajd poijdsfpo jaspdoij',
    orientation: ORIENTATION_CONSTANTS.RIGHT
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false
    }
  }

  toggleCarousel = () => {
    const { showCarousel } = this.state;
    this.setState({showCarousel: !showCarousel})
  }

  render() {
    const { showCarousel } = this.state;

    return (
      <div>
        <Header>
          <Button onClick={this.toggleCarousel}>
            Click here to see the other part of coding challenge!
          </Button>
        </Header>
        { showCarousel ?
          (
            <Carousel items={bottomData}/>
          ) : (
            <div>
                <ColoredSection data={headerData} color1="white" color2="white" />
                <ColoredSection data={bottomData} color1="black" color2="white" />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ColoredSection from './components/ColoredSection';
import Carousel from './components/Carousel';
import {
  Header,
  Button,
  FullPage
} from './StyledComponents';

export const ORIENTATION_CONSTANTS = {
  RIGHT: 'right',
  LEFT: 'left'
}

const ACCESS_TOKEN = '0c9de60ed26319d172042037ae22195e';

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

  componentDidMount() {
    fetch(`https://api.vimeo.com/videos?query=vimeo&per_page=4`, 
    { headers: { Authorization: 'Bearer ' + ACCESS_TOKEN } })
    .then(response => response.json())
    .then(data => { 
      const content = data.data.map((item) => {
        return {
          imageUrl: item.pictures.sizes.slice(-1).pop().link,
          title: item.name,
          description: item.description
        }
      })
      console.warn('Vimeo', content); this.setState({ content })});
  }

  toggleCarousel = () => {
    const { showCarousel } = this.state;
    this.setState({showCarousel: !showCarousel})
  }

  render() {
    const { showCarousel, content } = this.state;

    if(!content) return <div style={{'fontSize': '60px', 'textAlign': 'center'}}>Awaiting Vimeo API Data (hooked up to the second section)</div>

    return (
      <div style={{width: '100%', height: '100%'}}>
      <Header>
          <Button onClick={this.toggleCarousel}>
            Click here to see the other part of coding challenge!
          </Button>
        </Header>
        { showCarousel ?
          (
            <FullPage>
              <Carousel items={this.state.content}/>
            </FullPage>
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

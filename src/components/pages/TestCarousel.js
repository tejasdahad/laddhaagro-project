import React,{useState} from 'react'
import { red, blue, green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Slide } from 'material-auto-rotating-carousel';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

export const carouselSlidesData = [
    {
      image: "/images/coupler.jpg",
      author: "Coupler",
      subtitle:"It is widely used"
    }, {
      image: "/images/elbow.jpg",
      author: "Elbow",
      subtitle:"It is widely used"
    }, {
      image: "/images/drip6.jpg",
      author: "Drips",
      subtitle:"It is widely used"
    }, {
      image: "/images/nonisi.jpg",
      author: "Pipes",
      subtitle:"It is widely used"
    }, {
      image: "/images/pvc.jpg",
      author: "ISI PVC Pipes",
      subtitle:"It is widely used"
    }, {
      image: "/images/laddha.jpg",
      author: "Inline drips",
      subtitle:"It is widely used"
    }, {
      image: "/images/drip3.jpg",
      author: "Farm with drip irrigation system",
      subtitle:"It is widely used"
    }
];

const TestCarousel = () => {
    const [state,setState]= useState(false);

    return (
        <div style={{ position: 'relative', width: '100%', height: state&&500 }}>
        <Button variant="contained" style={{backgroundColor:"green", color:"white"}} onClick={() => setState(true)}>Gallery</Button>

            <AutoRotatingCarousel
                open={state}
                landscape={true}
                style={{ position: 'absolute' }}
                onStart={() => setState(true)}
                onClose={() => setState(false)}
            >
                
                {carouselSlidesData.map(d => <Slide
                    media={<img src={d.image} width="80%" style={{paddingTop:10,paddingBottom:10}} />}
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title={d.author}
                    subtitle={d.subtitle}
                    />)}
{/*                <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
                mediaBackgroundStyle={{ backgroundColor: red[400] }}
                style={{ backgroundColor: red[600] }}
                title='This is a very cool feature'
                subtitle='Just using this will blow your mind.'
                />
                <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
                mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                style={{ backgroundColor: blue[600] }}
                title='Ever wanted to be popular?'
                subtitle='Well just mix two colors and your are good to go!'
                />
                <Slide
                media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
                mediaBackgroundStyle={{ backgroundColor: green[400] }}
                style={{ backgroundColor: green[600] }}
                title='May the force be with you'
                subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                />
*/}
            </AutoRotatingCarousel>
        </div>
    )
}

export default TestCarousel;

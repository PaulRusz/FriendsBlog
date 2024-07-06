import Button from './Button'; 
import '../App.css';
import '../styles/VideoSection.css';
import '../pages/HomePage/';
import video from '/Video.mp4';

function Video () {
    return (
        <div className='video-container'>
            <video autoPlay loop muted>
                <source src= {video} type='video/mp4'/>
            </video>
            <h1 className='video-visible'>LETS BLOG TOGETHER!</h1>
            <p className='video-visible'>What are you waiting for?</p>
            <div className='video-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button> 
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Login <i className='far fa-play-circle'></i>
            </Button> 
            </div>
        </div>
    )
}

export default Video;
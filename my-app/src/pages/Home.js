import icon from '../images/icon_pic.png';
import background from '../images/home-background.jpg';
import '../styles/Home.css';

function Home() {
	return (
		<div>
			<img className="background" src={background} resizeMode="stretch" />
			<navigator>
				<img className="icon" src={icon} />
				<a href="/" className="home-button">
					Home
				</a>
				<a href="/about" className="about-button">
					About Me
				</a>
				<a href="/projects" className="project-button">
					My Projects
				</a>
				<a href="https://www.linkedin.com/in/hareesh-pedireddi/" target="_blank" className="linkedin-button">
					Connect With Me
				</a>
			</navigator>
			<div className="msg">
				<div className="hello-msg">Hello, I'm</div>
				<div className="name">Hareesh Pedireddi</div>
			</div>
		</div>
	);
}

export default Home;

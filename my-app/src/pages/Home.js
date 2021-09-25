import icon from '../images/icon_pic.png';
import background from '../images/home-background.jpg';
import '../styles/Home.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Home() {
    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];

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
				<div className="options">
					<div className="options-msg">Would you like to: </div>
                    <Dropdown className="options-dropdown" options={options} placeholder="Select an option" />
				</div>
			</div>
		</div>
	);
}

export default Home;

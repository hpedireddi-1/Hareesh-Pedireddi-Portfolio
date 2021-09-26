import React from 'react';

import submit from '../images/submit.png';
import icon from '../images/icon_pic.png';
import background from '../images/home-background.jpg';
import '../styles/Home.css';

function Home() {
	const [ option, setOption ] = React.useState('None');
	const options = [ 'None', 'Resume', 'Projects', 'LinkedIn' ];

	return (
		<div>
			<img className="background" src={background} resizeMode="stretch" />
			<div className="navigator">
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
			</div>
			<div className="msg">
				<div className="hello-msg">Hello, I'm</div>
				<div className="name">Hareesh Pedireddi</div>
				<div className="options">
					<div className="options-msg">
						Would you like to:
						<form
							className="form-dropdown"
							onSubmit={() => {
								console.log(option);
							}}
						>
							<select
								className="options-dropdown"
								value={option}
								onChange={(event) => {
									setOption(event.target.value);
								}}
							>
								<option className="boldtext" value={options[0]}>
									Select an option
								</option>
								<option value={options[1]}>checkout my résumé</option>
								<option value={options[2]}>view my projects</option>
								<option value={options[3]}>connect with me on LinkedIn</option>
							</select>
							<input type="image" className="submit-button" src={submit} value="Submit" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

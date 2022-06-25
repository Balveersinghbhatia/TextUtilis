import React from 'react'
import "../styles/about.css"
const About = (props) => {

	let theme = {
		backgroundColor:props.mode==='dark'?'black':'white',
		color:props.mode ==="dark"?'white':'black'
	}
	return (
		<>
			<div className="container my-3" >
				<h1 className={`my-3 text-center text-${props.mode==='dark'?"light":"dark"}`}>My recent Projects</h1>
				<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg" className="d-block w-100" alt="..."  />
							<div className="carousel-caption d-none d-md-block">
								<h5 style={{color:"black"}}>First slide label</h5>
								<p style={{color:"black"}}>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1024/https://balveersingh.online/wp-content/uploads/2022/06/bal1-e1655473024499-1024x791.png" className="d-block w-100" alt="..."  />
							<div className="carousel-caption d-none d-md-block">
								<h5  >World Car Accsories - Ecommerce for car accessories</h5>
								<p >Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1024/https://balveersingh.online/wp-content/uploads/2022/06/bal2-e1655475122394-1024x786.png" className="d-block w-100" alt="..."  />
							<div className="carousel-caption d-none d-md-block">
								<h5 style={{color:"black"}}>Harit Malav - News Website</h5>
								<p style={{color:"black"}}>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
			<div className="container my-5 about"  style={theme}>
				<h1>About Me</h1>
				<p>I am Balveer Singh, Freelance Web Developer, i help small business get more clients online.</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, in vitae ad vero laboriosam quos facilis praesentium? Aperiam quidem nulla quisquam ut nobis nihil vel quis blanditiis. Fugiat necessitatibus delectus vero temporibus incidunt ut est vel fuga excepturi ad quisquam obcaecati eaque natus ipsum dolore eos molestias, debitis </p>
			</div>
		</>
	)
}

export default About

/* We have made the dark mode and it is working quite fine, but as we know that app.js is making our appication ie is the head of our application and the control should be in it.

So now we will give the main control to the app.js and make dark mode for our home page too.*/
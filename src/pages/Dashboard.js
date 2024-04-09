import React, { useEffect } from 'react';
import Html from './images/html.png';
import Profile from './images/profile.jpeg';
import Js from './images/js.png';
import Reactjs from './images/reactjs.png';
import C from './images/c.png';
import Java from './images/java.png';
import Php from './images/php.png';
import Laravel from './images/laravel.png';
import Css from './images/css.png';
import Arrow from './images/arrow.png';
import Cek from './images/cek.png';
import Node from './images/node.png';
import Express from './images/express.png';
import BG from './images/slideImage1.png';
import BG1 from './images/slideImage2.png';
import BG2 from './images/slideImage3.png';
import BG3 from './images/bg.jpg';
import BG4 from './images/Developing Front-End Apps with React_page-0001.jpg';

function Dashboard() {
    function addRecommendation() {
        // Get the message of the new recommendation
        let recommendation = document.getElementById("new_recommendation");
        // If the user has left a recommendation, display a pop-up
        if (recommendation.value !== null && recommendation.value.trim() !== "") {
      
          showPopup(true);
          // Create a new 'recommendation' element and set it's value to the user's message
          var element = document.createElement("div");
          element.setAttribute("class","records");
          element.innerHTML = "<span><q>" + recommendation.value + "</q></span>";
          // Add this element to the end of the list of recommendations
          document.getElementById("recomWr").appendChild(element); 
          
          // Reset the value of the textarea
          recommendation.value = "";
        }
      }
      
	function showPopup(bool) {
		if (bool) {
			document.getElementById('popup').style.visibility = 'visible'
		} else {
			document.getElementById('popup').style.visibility = 'hidden'
		}
	}

	let index = 1

	let bg = document.getElementsByClassName("bg");
	let dots = document.getElementsByClassName("dot");
	
	useEffect(() => {
		
		if(bg){

			bg[0].style.display = "block"

		}else{
		alert("no element")
		}
	}, [bg]);

	const add = (n) => {
		index+=n
		if(index < 1){
		index = bg.length
		}
		if(index > bg.length)
		index = 1

		for (let i = 0; i < bg.length; i++) {
		bg[i].style.display = "none"
		}

		for (let i = 0; i < bg.length; i++){
		dots[i].className = dots[i].className.replace(" active", "")
		}
		bg[index-1].style.display = "block"
		dots[index-1].className += " active"
  	}

  return (
    <div>
		<main className='aboutContent'>
			<div className='about' id="about">
				<img alt='' className="profil" src={Profile} />
				<div className='introWrapper'>
				<span className="intro">
					<h1>Hi, My name is Afif Rahmat Nusada</h1>
					<p>I am a Bachelor's Degree in Informatic Engineering/Computer Science. I've created many websites and desktop application in order to improve my skill. You will be satisfied with my service. So feel free to order my service.
					I will accept anything that you want such as custom design and features that you want. I will make any websites using react and node+expressjs. I will also make a custom desktop application for you using c# programming language.
					</p>
				</span>
				</div>
			</div>
			<div className='content'>
				<img src={BG} className="bg" alt="" />
				<img src={BG3} className="bg" alt="" />
				<img src={BG2} className="bg" alt="" />
				<img src={BG1} className="bg" alt="" />
				<img src={BG4} className="bg" alt="" />
				<span className="prev" onClick={()=>add(-1)}>〈 </span>
				<span className="next" onClick={()=>add(1)}> 〉</span>
				<div className="dotWrapper">
					<span className="dot active"></span>
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
					<span className="dot"></span>
				</div>
			</div>
		</main>
	<main className="skills" id="skills">
		<div className="skillWrapper">
		<h1>My Skills</h1><hr/>
			<div className="firstLine">
				<div className="html">
					<img alt='' className="img" src={Html} />
					<br/>
					<br/>
					<span>HTML</span>
					<br/>
					<h4>4 Years Experience</h4>
				</div>
				<div className="javascript">
					<img alt='' className="img2" src={Js} />
					<br/>
					<br/>
					<span>Javascript</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
				<div className="Reactjs">
					<img alt='' className="img3" src={Reactjs} />
					<br/>
					<br/>
					<span>Reactjs</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
				<div className="C#">
					<img alt='' className="img4" src={C} />
					<br/>
					<br/>
					<span>C#</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
				<div className="java">
					<img alt='' className="img5" src={Java} />
					<br/>
					<br/>
					<span>Java</span>
					<br/>
					<h4>3 Years Experience</h4>
				</div>
			</div>
			<div className="secondLine">
				<div className="php">
					<img alt='' className="img6" src={Php} />
					<br/>
					<br/>
					<span>PHP</span>
					<br/>
					<h4>4 Years Experience</h4>
				</div>
				<div className="laravel">
					<img alt='' className="img7" src={Laravel} />
					<br/>
					<br/>
					<span>Laravel</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
				<div className="css">
					<img alt='' className="img8" src={Css} />
					<br/>
					<br/>
					<span>CSS</span>
					<br/>
					<h4>3 Years Experience</h4>
				</div>
				<div className="nodejs">
					<img alt='' className="img9" src={Node} />
					<br/>
					<br/>
					<span>Node Js</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
				<div className="express">
					<img alt='' className="img10" src={Express} />
					<br/>
					<br/>
					<span>Express Js</span>
					<br/>
					<h4>2 Years Experience</h4>
				</div>
			</div>
		</div>
	</main>
	<main className="projects" id="projects">
		<div className="projectContainer">
			<h1>Projects</h1><hr/>
			<ul>
				<h2>The Website That You're Visiting Is Made with Reactjs By Me</h2>
				<li class="details"><span>This is my portfolio website. I've made this website using my css and scss skill, i've made this without any template or anything. I made this all by myself to train myself. I've made a plan to use this website to support my business also.
				</span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Backend app using Expressjs and nodejs that I will use in the future if the business has been run</h2>
				<li class="details"><span> I've made the backend and the rest api using express and nodejs. I've been using mysql database for this app.
				This is the link of my project in github : <a href= "https://github.com/tigerager/backend.git">Click this!</a>
				</span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Chat and To do list App Using React and firebase</h2>
				<li class="details"><span>Created chat and todo list app using react js library and my own css. 
				This is the link of my project in github : <a href= "https://github.com/tigerager/simpulapp_chalenge.git">Click this!</a>
				</span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Project For My Home Town To Control The Given Aid Using C# language</h2>
				<li class="details"><span>Created C# project to help the people in my hometown to control the given aid such as where the 
				aid should be given. This is the link of my project in github : <a href="https://github.com/tigerager/ProjectC-Nagari.git">Click this!</a></span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Front End Project Using React</h2>
				<li class="details"><span>Created Front End App using react js library to get a certificate. This is 
				the link of my project in github : <a href="https://github.com/tigerager/CourseraFrontEndPj.github.io.git">Click this!</a></span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Back End Project Using Express</h2>
				<li class="details"><span>Created Back End App using Express js to get a certificate. 
				This is the link of my project in github : <a href="https://github.com/tigerager/expressBookReviews.git">Click this!</a>
				</span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Shooter Game</h2>
				<li class="details"><span>Created a shooter game using Unity application and C# programming language.</span></li>
				<hr/>
			</ul>
			<ul>
				<h2>Fruits Store Online</h2>
				<li class="details"><span>Created an online shop that sells fruits from my village using html, css, and javascript.</span>
				</li>
				<hr/>
			</ul>
			<ul>
				<h2>Car Selling</h2>
				<li class="details"><span>Created a website for the car dealer to sell their cars. 
				This is the link of my project in github : <a href="https://github.com/tigerager/MitsubishiWebProject.git">Click this!</a>
				</span>
				</li>
				<li class="details">
					<span>This is the active website that I've hosted : <a href="http://afifnusada123.000webhostapp.com/">Click this!</a></span>
				</li>
				<hr/>
			</ul>
		</div>
	</main>
	<main className="recommendations" id="recommendations">
		<h1 style={{ marginBottom: '1%', textAlign:'center' }}>Recommendations</h1><hr/>
		<div style={{ marginTop: '1.5%' }} className="recomWrapper" id="recomWr">
			<div className="records">
				<span><q>Afif is a hardworker man that will complete any task. Afif is Also a quick learner that could get the point about how to develop a website.</q></span>
			</div>
			<div className="records">
				<span><q>I had worked along with Afif for months. Working with Afif is really enjoyable because He would help if we do not understand about something</q></span>
			</div>
			<div className="records">
				<span><q>Afif is a hardworker man that will complete any task. Afif is Also a quick learner that could get the point about how to develop a website.</q></span>
			</div>
		</div>
	</main>
	<main id="contact">
      <div className="flex_center">
        <fieldset>
          <legend className="introduction">Leave A Recommendation</legend>          
          <input type="text" placeholder="Name (Optional)" /> <br/>
          <textarea id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
          <div className="flex_center">
            <button id="recommend_btn" onClick={addRecommendation}>Submit</button>
          </div>
        </fieldset>
      </div>
    </main>

    <div className="iconbutton">
      <a href="#home">
        <img alt='' src={Arrow} style={{ width: '105%', height: '105%' }} />
      </a>
    </div>

    <div className="popup flex_center" id="popup">
      <img alt='' style={{ width: '7%', height: '7%' }} src={Cek}/>
      <h3>Thank you for submitting a recommendation!</h3>
      <button onClick={()=>{showPopup(false)}}>Ok</button>
    </div>
	<footer>
			<h3>Informasi</h3>
			<p>Alamat :Atas Bumi Bawah Langit</p>
			<p>Youtube :afifnusada</p>

			<h4>Designed And Made By Afif Rahmat Nusada</h4>
		</footer>
    </div>
  )
}

export default Dashboard

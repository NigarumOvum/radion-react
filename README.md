# RadiOn Online Radio Player - (https://radion-react.vercel.app/)

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />

<img align="left" alt="CSS3" width="26px" 
src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />

<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

<img align="left" alt="SASS" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" />

<img align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" />

<img align="left" alt="Redux" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png" />

<img align="left" alt="Docker" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" />
.

</hr>

## Description

I Built this PWA using the Model View Controller (MVC) architecture to render the UI components logic. For the beauty I'm working with CSS, SASS languajes and some Bootstrap/ReactStrap.
Used JavaScript Fetch to Request the Radio Stations Information from the radio-browser-api API component API to render then in the UI using react-h5-audio-player npm component. For all the State Management of this application I'm using Redux.

Application is also Dockerized for development and production deployment.

I used jQuery for many functionalities(Navbar, Waves, etc.). Used JavaScript Fetch for the connection to Google SpreadShet DB with the sheet.best API and be able to push data from a HTML formulary.

## Front-end deployed in: Vercel

# About Me:

- 🤔 I’m looking for better oportunities and projects to growth my skills and gain experience.
- ⚡ Fun fact: I play video games, play the guitar/sing and learn new technologies very often.
- 🔭 My Portfolio:https://brealy-padron-portfolio-react.vercel.app/


:mailbox: Reach me out!
- 📫 How to reach me: neighbordevcr@gmail.com

<p align = "center">

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />](https://www.linkedin.com/in/bfpr131095/)

</p>

</hr>

![visitors](https://visitor-badge.glitch.me/badge?page_id=nigarumovum.nigarumovum)

# Commands 

## rebuild project 
npm run build && npm run start-sw

## Docker 
docker build --tag radionreact .
docker run radionreact
docker run --publish 3000:3000 radionreact

## Docker-compose
docker-compose build .
docker-compose run radion

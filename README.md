# RadiOn Online Radio Player - (https://radion-react.vercel.app/)

## Built with:
![html5](https://img.icons8.com/color/48/000000/html-5--v1.png)
![css3](https://img.icons8.com/color/48/000000/css3.png)
![js](https://img.icons8.com/color/48/000000/javascript--v2.png)
![sass](https://img.icons8.com/color/48/000000/sass.png)
![React](https://img.icons8.com/plasticine/48/000000/react.png)
![redux](https://img.icons8.com/color/48/000000/redux.png)
![docker](https://img.icons8.com/color/48/000000/docker.png)

## Description:

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

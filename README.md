<a href='https://www.linkpicture.com/view.php?img=LPic620c2d5ea3a092132368239'><img src='https://www.linkpicture.com/q/macHome_2.png' type='image'></a>

# Musikan

Musikan is an open community of independent artists and music lovers similar to that of Spotify or Amazon Music. Musikan is a streaming music web application for personal use where artists can share their music and discover songs, playlists and artists.

This project was made by a team of passionate music developers using continuous integration and agile methodologies.

This app has been built with MongoDB, Express, Node, Firebase and Cloudinary on the server side, and React, Redux for the client side.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## 📋 Requirements

You need to install NodeJs and Install the NPM packages with npm install command. You will also be required to create accounts for: - Firebase - MongoDB Atlas - Cloudinary

## 🔧 Installation

First, you will need to clone or fork the repository into your Github account:

### Fork on GitHub

<em>frontend</em> ->$ git clone https://github.com/AranBeitia/musikan-front --> further instructions in this link\
<em>backend</em> -> $ git clone https://github.com/Jose1i1o/musikan-node-back

When you have all the dependencies installed you need to create two .env files, one located in client folder, one in server folder containing the new encryption keys. Please refer to the examples below:

## 🦴 Project Structure
Folder structure 🗂
  
<pre>  
├── documentation <i>// All project wireframes, PRD, and presentation files</i>  
├── server <i>// Backend Node Server</i>  
│ ├── src  
│ │ ├── config  
│ │ ├── controllers  
│ │ ├── db  
│ │ ├── middlewares  
│ │ ├── models  
│ │ ├── repositories  
│ │ ├── routes  
│ │ ├── services  
│ │ └── utils  
│ │ └── index.js
│ │ └── server.js  
</pre>

### Server-Side with nodeJS 🔐

This back end side is our main API. Here we receive most of the requests that are sent by the front end. This API has the core functionalities of the back end such as the authentication, the database management and the use of other third party services as _cloudinary_. This API also interacts with the other side of our back end.

# 🗺 Project Journey

## Team Objectives 🎯

- Clean & efficient Code
- API architecture with the easiest flow for the frontend
- Comfortable user experience
- Safe server side
- Transparent and fluid team communication
- Collaborative work

## Organization 📆

In order to achieve all of our goals we have implemented the Scrum Agile Methodology. We divided all the process into four separated Sprints contained within 3 weeks, everyone of them with their own goals. To manage those sprints we set daily, sprint plannings and review and sprint retrospective meetings. We used Github Projects to divide our sprints, issues and tasks on boards using the Kanban structure. We also implemented a code review system in order to get all the team connected with all parts of the project.

<a href='https://www.linkpicture.com/view.php?img=LPic620c255999b98425079815'><img src='https://www.linkpicture.com/q/Captura-de-pantalla-2022-02-15-a-las-23.10.04.png' type='image'></a>

## Team Convention 🤝

Based on Agile methodologies we had daily reviews, sprint plannings and sprint reviews. This was done in order to agree on the requirements, design, develop, test, deploy and review each sprint.


# 🕵️‍♂️ Resources

## Main resources for the backend 🧬

- [Cloudinary](https://cloudinary.com/)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Node JS](https://nodejs.org/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)

## Support libraries 📚

- [Helmet Async](https://github.com/staylor/react-helmet-async)
- [Morgan](https://github.com/expressjs/morgan)
- [Multer](https://github.com/expressjs/multer)
- [Nodemon](https://nodemon.io/)
- [Validator](https://github.com/validatorjs/validator.js/)
- [cors](https://github.com/expressjs/cors)
- [body-parser](https://github.com/expressjs/body-parser)
- [babel](https://github.com/babel/babel)

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.

# ✨ Contributors

Thanks goes to these superb people
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start --> <!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/AntonioCopete">
        <img
          src="https://avatars2.githubusercontent.com/u/85640830?s=90&v=4?s=100"
          width="100px;"
          alt=""
        /><br /><sub><b>Antonio Copete</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/aranbeitia">
        <img
          src="https://avatars2.githubusercontent.com/u/12766483?s=90&v=4?s=100"
          width="100px;"
          alt=""
        /><br /><sub><b>Arantza Beitia</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/CarlosVelilla"
        ><img
          src="https://avatars.githubusercontent.com/u/68919264?s=90&v=4s=100"
          width="100px;"
          alt=""
        /><br /><sub><b>Carlos Velilla</b></sub></a
      ><br />
    </td>
    <td align="center">
      <a href="https://github.com/Jose1i1o"
        ><img
          src="https://avatars.githubusercontent.com/u/78234738?s=90&v=4?s=100"
          width="100px;"
          alt=""
        /><br /><sub><b>Jose Valenzuela</b></sub></a
      ><br />
  </tr>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All
Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

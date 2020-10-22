[Leia em português](https://github.com/EduardoRodriguesF/happy/blob/main/README.brazilian-portuguese.md)

<p align="center">
    <img src="https://github.com/EduardoRodriguesF/happy/blob/main/public/images/logo-icon.png?raw=true">
</p>
<h1 align="center">Happy</h1>
<p align="center">Bring happiness to the world</p>

<p align="center">
    <a href="#sobre">About</a> •
    <a href="#aprendizados">Learning</a> •
    <a href="#preview">Preview</a> •
    <a href="#tecnologias">Technologies</a> •
    <a href="#minha-milha-extra">My extra mile</a> •
    <a href="#como-executar">Usage</a> •  
    <a href="#licenc-a">License</a>
</p>

## 🤔 About
Project developed during *Next Level Week #3*, by Rocketseat from october 12 to october 18. The objective was encourage people to visit orphanages and bring happiness to those kids.

## 🧠 Learning
- Develop **Node.js** servers
- Use template engine (<code>hbs</code>)
- **Manage projects** using <code>npm</code>
- **Organize** extensive apps in a simple and readable way
- Use <code>nodemon</code> to make it easier to work with Node
- Use WhatsApp's **API**
- Store data in **SQLite** via **JavaScript**
- Basic **validation** on front-end

## 👁️ Preview

<p align="center">
  <kbd>
    <img height="300" src="https://github.com/EduardoRodriguesF/happy/blob/main/screenshots/page-landing.png">
  </kbd>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img height="300" src="https://github.com/EduardoRodriguesF/happy/blob/main/screenshots/page-landing-mobile.jpg">
  </kbd>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <kbd>
    <img height="300" src="https://github.com/EduardoRodriguesF/happy/blob/main/screenshots/page-orphanages-desktop.png">
  </kbd>
</p>

## 🛠️ Technologies
- HTML / hbs
- CSS
- JavaScript
- Node.js
- SQLite

## 🏃 My extra mile
One of Rocketseat's proposes was to add new features after finishing the base project, here are my addons:

### Responsive sidebar
On the original project, the sidebar <code>aside</code> could cover even half of the screen in smaller devices. Since it does not contain any important information, I decided to remove it on mobile version, so the user could use the whole screen to navigate in the map.

### Form
On orphanage creation page, valid <code>input</code>s have light green borders to indicate they're right. And with a little bit of JavaScript and CSS, they now have red borders if they are not valid *after* trying to <code>submit</code>.

The 'about' <code>textarea</code> has a 300 characters limit written above it. I limited in code and adjusted the field height so it always fit all 300 characters, without having to resize it. 

Still on that page, there is a button asking the availability of weekends, either being "yes" or "no". Both are green colored when selected, however, I decided to make it so "no" option is red colored when selected, using the same palette as <code>.closed</code> on orphanage's page. 

## 📋 Usage

### Prerequisites

To run the application, you need to have installed [Git bash](https://gitforwindows.org) and [Node.js](https://nodejs.org).

### Running

```bash
# Access the project's directory
$ cd happy

# Install dependencies
$ npm install

# Execute app in development mode
$ npm start

# The app will be opened on port 5500 // http://localhost:5500
```

## 📜 License
This project is under [MIT](https://github.com/EduardoRodriguesF/happy/blob/main/LICENSE) license.

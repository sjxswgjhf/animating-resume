let resume = `# Jiaxin Sun
9178595788 | jiaxinsun0715@gmail.com | NewYork
Perosonal Website: www.williamsjx.com
Github: https://github.com/sjxswgjhf
Software Developer

## Education
### Queens College, City University of New York
June 2019 - Fall 2020
- Master: Computer Science

### Stony Brook Univeristy, State University of New York
Jan 2015 - Dec 2017
- Bachelor: Computer Science
- Bachelor: Applied Mathematics & Statistics

## Experience
### Software Developer Intern - Tangible Media
May 2017 - Agu 2017
- Assist and develop Single Page Application
- Uilize Angular, Node JS and MongoDB to develop the website
- Preform testing on finished application and report bugs
- Define requirements and translating designs and wireframes into code

### College Assistant - Queensborough Community College
Oct 2018 - Present
- College Assistant in Math & Computer Science
- Teaching College Algebra and Advanced Math
- Teaching Fundamental C++ and Java

## Projects
### JS Application: Animating Resume
- A Markdown resume creating process.
- Utilized JS Promise to solve asynchronous operations
- Use CSS3 to improve Interface
- [code link](https://github.com/Caijialinxx/animating-resume/blob/master/main.js) | [preview link](https://sjxswgjhf.github.io/animating-resume/)

### J2EE Application: Mini-Spotify Website
- Designe and developed a full stack traditional J2EE application
- Utilize Spring MVC framework to develop applications on server-side
- Use Hibernate framework to imporve the database communication efficiency
- Develope client side by JavaScript and Boostrap

### Full Stack Application: Personal Website
- Design and Develop a Full Stack Personal Website
- Utilize Angular, Node JS, MongoDB to develop frontend and backend
- [website link](http://www.williamsjx.com)

### JAVA Application: Regio Vinco Map Editor
- Build a Java application to produce a country map which is used by Regio Vinco quizzing game.
- Utilize JavaFX to render the views and build the interface
- Various data structures, sorting and hashing algotiyhms to develop the applicaiton

### J2EE Application: Mini-Rotten-Tomatoes
- Develop a dynamic and interactive user-friendly website
- Hanlde client side request and develop functionality on server-side
- Utilized JSP to communicate with database by writing efficient SQL queris
- Design and setup the databse according to the project design

### Android Application: Flappy Bird Clone
- A hot mobile game clone developed by Android Studio
- Utilize LibGDX framework to design and develop the game
- Graph Design and Functionality develop to solve problems

### C Application: Dynamic Memory Allocator
- Allows users to manage memory on the heap and monitor current status of the heap
- Implements a set of standard functions with explicit free list; resolves fragmentations by proper padding and alignments
- Applies immediate coalescing to free blocks and utilizes first-fit strategy to search for free blocks

## Skills & Awards
- Java, Python, JavaScript, SQL, Spring MVC, Hibernate, HTML, CSS, Angular, Node JS, Mongo DB, React JS
- Algorithms Develop, Object-Oriented Design, Onject-Oriented Programming, Linux, Git, MySQL, Database Design
- First Place, Group, NYSMATYC Math Contest         Fall 2014
- Third Runner Up place, Individual, NYSMATYC Math Contest Fall 2014
- Dean’s List 2014, 2015, 2016
`

let code_ready = `/*
 * Hi，I'm Jiaxin Sun.
 * I want to use code to show you my resume～
 * idea link：http://strml.net
 * 
 * Let's go...
 */

/* Add a transition to make the changes looks soft */
* {
  transition: all 0.3s;
}
/* add a background color */
body {
  background: #455A64;
}
/* add border to the code */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* Highlight code */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * Add a special effects
 * to make them look like "breathing" 
 */
.breathe {
  animation: breathe 1.5s ease 0s infinite;
}


/* Now start wrting resume */

/* give some space to my resume */
#options {
  width: 32%;
}
/* prepare a white borad */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* Now, reusme will be on right side */

`

let code_marked = `
/* 
 * Utilize marked.js
 * Markdown my resume
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* modify my reusme to make it look better */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* change margin */
#paper > div {
  margin: 28px 0;
}


/* Detail changes */

/* modify my info section */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* modify my detail section */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}

#education > ul {
  margin: 4px;
}

#skills li, #works li, #education li, #awards li {
  margin-bottom: 4px;
}

#education > .college {
  margin-bottom: 6px;
}

#education > .college {
  position: relative;
}

#education p {
  position: absolute;
  right: 0px;
  top: 6px;
}


#jobs > .experience {
  margin-bottom: 6px;
}

#jobs > .experience {
  position: relative;
}
#jobs p {
  position: absolute;
  right: 0px;
  top: 6px;
}

#works > .project {
  margin-bottom: 6px;
}

#works > .project{
  position: relative;
}
#works p{
  position: absolute;
  right: 0px;
  top: 6px;
}
#skills{
  margin-top: 20px;
}

#skills > .skill {
  margin-bottom: 6px;
}

#skills > .skill{
  position: relative;
}
#skills p{
  position: absolute;
  right: 0px;
  top: 6px;
}


/* Add a personal photo */
`

let code_photo = `
/* put my personal phot into info section */
#information {
  position: relative;
}
#information .avatar {
  width: 90px;
  position: absolute;
  right: 0px;
  top: 0px;
}

#information {
  overflow: hidden;
}

/* 
 * OK. Resume Finished
 * 
 *   —— Jiaxin Sun 2019/06 *^_^*
 */
`

var resumeInputTimeoutID, codeInputTimeoutID
writeCode(code_ready, '').then(() => {
  createResume().then(() => {
    adjustResume().then(() => {
      addAndAdjustAvatar().then(showDownloadButton)
    }, () => {
      showFinalResult()
    })
  })
})

var speedCode = 3, duration = -100
$('#speed_btn').click(() => {
  speedCode += 1
  if (speedCode > 3) {
    speedCode = 1
  }
  switch (speedCode) {
    case 1:
      speed_status.innerText = '🚲'
      description.innerText = 'Speed Control~~'
      duration = 30
      break
    case 2:
      speed_status.innerText = '🚗'
      description.innerText = 'Speed Control~~'
      duration = 0
      break
    case 3:
      speed_status.innerText = '🚀'
      description.innerText = 'Speed Control~~'
      duration = -100
      break
    default:
      return 0
  }
})

function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    codeInputTimeoutID = setTimeout(write, duration)
    function write() {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearTimeout(codeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(codeInputTimeoutID)
        codeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    resumeInputTimeoutID = setTimeout(write, duration)
    function write () {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearTimeout(resumeInputTimeoutID)
        resolve.call(undefined)
      } else {
        window.clearTimeout(resumeInputTimeoutID)
        resumeInputTimeoutID = setTimeout(write, duration)
      }
    }
  })
}

function createResume() {
  return new Promise(resolve => {
    $('#paper').addClass('breathe')
    $('#code_body').removeClass('breathe')
    writeResume().then(resolve)
    setTimeout(() => {
      $('#skip_inputResume').show()
      $('#skip_inputResume').click(() => {
        skipResumeInput().then(resolve)
      })
    }, 1000)
  })
}
function adjustResume() {
  return new Promise((resolve, reject) => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      structureResume()
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(resolve)
      setTimeout(() => {
        $('#skip_all').show()
        $('#skip_all').click(() => {
          skipAll().then(reject)
        })
      }, 1000)
    })
  })
}

function structureResume() {
  $('#paper')[0].innerHTML = marked(resume)
  $('#paper').prepend('<div id="information"></div>', '<div id="education"></div>', '<div id="jobs"></div>', '<div id="works"></div>', '<div id="skills"></div>')
  $('#information').append($('h1'), $('p').first())
  $('#education').append($('h2:contains("Education")'))
  $('h3:contains("Queens College"), h3:contains("Stony Brook")').each((index, element) => {
    $('<div class="college"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#education'))
  })
  $('#jobs').append($('h2:contains("Experience")'))
  $('h3:contains("Tangible"), h3:contains("Queensborough")').each((index, element) => {
    $('<div class="experience"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#jobs'))
  })
  $('#works').append($('h2:contains("Projects")'))
  $('h3:contains("Application")').each((index, element) => {
    $('<div class="project"></div>').append($(element), $('#paper > p').first(), $('#paper > ul').first()).appendTo($('#works'))
  })
  $('#skills').append($('h2:contains("Skills")')).each((index, element) => {
    $('<div class="skill"></div>').append($(element),$('#paper > p').first(), $('#paper > ul').first()).appendTo($('#works'))
  })
  $('a[href="./images/qrcode.png"]').addClass('qrcode-trigger').append($('img.qrcode'))
}
function addAndAdjustAvatar() {
  return new Promise(resolve => {
    $('#information').append($('img.avatar'))
    writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
      $('#paper').addClass('breathe')
      $('#code_body').removeClass('breathe')
      $('.skipper').remove()
      setTimeout(resolve, 1000)
    })
  })
}
function showDownloadButton() {
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}

function skipResumeInput() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(resumeInputTimeoutID)
      paper.innerHTML = resume
      paper.scrollTop = paper.scrollHeight
      resolve()
      $('#skip_inputResume').remove()
    }, 0)
  })
}
function skipAll() {
  return new Promise(resolve => {
    setTimeout(() => {
      window.clearTimeout(codeInputTimeoutID)
      resolve()
      $('.skipper').remove()
    }, 0)
  })
}
function showFinalResult() {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  $('#information').append($('img.avatar'))
  code_body.innerHTML = Prism.highlight(code_ready + code_marked + code_beautify_resume + code_photo, Prism.languages.css, 'css');
  code_style.innerHTML = code_ready + code_marked + code_beautify_resume + code_photo
  code_body.scrollTop = code_body.scrollHeight
  window.clearTimeout(codeInputTimeoutID)
  $('#options').css({ 'width': '23%' })
  $('a.downloadResume').addClass('show')
  $('#options').append($('a.downloadResume'))
}
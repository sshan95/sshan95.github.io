'use strict';
$(function() {
function generateAboutMe() {
  return `<div class="contentAboutMe">
      <h1 class="introduction">Hello! My name is Samuel a full-stack-developer and visual enthusiast!</h1>
      <p class="meDescription">I am a web developer and a recent graduate from Thinkful’s Full Stack Web Developer program.  I love coding and problem solving due to not only the challenge but also the understanding of building something greater than just simple functions or algorithms.  I am a marriage counselor to the front-end and back-end couple and thinking of new projects/features/ideas to implement to our project.  
      </p>
      <p class="meDescription">
      As a student of life who never stops learning, I love to spend my freetime doing film analysis on Netflix-produced movies, composing R&B music while listening to Debussy or trying to convince my friends that George Lucas was the 2nd luckiest man in show business after Ringo Starr.
      </p>
  </div>
  <div class="activityIcons">
  <img src="https://image.flaticon.com/icons/svg/606/606644.svg" class="activity">
  <img src="https://image.flaticon.com/icons/svg/606/606609.svg" class="activity">
  <img src="https://image.flaticon.com/icons/svg/606/606723.svg" class ="activity">
  </div>
  <button class="backToButton">Back to Main</button>
  `;
}

function generateContactMe() {
  return `
  <section class="contact">
    <h1 class = "contactTitle">CONTACT ME</h1>
      <p class="contactDescription">If you want to holler at me or just talk about life, music or job opportunities you can find me at...</p>
    
        <ul class="myContacts">
          <img src= "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/email-2-icon.png" class= "icon"><li class ="contactInfo">realsamuelhan95@gmail.com</li>
	        <img src= "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_webpict08_1484337066-1.png" class="icon"><li class ="contactInfo">(202)981-3384</li>
          <img src="https://seeklogo.com/images/L/linkedin-icon-logo-7257B647F4-seeklogo.com.png" class="icon"><li class ="contactInfo"><a href="https://www.linkedin.com/in/samuel-han-b9388aa2/">Linkedin Link</a></li>
          <img src="https://cdn.freebiesupply.com/logos/large/2x/github-icon-logo-svg-vector.svg" class="icon"><li class ="contactInfo">sshan95</li>
          <img src="https://cdn.worldvectorlogo.com/logos/slack-1.svg" class="icon"><li class ="contactInfo">S3mul</li>
        </ul>
  </section>
  <button class="backToButton">Back to Main</button>
        `;
}

function generateProjects() {
  return `
  <section class="Projects">
    <div class="sectionOne">
      <h1 class="heading">PROJECTS</h1>
      <h2 class="heading2">Shopping List</h2>
      <img src="https://i.imgur.com/bKxXvYk.png" class="squareImage">
      <p class= "techUsed">
        <b>Tech used in Demo</b>: HTML, CSS, JAVASCRIPT, JQUERY
      </p>
      <p class= "demoDescription">
        <b>Description</b>: This is a sample shopping list app that I made.  You are able to input new items, check the items already in cart or delete items that you put in by accident.  
      </p>
    </div>
    <div class="sectionTwo">
      <h2 class="heading2">Project 2</h2>
      <div class="square">Project 2 Image</div>
      <p class= "techUsed">
        <b>Tech used in Demo</b>: HTML, CSS, JAVASCRIPT, JQUERY
      </p>
      <p class= "demoDescription">
        <b>Description</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="sectionThree">
      <h2 class="heading2">Project 3</h2>
      <div class="square">Project 3 Image</div>
      <p class= "techUsed">
        <b>Tech used in Demo</b>: HTML, CSS, JAVASCRIPT, JQUERY
      </p>
      <p class= "demoDescription">
        <b>Description</b>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
    </section>
    <button class="backToButton">Back to Main</button>
      `;
};


function aboutMe() {
  $(".navbar").on("click", "#me", function (event) {
      $(".navbar").remove();
      $(".content").remove();
      $(".formforbtn").html(generateAboutMe());
  });
};

function backFromMe() {
  $("Main").on("click", ".backToButton", function(event) {
    location.reload();
  });
}

function contactMe() {
  $(".navbar").on("click", "#contact", function(event) {
    $(".navbar").remove();
    $(".content").remove();
    $(".formforbtn").html(generateContactMe());
  });
};

function myProject() {
  $(".navbar").on("click", "#projects", function(event) {
    $(".navbar").remove();
    $(".content").remove();
    $(".formforbtn").html(generateProjects());
  });
}

function doPortfolioPage() {
  aboutMe();
  contactMe();
  myProject()
  backFromMe();
};

$(doPortfolioPage);

});
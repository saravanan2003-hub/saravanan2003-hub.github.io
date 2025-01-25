
// Scroll Progress Bar Function
window.onscroll = function() {
  myFunction();
  updateActiveLink();
};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
const navLinks = document.querySelectorAll('body header nav a');
const sections = document.querySelectorAll('section');
function updateActiveLink() {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      currentSection = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}


const posting = document.getElementsByClassName("posting")[0];
const postingSpan = document.getElementById("postingSpan");


const texts = ["Web Developer", "FSSA Student"];
let index = 0;


function updateText() {
  const [part1, part2] = texts[index].split(" ");
  posting.textContent = part1;
  postingSpan.textContent = part2
  index = (index + 1) % texts.length;
}


setInterval(updateText, 3990);

GitHubCalendar(".calendar", "saravanan2003-hub");
GitHubCalendar(".calendar", "saravanan2003-hub", { responsive: true });

const form = document.getElementsByClassName("contact-form")[0];
form.addEventListener("submit",(event)=>{
  let isValid = false;

  const nameInp = document.getElementById("nameInp");
  const emailInp = document.getElementById("emailInp");
  const NameError = document.getElementsByClassName("NameError")[0];
  const emailError = document.getElementsByClassName("emailError")[0];

  const nameVal = nameInp.value.trim();
  const emailval = emailInp.value.trim();

  if(nameVal.length === 0){
    NameError.textContent = "Name is required";
    nameInp.style.borderColor = "red";
    isValid = true;
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailval.length === 0){
    emailError.textContent = "Email is required"
    emailInp.style.borderColor = 'red';
    isValid = true;
  }
  else if (!emailRegex.test(emailval)) {
    emailError.textContent = "Please check your email"
    emailInp.style.borderColor = 'red';
    isValid = true;
  }

  if (isValid) {
    event.preventDefault();
  }
})









  
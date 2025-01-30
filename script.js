
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


setInterval(updateText, 4000);

GitHubCalendar(".calendar", "saravanan2003-hub");
GitHubCalendar(".calendar", "saravanan2003-hub", { responsive: true });

const form = document.getElementsByClassName("contact-form")[0];
form.addEventListener("submit", (event) => {
  let hasError = false;

  // Get input elements and error containers
  const nameInp = document.getElementById("nameInp");
  const emailInp = document.getElementById("emailInp");
  const NameError = document.getElementsByClassName("NameError")[0];
  const emailError = document.getElementsByClassName("emailError")[0];

  const nameVal = nameInp.value.trim();
  const emailVal = emailInp.value.trim();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook)\.com$/i;
    return emailPattern.test(email);
};

  // Clear previous errors
  NameError.textContent = "";
  emailError.textContent = "";
  nameInp.style.borderColor = "";
  emailInp.style.borderColor = "";


  // Validate name
  if (nameVal.length === 0) {
    NameError.textContent = "Name is required";
    nameInp.style.borderColor = "red";
    hasError = true;
    event.preventDefault();
  }else{
    hasError = false;
  }

  if (emailVal.length === 0) {
    emailError.textContent = "Email is required";
    emailInp.style.borderColor = "red";
    hasError = true;
  } else if (!validateEmail(emailVal)) {
    emailError.textContent = "Please check your email";
    emailInp.style.borderColor = "red";
    hasError = true;
  } else {
    hasError = false;
  }


  // Prevent form submission if there's any error
  if (hasError) {
    event.preventDefault();
  }

});

let index1 = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    const slideWidth = slides[0].clientWidth; // Get the width dynamically
    const totalSlides = slides.length;

    index1 += step;

    if (index1 >= totalSlides) {
        index1 = 0; // Loop back to first slide
    } else if (index1 < 0) {
        index1 = totalSlides - 1; // Loop back to last slide
    }

    document.querySelector(".carousel-container").style.transform = `translateX(-${index1 * slideWidth}px)`;
}

// Auto-slide every 3 seconds
setInterval(() => moveSlide(1), 4000);

const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
prev.addEventListener("click",()=>{
  moveSlide(-1)
});
next.addEventListener("click",()=>{
  moveSlide(1)
});













  
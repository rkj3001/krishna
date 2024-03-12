
$(document).ready(function(){
    var i =  localStorage.getItem('index');
  //  localStorage.removeItem("index")
    renderProjectCards();
    toggleTab(i)
  });


// Declare projects array to store project data

// ===================================== createProjectCard =================================================

  // Function to create HTML structure for a project card
  const createProjectCard = (project) => {
    return `
      <div class="card-grid-space">
        
        <a class="card"  target="_blank"  href="${project.link}" style="--bg-img: url('${project.image}')">
          <div>
            <h1>${project.title}</h1>
            <p>${project.description}</p>
            <div class="date">${project.date}</div>
            
            <div class="tags">
              ${project.tags.map(tag => `<div class="tag">${tag}</div>`).join('')}
            </div>
          </div>
        </a>
        <a  href="${project.git}" target="_blank" class="button button--flex button--small git_button">Git<i class="uil uil-arrow-right button_icon"></i></a>

      </div>
    `;
  };

// ===================================== renderProjectCards =================================================

  const renderProjectCards = () => {
    const cardsWrapperCss = document.querySelector(".css");
    const cardsWrapperFullStack=  document.querySelector(".fullStack");
    const cardsWrapperWeb3 =  document.querySelector(".web3");
  
        data[0].CSS.forEach(project => {
            const cardHtml = createProjectCard(project);
            cardsWrapperCss.innerHTML += cardHtml;
          });
 
        data[1].FullStack.forEach(project => {
            const cardHtml = createProjectCard(project);
            cardsWrapperFullStack.innerHTML += cardHtml;
          });
   
        data[2].Web3.forEach(project => {
            const cardHtml = createProjectCard(project);
            cardsWrapperWeb3.innerHTML += cardHtml;
          });

    
  };

 
// ===================================== toggleTab =================================================


  function toggleTab(tabIndex) {
    
    let tabs = document.getElementsByClassName("tab");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[tabIndex].style.display = "block";

    // Remove the 'active-tab-button' class from all buttons
    let buttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
    }

    // Add the 'active-tab-button' class to the clicked button
    buttons[tabIndex].classList.add("active-tab-button");
    
 }
  function triggerModal() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  }


function loadComponents() {
    // This workaround loads the header and the footer, 
    // and insert it into the proper divs (based on their IDs)
    // to avoid duplication across multiple pages.
    
    header = `
    <header style="position: sticky; top: 0; z-index: 1000;">
    <nav>
        <a href="index.html">
            <div class="logo">
                <img src="assets/photos/logo.png" alt="Conference Logo" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Keynote</a></li>
            <li><a href="#">Programme</a></li>
            <li><a href="#">Organization</a></li>
            <li><a href="#">Committee</a></li>    
            <li><a href="#">Awards</a></li>        
            <li><a href="#">Venue</a>
            <ul class="dropdown">
                <li><a href="#">Location</a></li>
                <li><a href="#">Transportation</a></li>
                <li><a href="#">Accommodation</a></li>
            </ul>
            </li>

            <li><a href="#">Proceedings</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#" class="link-btn">Paper Submission</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `


    header_now = `
    <header style="position: sticky; top: 0; z-index: 1000;">
    <nav>
        <a href="index.html">
            <div class="logo">
                <img src="assets/photos/logo.png" alt="Conference Logo" height="60px">
            </div>
        </a>
        <ul class="main__ul">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="organization.html">Organization</a></li>
            <li><a href="#">Committee</a></li>          
            <li><a href="contact.html">Contacts</a></li>
            <li><a href="https://cmt3.research.microsoft.com/ICBL2026" target="_blank" class="link-btn">Paper Submission</a></li>
        </ul>
    </nav>
    <div id='menu' class='box-icon'><i class='bx bx-menu'></i></div>
    </header>
    `


    document.getElementById('header').innerHTML = header_now;


    // responsive menu
    document.querySelector('#menu').addEventListener('click', ()=>{
        document.querySelector('nav ul').classList.toggle('showmenu');
    });

}

window.onload = loadComponents;

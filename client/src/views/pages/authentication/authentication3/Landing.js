import './styles/landing.css';
import img1 from './styles/images/bg.png';
import img2 from './styles/images/about-banner.png';
import logo from './styles/images/logo-final.png'
import img3 from './styles/images/feature-1.png'
import img4 from './styles/images/contact.png'
import img5 from './styles/images/feature-2.png'
import {IconAccessibleOff,IconChartInfographic,IconUserCheck,IconBrandFacebook,IconBrandGithub, IconBrandInstagram, IconBrandYoutube} from '@tabler/icons'
// import './test.js'
const Landing = () => {


    return (
        <>
            <header>
                <div class="container">
                    <a href="#" class="logo">
                        <img src={logo} alt="Funel logo"  className='logoimg'/>  
                    </a>

                    <div class="navbar-wrapper">
                        <button class="navbar-menu-btn" data-navbar-toggle-btn>
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>

                        <nav class="navbar" data-navbar>
                            <ul class="navbar-list">
                                <li class="nav-item">
                                    <a href="#home" class="nav-link">
                                        Home
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#about" class="nav-link">
                                        What we do
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#features" class="nav-link">
                                        Why us?
                                    </a>
                                </li>

                               

                                <li class="nav-item">
                                    <a href="#contact" class="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <a href="http://localhost:3000/workzone/pages/login/login3"> <button class="btn btn-primary">Login</button></a>
                        </nav>
                    </div>
                </div>
            </header>

            <article>
                <section class="hero" id="home">
                    <div class="container">
                        <div class="hero-content">
                            <h1 class="h1 hero-title">Get With The Plan. WorkZone Handles Everything</h1>

                            <p class="hero-text">
                              Welcome to the WorkZone Community
                            </p>

                            <button class="btn btn-primary" >Get Started</button>
                        </div>

                        <div class="hero-banner"></div>
                    </div>
                    <img src={img1} alt="BigCo Inc. logo" class="shape-content" />
                    
                </section>

                <section class="about" id="about">
                    <div class="container">
                        <div class="about-top">
                            <h2 class="h2 section-title">What we do ?</h2>

                            <p class="section-text">
                            WorkZone is a project management software which has attendance tracking and work tracking options.
                            </p>

                            <ul class="about-list">
                                <li>
                                    <div class="about-card">
                                        <div class="card-icon">
                                            <IconChartInfographic />
                                        </div>

                                        <h3 class="h3 card-title">Progress Tracking</h3>

                                        <p class="card-text">
                                            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="about-card">
                                        <div class="card-icon">
                                           <IconUserCheck />
                                        </div>

                                        <h3 class="h3 card-title">Attendace Tracking</h3>

                                        <p class="card-text">
                                            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="about-card">
                                        <div class="card-icon">
                                           <IconAccessibleOff />
                                        </div>

                                        <h3 class="h3 card-title">Leave Management</h3>

                                        <p class="card-text">
                                            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="about-bottom">
                            <figure class="about-bottom-banner">
                                <img src={img2} alt="about banner" class="about-banner" />
                            </figure>

                            <div class="about-bottom-content">
                                <h2 class="h2 section-title">We’re obsessed with growth</h2>

                                <p class="section-text">
                                    Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                                    development of the asset through its charitable foundation.
                                </p>

                                <button class="btn btn-secondary">Sign Up For Free</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="features" id="features">
                    <div class="container">
                        <h2 class="h2 section-title">We are offer Fully customized options to increse the productivity of your employess.</h2>

                        <p class="section-text">
                            Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into the
                            development of the asset through its charitable foundation.
                        </p>

                        <ul class="features-list">
                            <li class="features-item">
                                <figure class="features-item-banner">
                                     <img src={img3} alt="feature banner" /> 
                                </figure>

                                <div class="feature-item-content">
                                    <h3 class="h2 item-title">Efficient Leave Management System</h3>

                                    <p class="item-text">
                                        Inspiration comes in many ways and you like to save everything from. sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </li>

                            <li class="features-item">
                                <figure class="features-item-banner">
                                     <img src={img5} alt="feature banner" /> 
                                </figure>

                                <div class="feature-item-content">
                                    <h3 class="h2 item-title">Less Paper works </h3>

                                    <p class="item-text">
                                        Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back into
                                        the development of the asset through its charitable foundation.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section class="cta">
                    <div class="container">
                        <div class="cta-card">
                            <h3 class="cta-title">Try the WorkZone</h3>

                            <p class="cta-text">
                                Each time a digital asset is purchased or sold, Sequoir donates a percentage of the fees back.
                            </p>

                            <form action="" class="cta-form">

            <input type="email" name="email" placeholder="Your email address" />

            <button type="submit" class="btn btn-secondary">Try It Now</button>

          </form>
                        </div>
                    </div>
                </section>

                <section class="contact" id="contact">
                    <div class="container">
                        <div class="contact-content">
                            <h2 class="h2 contact-title">Let’s scale , Your Productivity together</h2>

                            <figure class="contact-banner">
                         <img src={img4} alt="contact banner" /> </figure>
                        </div>

                        <form action="" class="contact-form">
                            <div class="input-wrapper">
                                <label for="name" class="input-label">
                                    Name *
                                </label>

              <input type="text" name="name" id="name" required placeholder="Type Name" class="input-field" /> 
                            </div>

                            <div class="input-wrapper">
                                <label for="phone" class="input-label">
                                    Phone
                                </label>

                                <input type="tel" name="phone" id="phone" placeholder="Type Phone Number" class="input-field" /> 
                            </div>

                            <div class="input-wrapper">
                                <label for="email" class="input-label">
                                    Email Address *
                                </label>

                                <input type="email" name="email" id="email" required placeholder="Type Email Address" class="input-field" /
                                >
                            </div>

                            <div class="input-wrapper">
                                <label for="message" class="input-label">
                                    How can we help? *
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Type Description"
                                    required
                                    class="input-field"
                                ></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </article>

            <footer>
                <div class="footer-top">
                    <div class="container">
                        <div class="footer-brand">
                            <a href="#" class="logo">
                               <img src={logo} alt="Funel logo"  className='logoimg'/> 
                            </a>

                            <p class="footer-text">Follow us on</p>

                            <ul class="social-list">
                                <li>
                                    <a href="https://github.com/codewithsadee" class="social-link">
                                       <IconBrandGithub />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://instagram.com/codewithsadee" class="social-link">
                                       <IconBrandInstagram />
                                    </a>
                                </li>

                                <li>
                                    <a href="https://youtube.com/c/codewithsadee" class="social-link">
                                       <IconBrandYoutube />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="social-link">
                                        <IconBrandFacebook />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="footer-link-box">
                            <ul class="footer-link-list">
                                <li>
                                    <h3 class="h4 link-title">Company</h3>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        About Us
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Features
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Pricing
                                    </a>
                                </li>
                            </ul>

                            <ul class="footer-link-list">
                                <li>
                                    <h3 class="h4 link-title">Products</h3>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Blog
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Help Center
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <ul class="footer-link-list">
                                <li>
                                    <h3 class="h4 link-title">Resources</h3>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        FAQ’S
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Testimonial
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>

                            <ul class="footer-link-list">
                                <li>
                                    <h3 class="h4 link-title">Relevent</h3>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Why
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Products
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">
                                        Customers
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p class="copyright">
                        &copy; 2022 <a href="#">@workzone</a> All right reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Landing;
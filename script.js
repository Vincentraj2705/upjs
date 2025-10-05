// Course Details Data
const courseDetails = {
    python: {
        title: "Python Programming",
        description: "Master Python from basics to advanced concepts with hands-on projects and real-world applications.",
        curriculum: [
            "We'll teach Python fundamentals and syntax",
            "We'll teach data structures (lists, dictionaries, tuples)",
            "We'll teach control flow (loops, conditionals)",
            "We'll teach functions and modules",
            "We'll teach object-oriented programming concepts",
            "We'll teach file handling and exception management",
            "We'll teach working with APIs and web scraping",
            "We'll teach data manipulation with pandas",
            "We'll teach automation and scripting",
            "We'll teach project development and best practices"
        ],
        duration: "8 weeks",
        level: "Beginner to Advanced"
    },
    cpp: {
        title: "C/C++ Programming",
        description: "Build strong programming fundamentals with C/C++ and understand system-level programming concepts.",
        curriculum: [
            "We'll teach C language fundamentals and syntax",
            "We'll teach data types and variables",
            "We'll teach control structures and loops",
            "We'll teach functions and parameter passing",
            "We'll teach arrays and pointers",
            "We'll teach structures and unions",
            "We'll teach C++ object-oriented programming",
            "We'll teach classes, objects, and inheritance",
            "We'll teach polymorphism and encapsulation",
            "We'll teach memory management and optimization"
        ],
        duration: "10 weeks",
        level: "Beginner to Intermediate"
    },
    excel: {
        title: "Advanced Excel",
        description: "Transform your data analysis skills with advanced Excel techniques and automation.",
        curriculum: [
            "We'll teach Excel interface and basic operations",
            "We'll teach formulas and functions (VLOOKUP, INDEX, MATCH)",
            "We'll teach pivot tables and data analysis",
            "We'll teach conditional formatting and data validation",
            "We'll teach charts and data visualization",
            "We'll teach macros and VBA programming",
            "We'll teach data cleaning and preparation",
            "We'll teach advanced statistical functions",
            "We'll teach dashboard creation",
            "We'll teach automation techniques"
        ],
        duration: "6 weeks",
        level: "Beginner to Advanced"
    },
    office: {
        title: "Microsoft Office Suite",
        description: "Master the complete Microsoft Office suite including Excel, Word, and PowerPoint for professional productivity.",
        curriculum: [
            "We'll teach Microsoft Word document creation and formatting",
            "We'll teach advanced Word features (mail merge, templates)",
            "We'll teach Excel spreadsheet management and analysis",
            "We'll teach PowerPoint presentation design principles",
            "We'll teach creating professional slides and animations",
            "We'll teach collaboration features across Office apps",
            "We'll teach document sharing and version control",
            "We'll teach integration between Office applications",
            "We'll teach productivity tips and shortcuts",
            "We'll teach professional report and presentation creation"
        ],
        duration: "8 weeks",
        level: "Beginner to Advanced"
    },
    powerbi: {
        title: "Power BI Analytics",
        description: "Transform raw data into powerful insights with Microsoft Power BI's advanced analytics and visualization tools.",
        curriculum: [
            "We'll teach Power BI interface and navigation",
            "We'll teach data connection and import techniques",
            "We'll teach data modeling and relationships",
            "We'll teach DAX (Data Analysis Expressions) formulas",
            "We'll teach creating interactive visualizations",
            "We'll teach dashboard design and best practices",
            "We'll teach advanced chart types and custom visuals",
            "We'll teach data transformation with Power Query",
            "We'll teach report publishing and sharing",
            "We'll teach performance optimization and troubleshooting"
        ],
        duration: "6 weeks",
        level: "Beginner to Advanced"
    },
    english: {
        title: "Spoken English",
        description: "Enhance your communication skills and build confidence in speaking English fluently and effectively.",
        curriculum: [
            "We'll teach pronunciation and accent improvement",
            "We'll teach vocabulary building and word usage",
            "We'll teach grammar in conversational context",
            "We'll teach sentence structure and fluency",
            "We'll teach public speaking and presentation skills",
            "We'll teach business communication and etiquette",
            "We'll teach interview preparation and techniques",
            "We'll teach group discussion and debate skills",
            "We'll teach listening comprehension improvement",
            "We'll teach confidence building and fear reduction"
        ],
        duration: "8 weeks",
        level: "Beginner to Advanced"
    }
};

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// WhatsApp redirect function
function redirectToWhatsApp() {
    window.open('https://wa.me/9943648032', '_blank');
}

// Login Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Course Modal Functions
function openCourseModal(courseKey) {
    const course = courseDetails[courseKey];
    if (!course) return;

    const courseDetailsHTML = `
        <div class="course-detail">
            <h3>${course.title}</h3>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p><strong>Level:</strong> ${course.level}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <h4 style="color: #4dff88; margin: 1.5rem 0 1rem 0;">Course Curriculum:</h4>
            <ul class="curriculum-list">
                ${course.curriculum.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <div style="text-align: center; margin-top: 2rem;">
                <button class="contact-btn" onclick="redirectToWhatsApp()">
                    <i class="fab fa-whatsapp"></i> Get More Details
                </button>
            </div>
        </div>
    `;

    document.getElementById('courseDetails').innerHTML = courseDetailsHTML;
    document.getElementById('courseModal').style.display = 'block';
}

function closeCourseModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Login form handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Demo credentials check
            if (username === 'student' && password === 'demo123') {
                closeLoginModal();
                showStudentDashboard();
            } else {
                alert('Invalid credentials! Please use:\nUsername: student\nPassword: demo123');
            }
        });
    }
});

// Student Dashboard
function showStudentDashboard() {
    const dashboardHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Student Dashboard - Upzen</title>
            <link rel="stylesheet" href="styles.css">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
            <style>
                .dashboard-container {
                    padding: 100px 20px 50px;
                    min-height: 100vh;
                }
                
                .dashboard-header {
                    text-align: center;
                    margin-bottom: 3rem;
                    color: white;
                }
                
                .dashboard-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }
                
                .dashboard-card {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 15px;
                    padding: 2rem;
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                }
                
                .dashboard-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                }
                
                .dashboard-icon {
                    font-size: 3rem;
                    color: #2a5298;
                    margin-bottom: 1rem;
                }
                
                .dashboard-card h3 {
                    color: #1e3c72;
                    margin-bottom: 1rem;
                }
                
                .dashboard-card p {
                    color: #666;
                    margin-bottom: 1.5rem;
                }
                
                .back-btn {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    background: linear-gradient(45deg, #00d4aa, #4dff88);
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 1.2rem;
                    z-index: 1000;
                    transition: transform 0.3s ease;
                }
                
                .back-btn:hover {
                    transform: scale(1.1);
                }
                
                .section-content {
                    background: rgba(255, 255, 255, 0.95);
                    border-radius: 15px;
                    padding: 2rem;
                    margin: 2rem 0;
                    display: none;
                }
                
                .section-content.active {
                    display: block;
                }
                
                .class-item, .assessment-item {
                    background: rgba(42, 82, 152, 0.1);
                    padding: 1rem;
                    margin: 1rem 0;
                    border-radius: 10px;
                    border-left: 4px solid #4dff88;
                }
                
                .progress-bar {
                    background: #e0e0e0;
                    border-radius: 10px;
                    height: 10px;
                    margin: 1rem 0;
                }
                
                .progress-fill {
                    background: linear-gradient(45deg, #00d4aa, #4dff88);
                    height: 100%;
                    border-radius: 10px;
                    transition: width 0.3s ease;
                }
            </style>
        </head>
        <body>
            <button class="back-btn" onclick="window.location.href='index.html'">
                <i class="fas fa-arrow-left"></i>
            </button>
            
            <div class="dashboard-container">
                <div class="dashboard-header">
                    <h1>Welcome to Your Dashboard</h1>
                    <p>Track your learning progress and access course materials</p>
                </div>
                
                <div class="dashboard-grid">
                    <div class="dashboard-card" onclick="showSection('live-classes')">
                        <div class="dashboard-icon">
                            <i class="fas fa-video"></i>
                        </div>
                        <h3>Live Classes</h3>
                        <p>Join ongoing live sessions and interactive learning</p>
                    </div>
                    
                    <div class="dashboard-card" onclick="showSection('recorded-classes')">
                        <div class="dashboard-icon">
                            <i class="fas fa-play-circle"></i>
                        </div>
                        <h3>Recorded Classes</h3>
                        <p>Access recorded sessions anytime for revision</p>
                    </div>
                    
                    <div class="dashboard-card" onclick="showSection('assessments')">
                        <div class="dashboard-icon">
                            <i class="fas fa-clipboard-check"></i>
                        </div>
                        <h3>Assessments</h3>
                        <p>Take tests and track your performance</p>
                    </div>
                    
                    <div class="dashboard-card" onclick="showSection('assignments')">
                        <div class="dashboard-icon">
                            <i class="fas fa-tasks"></i>
                        </div>
                        <h3>Assignments</h3>
                        <p>Complete assignments and submit your work</p>
                    </div>
                    
                    <div class="dashboard-card" onclick="showSection('attendance')">
                        <div class="dashboard-icon">
                            <i class="fas fa-calendar-check"></i>
                        </div>
                        <h3>Attendance</h3>
                        <p>View your attendance records and schedule</p>
                    </div>
                    
                    <div class="dashboard-card" onclick="showSection('course-details')">
                        <div class="dashboard-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        <h3>Course Details</h3>
                        <p>Explore your enrolled courses and materials</p>
                    </div>
                </div>
                
                <!-- Live Classes Section -->
                <div id="live-classes" class="section-content">
                    <h2>Live Classes</h2>
                    <div class="class-item">
                        <h4>Python Programming - Session 5</h4>
                        <p><strong>Time:</strong> Today 3:00 PM - 4:30 PM</p>
                        <p><strong>Topic:</strong> Object-Oriented Programming Concepts</p>
                        <button class="cta-btn">Join Now</button>
                    </div>
                    <div class="class-item">
                        <h4>Spoken English - Session 3</h4>
                        <p><strong>Time:</strong> Tomorrow 10:00 AM - 11:00 AM</p>
                        <p><strong>Topic:</strong> Business Communication</p>
                        <button class="cta-btn">Set Reminder</button>
                    </div>
                </div>
                
                <!-- Recorded Classes Section -->
                <div id="recorded-classes" class="section-content">
                    <h2>Recorded Classes</h2>
                    <div class="class-item">
                        <h4>Python Basics - Introduction</h4>
                        <p><strong>Duration:</strong> 1 hour 15 minutes</p>
                        <p><strong>Uploaded:</strong> 2 days ago</p>
                        <button class="cta-btn">Watch Now</button>
                    </div>
                    <div class="class-item">
                        <h4>Excel Functions and Formulas</h4>
                        <p><strong>Duration:</strong> 2 hours</p>
                        <p><strong>Uploaded:</strong> 1 week ago</p>
                        <button class="cta-btn">Watch Now</button>
                    </div>
                    <div class="class-item">
                        <h4>Power BI Dashboard Creation</h4>
                        <p><strong>Duration:</strong> 1 hour 45 minutes</p>
                        <p><strong>Uploaded:</strong> 3 days ago</p>
                        <button class="cta-btn">Watch Now</button>
                    </div>
                </div>
                
                <!-- Assessments Section -->
                <div id="assessments" class="section-content">
                    <h2>Assessments</h2>
                    <div class="assessment-item">
                        <h4>Python Quiz - Module 2</h4>
                        <p><strong>Due:</strong> Tomorrow</p>
                        <p><strong>Questions:</strong> 20</p>
                        <p><strong>Duration:</strong> 30 minutes</p>
                        <button class="cta-btn">Start Assessment</button>
                    </div>
                    <div class="assessment-item">
                        <h4>Excel Practical Test</h4>
                        <p><strong>Status:</strong> Completed</p>
                        <p><strong>Score:</strong> 85/100</p>
                        <button class="details-btn">View Results</button>
                    </div>
                </div>
                
                <!-- Assignments Section -->
                <div id="assignments" class="section-content">
                    <h2>Assignments</h2>
                    <div class="assessment-item">
                        <h4>Create a Python Calculator</h4>
                        <p><strong>Due:</strong> In 3 days</p>
                        <p><strong>Status:</strong> In Progress</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 60%;"></div>
                        </div>
                        <button class="cta-btn">Continue Working</button>
                    </div>
                    <div class="assessment-item">
                        <h4>Power BI Sales Dashboard</h4>
                        <p><strong>Due:</strong> Next week</p>
                        <p><strong>Status:</strong> Not Started</p>
                        <button class="cta-btn">Start Assignment</button>
                    </div>
                </div>
                
                <!-- Attendance Section -->
                <div id="attendance" class="section-content">
                    <h2>Attendance Record</h2>
                    <div class="assessment-item">
                        <h4>Overall Attendance</h4>
                        <p><strong>Total Classes:</strong> 24</p>
                        <p><strong>Attended:</strong> 22</p>
                        <p><strong>Percentage:</strong> 91.67%</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 91.67%;"></div>
                        </div>
                    </div>
                    <div class="assessment-item">
                        <h4>Recent Classes</h4>
                        <p>✅ Python Programming - Dec 1</p>
                        <p>✅ Spoken English - Nov 29</p>
                        <p>❌ Excel Advanced - Nov 27</p>
                        <p>✅ Power BI - Nov 25</p>
                    </div>
                </div>
                
                <!-- Course Details Section -->
                <div id="course-details" class="section-content">
                    <h2>Your Enrolled Courses</h2>
                    <div class="assessment-item">
                        <h4>Python Programming</h4>
                        <p><strong>Progress:</strong> 60% Complete</p>
                        <p><strong>Next Topic:</strong> File Handling</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 60%;"></div>
                        </div>
                    </div>
                    <div class="assessment-item">
                        <h4>Spoken English</h4>
                        <p><strong>Progress:</strong> 40% Complete</p>
                        <p><strong>Next Topic:</strong> Presentation Skills</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 40%;"></div>
                        </div>
                    </div>
                    <div class="assessment-item">
                        <h4>Power BI</h4>
                        <p><strong>Progress:</strong> 75% Complete</p>
                        <p><strong>Next Topic:</strong> Advanced DAX</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 75%;"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <script>
                function showSection(sectionId) {
                    // Hide all sections
                    document.querySelectorAll('.section-content').forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Show selected section
                    document.getElementById(sectionId).classList.add('active');
                    
                    // Scroll to section
                    document.getElementById(sectionId).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            </script>
        </body>
        </html>
    `;

    // Open dashboard in a new window
    const dashboardWindow = window.open('', '_blank');
    dashboardWindow.document.write(dashboardHTML);
    dashboardWindow.document.close();
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const loginModal = document.getElementById('loginModal');
    const courseModal = document.getElementById('courseModal');
    
    if (event.target === loginModal) {
        closeLoginModal();
    }
    
    if (event.target === courseModal) {
        closeCourseModal();
    }
});

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate course cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);

    // Observe course cards
    document.querySelectorAll('.course-card').forEach(card => {
        observer.observe(card);
    });
});

// Add CSS animation for cards
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .course-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);
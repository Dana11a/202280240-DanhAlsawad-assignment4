# Technical Documentation

## 1. Project Overview

This project is an interactive front-end portfolio website built using HTML, CSS, and JavaScript.

It extends previous assignments by adding advanced functionality such as API integration, state management, and complex user interactions.  
The goal is to demonstrate real-world web development concepts including dynamic data fetching, conditional logic, and responsive UI design.

---
## 2. Structure
```
202280240-DanhAlsawad-assignment-3/
│
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
│
└── .gitignore
```


### index.html

Contains:
- Navigation bar with section links (About, Projects, GitHub, Contact)
- Hero section with introduction and personalized greeting input
- About section with structured layout and skills list
- Projects section with filtering and sorting controls
- GitHub section for displaying repositories (API-based)
- Contact form with validation
- Footer with live timer

---

### styles.css

Handles:
- Layout using Flexbox and Grid
- Typography, spacing, and visual hierarchy
- Hero section and UI styling
- Project and GitHub card design
- Buttons, hover effects, and transitions
- Dark/Light theme using CSS variables
- Responsive design with media queries
- Scroll animations (fade-in / reveal)

---

### script.js

JavaScript is used to implement advanced interactivity:

#### State Management
- Theme toggle with `localStorage` (remembers user preference)
- Visitor name storage and personalized greeting display

#### Complex Logic
- Project filtering by category (Web, Database, Desktop)
- Project sorting:
  - Name (A–Z / Z–A)
  - Date (Newest / Oldest)
- Conditional rendering (empty message if no projects match)

#### Form Validation
- Required field validation
- Email format validation using regex
- Minimum message length validation
- Dynamic error and success feedback

#### Timer
- Tracks and displays time spent on the website in real-time

#### API Integration
- Fetches GitHub repositories using the GitHub API
- Displays repository name, description, stars, forks, and language
- Handles API errors with fallback message

#### Animations
- Scroll-based reveal animations for sections

---

## 3. Responsive Design

- Implemented using Flexbox and CSS Grid
- Used percentage-based widths and flexible containers
- Media queries applied for:
  - Tablets
  - Mobile devices
- Ensured readability and proper spacing across screen sizes

---

## 4. Dark Mode Implementation

- A `.light` class is toggled on the `<body>`
- Theme preference stored using `localStorage`
- CSS variables control colors dynamically
- Ensures consistent theme across all components

---


## 5. Interactive Features

### Project Filtering & Sorting
- Users can filter projects by category
- Sorting options reorder projects dynamically
- DOM updates reflect user selection in real-time

### GitHub Integration
- Fetches latest repositories dynamically
- Displays real-time data from external API
- Provides clickable repository cards

### Visitor Personalization
- User enters their name
- Name is stored using `localStorage`
- Greeting updates dynamically on reload

### Timer
- Displays how long the user has been on the site
- Updates every second

### Contact Form
- Validates user input before submission
- Shows real-time error messages
- Displays success message when valid

### Scroll Animations
- Sections animate into view on scroll
- Enhances user engagement

---

## 6. Performance Optimization

- Images use `loading="lazy"` to improve load time
- Code is structured and avoids duplication
- CSS variables reduce repetition
- Removed unused styles and scripts
- Efficient DOM updates used in filtering/sorting

---

## 7. Image Handling

- Images stored in `assets/images`
- Styled with:
  - `width: 100%`
  - `object-fit: cover`
  - `border-radius` for consistency
- Responsive across all devices

---

## 8. Browser Testing

Tested on:
- Google Chrome
- Microsoft Edge

Results:
- No major layout or functionality issues
- All features (API, filtering, form validation, timer) work correctly
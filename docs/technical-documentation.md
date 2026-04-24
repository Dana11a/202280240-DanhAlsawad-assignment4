# Technical Documentation

## 1. Project Overview

This project is a complete and professional front-end portfolio web application built using HTML, CSS, and JavaScript.

It represents the final stage of development, combining all previously learned concepts into a fully functional and polished product. The application demonstrates real-world web development practices including dynamic data handling, state management, API integration, and responsive design.

The goal of this project is to showcase technical skills through an interactive, user-friendly, and production-ready portfolio.

---

## 2. Project Structure
```
202280240-danhalsawad-assignment4/
│
├── README.md
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
├── assets/
│ └── images/
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
├── presentation/
│ ├── slides.pdf
│ └── demo-video.mp4
│ └── demo-video-link.txt
└── .gitignore
```


---

## 3. File Description
### index.html

Contains the main structure of the application:

- Navigation bar with section links (About, Projects, GitHub, Contact)
- Hero section with introduction and personalized greeting input
- About section with structured layout and skills list
- Projects section with filtering, sorting, and search functionality
- GitHub section displaying repositories via API
- Contact form with validation
- Footer with live session timer

---

### styles.css

Responsible for styling and layout:

- Layout using Flexbox and CSS Grid
- Typography, spacing, and visual hierarchy
- Modern UI styling (cards, buttons, gradients)
- Dark/Light theme using CSS variables
- Responsive design using media queries
- Smooth transitions and hover effects
- Scroll-based reveal animations

---

### script.js

Implements all application logic and interactivity:

#### State Management
- Theme toggle using `localStorage`
- Visitor name storage and dynamic greeting display

#### Complex Logic
- Project filtering by category (Web, Database, Desktop)
- Project sorting:
  - Name (A–Z / Z–A)
  - Date (Newest / Oldest)
- Project search functionality (filter by name input)
- Conditional rendering (empty state message)

#### Form Validation
- Required field validation
- Email format validation using regex
- Minimum message length validation
- Real-time error and success feedback

#### Timer
- Tracks and displays user session duration in real time

#### API Integration
- Fetches GitHub repositories using the GitHub API
- Dynamically renders repository data
- Handles loading and error states gracefully

#### Animations
- Scroll-based reveal animations for sections
- Enhances user engagement and visual flow

---

## 4. Responsive Design

- Implemented using Flexbox and CSS Grid
- Uses flexible layouts and relative units
- Media queries applied for:
  - Tablets
  - Mobile devices
- Ensures readability, spacing, and usability across all screen sizes

---

## 5. Dark Mode Implementation

- A `.light` class is toggled on the `<body>`
- Theme preference stored using `localStorage`
- CSS variables dynamically control colors
- Ensures consistent styling across all components

---

## 6. Interactive Features

### Project Filtering, Sorting & Search
- Users can filter projects by category
- Sorting dynamically reorders projects
- Search allows quick access to specific projects by name
- All interactions update the DOM in real time

### GitHub Integration
- Fetches repositories dynamically from GitHub API
- Displays repository details (name, description, metadata)
- Provides fallback UI for errors

### Visitor Personalization
- Stores user name using `localStorage`
- Displays personalized greeting on return visits

### Timer
- Displays how long the user has been on the website
- Updates every second

### Contact Form
- Validates input fields before submission
- Displays real-time error messages
- Shows success message when valid

### Scroll Animations
- Sections animate into view when scrolling
- Improves visual engagement

---

## 7. Performance Optimization

- Images use `loading="lazy"` to reduce initial load time
- Optimized CSS and JavaScript structure
- Removed unused code and redundant styles
- Efficient DOM updates for dynamic features
- Minimal reflows and smooth animations

---

## 8. Image Handling

- Images stored in `assets/images`
- Styled with:
  - `width: 100%`
  - `object-fit: cover`
  - `border-radius` for consistency
- Fully responsive across devices

---

## 9. Browser Testing

Tested on:
- Google Chrome
- Microsoft Edge

Results:
- No major layout or functionality issues
- All features (API, filtering, search, form validation, timer) function correctly

---

## 10. Future Improvements

- Add backend integration for contact form submission
- Implement authentication system
- Store projects dynamically using a database
- Enhance UI with advanced animations and transitions
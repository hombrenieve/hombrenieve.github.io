# Static Web Projects

This repository contains static web pages for various activities and events.

## Projects

### 🚒 Bomberos
Static web page demo for kids' school activities. Contains a simple HTML page with styling and JavaScript for an interactive firefighter-themed presentation.

### 🦁 Leones
Another static web page demo for kids' school activities. Features a creative design with images and interactive elements for a lion-themed presentation.

### 🎅 Santa Claus is Coming
Annual Christmas Eve treasure hunt game website. Each year gets its own folder with HTML pages for the interactive treasure hunt experience.

- **2024/**: Current year's treasure hunt with multiple numbered pages and game logic
- **2025/**: Upcoming year's version (in development)
- **shared/**: Common assets and resources used across years

## Structure

Each project is self-contained with its own:
- HTML pages
- CSS stylesheets  
- JavaScript files
- Images and assets

All projects are designed to run as static websites without server-side dependencies.

## Running Locally

To test any of the projects locally, you can use Python's built-in web server:

```bash
# Navigate to the project folder you want to test
cd bomberos
# or cd leones
# or cd santaclausiscoming/2024

# Start a simple HTTP server
python3 -m http.server 8000

# Open your browser and go to:
# http://localhost:8000
```

Alternatively, you can use any other static file server like:
- `npx serve .` (if you have Node.js)
- `php -S localhost:8000` (if you have PHP)
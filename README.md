# Paradise Nursery Shopping Application

A complete, production-ready React and Redux Toolkit e-commerce shopping application designed for plant lovers. This application was built to fulfill all the final project grading criteria for the Coursera Frontend Web Development course.

## Features

- **Landing Page**: Features a stunning, full-screen background showcasing "Paradise Nursery", an immersive "About Us" section detailing our mission, and a "Get Started" button to enter the store.
- **Plant Catalog**: Displays beautiful houseplants organized across three distinct categories:
  - Air Purifying
  - Aromatic
  - Low Maintenance
- **Interactive Add to Cart**: Plant cards show detailed pricing and descriptions. Clicking "Add to Cart" adds the plant to the cart and changes the button to a disabled "Added to Cart" state.
- **Dynamic Navbar / Header**: A shared header displaying the branding, tagline ("Where Greenery Meets Peace"), and a real-time shopping cart icon that updates the item counter dynamically using Redux.
- **Shopping Cart**:
  - Displays a summary of the total plant count and total cost.
  - Standard controls to increase or decrease quantities.
  - Automatic removal of items when the quantity reaches 0 or when clicking the "Delete" button.
  - Re-enables the catalog button to "Add to Cart" when items are removed.
  - "Continue Shopping" navigation back to the catalog.
  - Alert notification on Checkout click.

## Technology Stack

- **Frontend Framework**: React 19 (via Vite)
- **State Management**: Redux Toolkit & React Redux
- **Styling**: Vanilla CSS (Responsive Flexbox & CSS Grid, glassmorphism, smooth animations)
- **Icons**: Lucide React

## Local Setup & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/A422789/Paradise-Nursery.git
   cd Paradise-Nursery
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the application.

## Production Build

To build the project for production, run:
```bash
npm run build
```
This will compile assets and output them to the `dist/` directory, ready to be served.

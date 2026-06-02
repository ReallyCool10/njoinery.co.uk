# N Joinery - Professional Architectural Joinery Website

A modern, professional website for N Joinery - a specialist in high-end fitted architectural joinery.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Aesthetic**: Premium styling with elegant typography and color scheme
- **Multiple Pages**:
  - Home: Hero section with services overview
  - Portfolio: Showcase of completed projects
  - About: Company information and values
  - Contact: Contact form and information
- **Professional Branding**: Custom styling with gold accents and sophisticated palette
- **Fast Performance**: Static HTML/CSS/JS site with no external dependencies

## Setup Instructions

### Domain Configuration

1. **DNS Settings**: Update your domain registrar's DNS records:
   - Add A records pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   
   OR
   
   - Add CNAME record pointing to: `ReallyCool10.github.io`

2. **GitHub Pages**: The repository is configured for GitHub Pages with the CNAME file

### Contact Form Setup

The contact form uses Formspree for email submissions. To enable it:

1. Visit [Formspree.io](https://formspree.io)
2. Create a new form with your email address
3. Copy your form ID
4. Update the `contact.html` file, line with `action="https://formspree.io/f/YOUR_FORM_ID"`
5. Replace `YOUR_FORM_ID` with your actual form ID

## File Structure

```
├── index.html          # Home page
├── portfolio.html      # Portfolio/gallery page
├── about.html          # About company page
├── contact.html        # Contact page
├── CNAME              # Domain configuration
├── css/
│   └── style.css      # All styling
├── js/
│   └── script.js      # Interactivity and animations
└── README.md          # This file
```

## Customization

### Colors
- Primary Dark: `#2c2416`
- Gold Accent: `#d4af37`
- Light Background: `#f9f7f4`

Edit these in `css/style.css` to match your brand.

### Content
- Update company information in each HTML file
- Replace portfolio project descriptions with your own
- Add your contact details in `contact.html`

### Images
Add project images to an `images/` folder and update the portfolio items with real image paths.

## Technologies Used

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- GitHub Pages (hosting)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 N Joinery. All rights reserved.

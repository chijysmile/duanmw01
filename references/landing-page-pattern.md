# Landing Page + Scroll Overlay Pattern

## Overview

A modern portfolio entry pattern featuring:
1. **Separate landing page** (`landing.html`) with spotlight reveal effect
2. **Landing overlay** in main site that slides down when scrolling up from top

## Design Requirements

### Landing Page (`landing.html`)
- **Dual-layer text**:
  - Surface: "dMo1" (dark color #1a1a1e, nearly invisible on black)
  - Underlying: "段默文" (green gradient, revealed by spotlight)
- **Spotlight effect**: `radial-gradient(circle 280px at mouseX mouseY, transparent, rgba(5,5,7,0.98))`
- **Custom cursor**: Fixed circle border that follows mouse
- **Click to enter**: Fade out animation → navigate to index.html#main

### Main Site Overlay
- **Trigger condition**: `scrollY === 0 AND currentScrollY < lastScrollY`
- **Animation**: Slide down from top with `transform: translateY(-100%)`
- **Dismiss**: Click to fade out, or scroll down

## Implementation

### CSS Variables for Theme Consistency
```css
:root {
  --bg-abyss: #050507;
  --accent-green: #00d992;
  --text-primary: #f0f0f2;
}
```

### Spotlight CSS
```css
.underlying {
  background: radial-gradient(circle 280px at var(--mx, 50%) var(--my, 50%), transparent 0%, rgba(5,5,7,0.98) 100%);
}
```

### JavaScript Logic
```javascript
// Update spotlight position
document.addEventListener('mousemove', e => {
  underlying.style.background = `radial-gradient(circle 280px at ${e.clientX}px ${e.clientY}px, transparent 0%, rgba(5,5,7,0.98) 100%)`;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Scroll-based overlay trigger
let lastScrollY = 0;
let isLandingVisible = false;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const isAtTop = currentScrollY === 0;

  if (currentScrollY < lastScrollY && isAtTop && !isLandingVisible) {
    // Scroll up at top - show landing
    isLandingVisible = true;
    landingOverlay.classList.add('visible');
  } else if (currentScrollY > lastScrollY && isLandingVisible) {
    // Scroll down - hide landing
    isLandingVisible = false;
    landingOverlay.classList.remove('visible');
  }

  lastScrollY = currentScrollY;
});
```

## Common Pitfalls

1. **Overlapping elements**: Landing overlay must be `position: fixed; z-index: 2000` to cover all content
2. **Scroll detection**: Must check BOTH `scrollY === 0` AND direction change, not just direction
3. **Cursor circle**: Use `mix-blend-mode: screen` for visibility on both light/dark themes
4. **Font loading**: Include Google Fonts in both landing.html and index.html for consistency
5. **Theme toggle**: Landing page should inherit theme or use its own consistent dark theme

## Files Structure
```
portfolio/
├── landing.html      # Entry page with spotlight effect
├── index.html        # Main site with overlay trigger
├── src/
│   ├── main.jsx
│   └── App.jsx
└── public/
    └── favicon.svg
```

## Testing Checklist

- [ ] Landing page shows "dMo1" text (dark) and "段默文" (green) with cursor reveal
- [ ] Custom cursor circle follows mouse
- [ ] Click landing page → fade out → enter main site
- [ ] Scroll down in main site
- [ ] Scroll to top, continue up → landing overlay slides down
- [ ] Click overlay → fades out
- [ ] Scroll down → overlay hides
- [ ] Theme toggle works in both pages

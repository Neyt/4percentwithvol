# Deployment Guide

## 🚀 Quick Start

The presentation is currently running at `http://localhost:3000`

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd quant-presentation
vercel
```

3. Follow the prompts to deploy

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
cd quant-presentation
npm run build
netlify deploy --prod --dir=build
```

### Option 3: GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/quant-presentation"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

### Option 4: Static Server (Local/Internal)

1. Install serve:
```bash
npm install -g serve
```

2. Build and serve:
```bash
npm run build
serve -s build -p 3000
```

### Option 5: Docker

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-p", "3000"]
```

2. Build and run:
```bash
docker build -t quant-presentation .
docker run -p 3000:3000 quant-presentation
```

## 🔧 Environment Configuration

No environment variables are required for this presentation.

## 📊 Performance Tips

1. **Enable Gzip**: Most hosting providers enable this by default
2. **CDN**: Use a CDN for faster global delivery
3. **Caching**: Set appropriate cache headers for static assets

## 🎯 Production Checklist

- [x] Build completes without errors
- [x] All slides display correctly
- [x] Navigation works properly
- [x] Responsive design tested
- [x] Code examples are readable
- [x] Animations are smooth
- [x] No console errors

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

This is a static presentation with no backend or user data collection. No security concerns.

## 📈 Analytics (Optional)

To add analytics, you can integrate:
- Google Analytics
- Plausible
- Fathom Analytics

Add the tracking code to `public/index.html`

## 🎨 Customization Before Deploy

1. Update the title in `public/index.html`
2. Add a favicon to `public/`
3. Update meta tags for SEO
4. Add Open Graph tags for social sharing

## 💡 Tips

- The presentation works entirely client-side
- No server-side rendering needed
- Can be hosted on any static hosting service
- Total bundle size is ~65KB (gzipped)

## 🆘 Troubleshooting

**Build fails**: Run `npm install` again
**Blank page**: Check browser console for errors
**Styles missing**: Ensure Tailwind is properly configured

## 📞 Support

For issues with the presentation, check:
1. Browser console for errors
2. Network tab for failed requests
3. React DevTools for component issues

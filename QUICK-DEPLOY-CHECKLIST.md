# Quick Deployment Checklist — GitHub Pages

## Pre-Deployment
- [x] Images optimized (WebP with fallbacks)
- [x] Videos compressed
- [x] Google Analytics configured (G-7362ENH6T2)
- [x] SEO meta tags updated for orlandooracle.com
- [x] Social media links verified
- [x] Forms migrated to Web3Forms
- [x] Mobile responsive tested
- [x] Color scheme rebranded to dark oracle gold
- [x] Facebook Pixel placeholder removed
- [x] Phone number updated to (877) 567-8921
- [x] CNAME file added for custom domain
- [x] 404.html created for GitHub Pages
- [x] _redirects file removed (Netlify-specific)

## GitHub Pages Deployment

```bash
# 1. Push to GitHub
git add -A
git commit -m "Rebrand to dark oracle gold + migrate to GitHub Pages"
git push origin main

# 2. Enable GitHub Pages in repo settings:
#    Settings → Pages → Source: Deploy from branch → main → / (root)

# 3. Custom domain will be set automatically via CNAME file
```

## DNS Configuration (Google Domains)

**Remove** old Netlify A records, then add:

| Type  | Name | Value                |
|-------|------|----------------------|
| A     | @    | 185.199.108.153      |
| A     | @    | 185.199.109.153      |
| A     | @    | 185.199.110.153      |
| A     | @    | 185.199.111.153      |
| CNAME | www  | OrlandoOracle.github.io |

## Web3Forms Setup

1. Go to https://web3forms.com
2. Create an access key (free, enter info@orlandooracle.com)
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in index.html (2 places: contact form + newsletter)

## Post-Deployment Testing

- [ ] Visit https://orlandooracle.com — confirm gold theme loads
- [ ] Visit https://www.orlandooracle.com — confirm redirect
- [ ] Confirm valid SSL certificate
- [ ] Test contact form submission
- [ ] Test newsletter signup
- [ ] Verify Google Analytics real-time
- [ ] Check all social media links
- [ ] Run PageSpeed Insights
- [ ] Test on mobile (320px, 768px, 1024px)

## Support Info

- **Domain**: orlandooracle.com
- **Hosting**: GitHub Pages (OrlandoOracle/magicsite)
- **Analytics ID**: G-7362ENH6T2
- **Contact Email**: info@orlandooracle.com
- **Phone**: (877) 567-8921
- **Forms**: Web3Forms (free tier, 250 submissions/month)

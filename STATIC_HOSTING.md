# Static Hosting Configuration

This website is configured for static export and works with various static hosting services.

## Build

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Static Hosting Services

### Netlify

The `public/_redirects` file is automatically used by Netlify to handle client-side routing. No additional configuration needed.

### Vercel

Vercel automatically detects Next.js static exports. The `trailingSlash: true` configuration ensures proper routing.

### GitHub Pages

1. Build the site: `npm run build`
2. Copy the `out/` directory contents to your `gh-pages` branch
3. The generated `404.html` will handle client-side routing

### Apache

The `public/.htaccess` file is included for Apache servers. Make sure `mod_rewrite` is enabled.

### Nginx

Add this to your Nginx configuration:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Page Refresh Support

All pages are configured with trailing slashes (`/en/`, `/en/documentation/`) which ensures proper page refresh support on static servers. The routing is handled client-side for navigation, and server-side files exist for direct access and page refreshes.


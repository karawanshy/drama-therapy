/**
 * Image Preloader Utility
 * Preloads images to improve perceived performance
 */

// Route-to-Image Mapping
export const routeImages: Record<string, string[]> = {
  '/': ['/src/assets/hero-drama-therapy.jpg'],
  '/about': ['/src/assets/about-therapy-new.jpg'],
  '/drama-therapy': ['/src/assets/drama-therapy-concept.jpg'],
  '/services': ['/src/assets/services-header.jpg'],
  '/contact': ['/src/assets/contact-curtains.jpg'],
};

/**
 * Preload images for a specific route
 */
export const preloadRouteImages = (route: string): void => {
  const images = routeImages[route];
  if (!images) return;

  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

/**
 * Preload an image by creating an Image object
 */
export const preloadImage = (src: string): void => {
  const img = new Image();
  img.src = src;
};

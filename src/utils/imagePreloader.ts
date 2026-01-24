/**
 * Image Preloader Utility
 * Preloads images to improve perceived performance
 */

// Import all images
import heroImage from "@/assets/therapist-hero.png";
import aboutImage from "@/assets/about-therapy-new.jpg";
import dramaImage from "@/assets/drama-therapy-concept.jpg";
import servicesImage from "@/assets/services-header.jpg";
import contactImage from "@/assets/contact-curtains.jpg";

// All images to preload
const allImages = [
  heroImage,
  aboutImage,
  dramaImage,
  servicesImage,
  contactImage,
];

/**
 * Preload all site images
 * Returns a promise that resolves when all images are loaded
 */
export const preloadAllImages = (): Promise<void[]> => {
  return Promise.all(
    allImages.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Resolve even on error to not block
        img.src = src;
      });
    })
  );
};

/**
 * Preload an image by creating an Image object
 */
export const preloadImage = (src: string): void => {
  const img = new Image();
  img.src = src;
};

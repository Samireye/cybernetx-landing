import emailjs from '@emailjs/browser';

// Initialize EmailJS once
const initEmailJS = () => {
  try {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('EmailJS initialization error:', error);
  }
};

export default initEmailJS;

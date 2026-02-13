import { createCreem } from 'creem_io';

// Initialize the Creem client
export const creem = createCreem({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.NODE_ENV !== 'production', // Automatically switch based on environment
});

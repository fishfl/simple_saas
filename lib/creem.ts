import { createCreem } from 'creem_io';

// Initialize the Creem client
export const creem = createCreem({
  apiKey: process.env.CREEM_API_KEY!,
  testMode: process.env.CREEM_TEST_MODE === 'true', // Explicitly set via environment variable
});

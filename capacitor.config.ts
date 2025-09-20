import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7814eb13b3fd413d98c34ad69752c6f6',
  appName: 'SocialAI - Content Automation',
  webDir: 'dist',
  server: {
    url: 'https://7814eb13-b3fd-413d-98c3-4ad69752c6f6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1a2e',
      showSpinner: false,
    },
  },
};

export default config;
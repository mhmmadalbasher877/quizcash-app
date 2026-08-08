import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.quizcash.game',
  appName: 'QuizCash',
  webDir: 'dist/client',
  bundledWebRuntime: false,
  plugins: {
    AdMob: {
      androidAppId: 'ca-app-pub-4873534887552532~4728997315',
      iosAppId: 'ca-app-pub-4873534887552532~5495284076',
    },
  },
};

export default config;

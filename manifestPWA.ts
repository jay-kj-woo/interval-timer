export const createManifestForPWA = (startUrl: string) => {
  return {
    name: 'Interval Timer',
    short_name: 'Timer',
    description:
      'A customizable interval timer for your workouts and activities',
    start_url: startUrl,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#7e22ce',
    orientation: 'portrait',
    icons: [
      {
        src: 'icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: 'icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };
};

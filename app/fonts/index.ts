import localFont from 'next/font/local';

export const ibmPlexSansArabic = localFont({
  src: [
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Thin.otf', weight: '100', style: 'normal' },
    {
      path: './IBMPlexSansArabic/IBMPlexSansArabic-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Light.otf', weight: '300', style: 'normal' },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Regular.otf', weight: '400', style: 'normal' },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Text.otf', weight: '450', style: 'normal' },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Medium.otf', weight: '500', style: 'normal' },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-SemiBold.otf', weight: '600', style: 'normal' },
    { path: './IBMPlexSansArabic/IBMPlexSansArabic-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

import { track } from '@vercel/analytics';

type EventProperties = Record<string, string | number | boolean | null>;

export function trackEvent(name: string, properties?: EventProperties) {
  track(name, properties);
}

export const analyticsEvents = {
  demoCtaClick: 'demo_cta_click',
  videoCtaClick: 'video_cta_click',
  contactFormSubmit: 'contact_form_submit',
  contactFormSuccess: 'contact_form_success',
  contactFormError: 'contact_form_error',
  emailClick: 'email_click',
  phoneClick: 'phone_click',
  solutionCtaClick: 'solution_cta_click',
  logoDownloadClick: 'logo_download_click',
};

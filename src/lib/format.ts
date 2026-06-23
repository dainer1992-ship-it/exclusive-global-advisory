export const WHATSAPP_URL =
  'https://wa.me/60125441068?text=I%20am%20interested%20to%20know%20more%20about%20business%20financial%20advisor.';

export const PHONE_LABEL = '+6012-544 1068';
export const PHONE_HREF = 'tel:+60125441068';
export const EMAIL = 'info@exclusiveglobaladvisory.com.my';
export const ADDRESS =
  'SS-02-20, SKY-POD Square, Persiaran Puchong Jaya Selatan, 47100 Puchong, Selangor';

export const socials = {
  instagram: 'https://www.instagram.com/exclusive_global_advisory/',
  facebook: 'https://www.facebook.com/profile.php?id=100066702705829',
  tiktok: 'https://www.tiktok.com/@wj.chung',
  youtube: 'https://www.youtube.com/watch?v=QsY8fnvMn6c',
};

function publicBasePath() {
  if (typeof window === 'undefined') return '/';
  return window.location.pathname.startsWith('/exclusive-global-advisory')
    ? '/exclusive-global-advisory/'
    : '/';
}

export function assetPath(filename: string) {
  return `${publicBasePath()}${filename.replace(/^\/+/, '')}`;
}

export function appPath(path: string) {
  const clean = path.replace(/^\/+/, '');
  return `${publicBasePath()}${clean}`;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace(/\s/g, '');
}

export function formatCompactCurrency(value: number) {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR',
    notation: 'compact',
    maximumFractionDigits: 1,
  })
    .format(value)
    .replace(/\s/g, '');
}

export function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export function formatYears(months: number) {
  return `${months} months (${(months / 12).toFixed(1)}y)`;
}

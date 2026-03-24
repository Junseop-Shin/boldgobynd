import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { trackEvent } from '@/lib/analytics';

export default function PageTracker() {
  const router = useRouter();
  useEffect(() => {
    trackEvent('page_view');
  }, [router.pathname]);
  return null;
}

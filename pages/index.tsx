import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Listing from '../components/Listing';
import styles from '../styles/pages/Index.module.scss';
import { listings } from '../util/listings';

export default function Index() {
  const router = useRouter();

  // highlight selected domain on start
  useEffect(() => {
    // get domain from router
    const { d } = router.query;
    if (typeof d !== 'string') return;
    // get bookmark
    const bookmark = document.getElementById(d.toLowerCase());
    if (!bookmark) return;
    // highlight listing
    const listing = bookmark.parentElement;
    if (!listing) return;
    bookmark.scrollIntoView();
    listing.className = `${styles.listing} ${styles.selected}`;
  }, [router.query]);

  return (
    <div className={styles.container}>
    </div>
  );
}

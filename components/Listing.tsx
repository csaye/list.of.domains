import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styles from '../styles/components/Listing.module.scss';
import { ListingType } from '../util/listings';

type Props = {
  listing: ListingType
};

export default function Listing(props: Props) {
  const { listing } = props;

  // returns link to purchase given listing
  function getBuyLink(listing: ListingType) {
    const domain = listing.domain.toLowerCase();
    if (listing.site === 'namecheap') {
      return `https://www.namecheap.com/market/buynow/${domain}/`;
    } else if (listing.site === 'dropcatch') {
      return `https://www.dropcatch.com/domain/${domain}`;
    }
  }

  return (
    <div className={styles.container}>
      <div
        id={listing.domain.toLowerCase()}
        className={styles.bookmark}
      />
      <div className={styles.details}>
        <a
          href={getBuyLink(listing)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {listing.domain}
        </a>
        <p>{listing.description}</p>
      </div>
      <a
        href={getBuyLink(listing)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AddShoppingCartIcon />Get Now
      </a>
    </div>
  );
}

import type {data} from "../../data/etsy";
import styles from "./Listing.module.css";

interface ListingProps {
  items: typeof data;
}

export const Listing = ({items}: ListingProps) => {
  return (
    <div className={styles["item-list"]}>
      {items.map((item) => (
        <div className={styles.item} key={item.listing_id}>
          <div className={styles["item-image"]}>
            <a href='https://www.etsy.com/listing/292754135/woodland-fairy'>
              <img src={item.MainImage?.url_570xN} />
            </a>
          </div>
          <div className={styles["item-details"]}>
            <p className={styles["item-title"]}>{item.title}</p>
            <p
              className={styles["item-price"]}
            >{`${item.currency_code}${item.price}`}</p>
            <p
              className={`${styles["item-quantity"]} ${styles["level-medium"]}`}
            >
              {item.quantity}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

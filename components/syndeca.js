import Script from "next/script";
import styles from '../styles/Syndeca.module.css';
export default function Syndeca() {
  return (
    <div className={styles.syndeca}>
      <div id={'syndeca'}></div>
      <Script
        src="//viewer.syndeca.com/scripts/syndeca-embed.js"
        data-guide-key="FB41283F-0E88-4C88-B9F7-843DC7EC2156"
        data-log="true"
      ></Script>
    </div>
  );
}
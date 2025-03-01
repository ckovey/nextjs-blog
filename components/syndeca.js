import Script from "next/script";
import styles from '../styles/Syndeca.module.css';
import {useEffect} from "react";
export default function Syndeca({ catalogKey}) {
  useEffect(() => {
    const syndecaContainer = document.getElementById('syndeca-container');

    const addSyndeca = () => {
      console.log('[syndeca-component] useEffect.addSyndeca');
      const div = document.createElement('div');
      div.id = 'syndeca';
      syndecaContainer.appendChild(div);
      const script = document.createElement('script');
      script.src = "//viewer.syndeca.com/scripts/syndeca-embed-tcp.js";
      script.async = true;
      script.setAttribute('data-guide-key', '40294C67-3BD9-410C-84C0-020B0980790B');
      script.setAttribute('data-catalog-key', catalogKey);
      script.setAttribute('data-log', 'true');
      syndecaContainer.appendChild(script);
      return script;
    };
    const removeSyndeca = () => {
      console.log('[syndeca-component] useEffect.removeSyndeca');
      syndecaContainer.replaceChildren();
    }

    addSyndeca();
    return () => {
      removeSyndeca();
    };
  });

  return (
    <div className={styles.syndeca} id={'syndeca-container'}>
    </div>
  );
}
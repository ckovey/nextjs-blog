import Script from "next/script";

export default function Syndeca() {
  return (
    <>
    <div id={'syndeca'}></div>
    <Script
      src="//viewer.syndeca.com/scripts/syndeca-embed.js"
      data-guide-key="FB41283F-0E88-4C88-B9F7-843DC7EC2156"
    ></Script>
    </>
  );
}
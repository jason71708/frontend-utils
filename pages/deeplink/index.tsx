import React from "react";
import DefaultPageLayout from "components/global/DefaultPageLayout";

export default function DeepLink() {
  const [text, setText] = React.useState('');
  const [url, setUrl] = React.useState('');

  return (
    <DefaultPageLayout
      title="DeepLink"
      description="Deep linking (Universal Link, App Link) is commonly used in mobile apps to allow users to jump directly to a specific part of the app, rather than having to navigate through menus and screens."
    >
      <ul>
        <li className="underline"><a href="fb://facewebmodal/f?href=https://www.facebook.com" target="_blank">Facebook (fb://facewebmodal/f?href=https://www.facebook.com)</a></li>
        <li className="underline"><a href="fb://profile" target="_blank">Facebook - Open profile (fb://profile)</a></li>
        <br />
        <li className="underline"><a href="https://line.me/R/" target="_blank">Line (https://line.me/R/)</a></li>
        <li className="underline"><a href="line://" target="_blank"><i>Line - Deprecated (line://)</i></a></li>
        <li className="underline"><a href="https://line.me/R/ti/p/@linedevelopers" target="_blank">Line - Open LINE Official Account (https://line.me/R/ti/p/@linedevelopers)</a></li>
        <br />
        <li className="underline"><a href="instagram://" target="_blank">Instagram (instagram://)</a></li>
        <li className="underline"><a href="instagram://camera" target="_blank">Instagram - Open Camera (instagram://camera)</a></li>
        <li className="underline"><a href="instagram://user?username=instagram" target="_blank">Instagram - Open profile (instagram://user?username=instagram)</a></li>
        <br />
        <li className="underline"><a href="twitter://" target="_blank">Twitter (twitter://)</a></li>
        <li className="underline"><a href="twitter://user?screen_name=twitter" target="_blank">Twitter - Open profile (twitter://user?screen_name=twitter)</a></li>
        <br />
        <li className="underline"><a href="https://metamask.app.link/dapp/www.google.com" target="_blank">MetaMask - Open Website in MetaMask App (https://metamask.app.link/dapp/www.google.com)</a></li>
      </ul>
      <br />
      <input className="outline mr-2" type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setUrl(text)}>Set Url</button>
      <br />
      <a className="underline" href={url} target="_blank">Custom URL: {url}</a>
    </DefaultPageLayout>
  );
}
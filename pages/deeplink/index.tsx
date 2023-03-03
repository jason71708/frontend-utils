import PageTitle from "components/PageTitle"

export default function DeepLink() {
  return (
    <div className="px-4">
      <PageTitle title="DeepLink" />
      <h1 className="text-3xl font-bold my-4">DeepLink (Universal Link, App Link)</h1>
      <p className="my-2">Deep linking is commonly used in mobile apps to allow users to jump directly to a specific part of the app, rather than having to navigate through menus and screens.</p>
      <ul>
        <li className="underline"><a href="fb://profile" target="_blank">Facebook for iOS (fb://profile)</a></li>
        <li className="underline"><a href="fb://facewebmodal/f?href=https://www.facebook.com/facebook" target="_blank">Facebook for Android (fb://facewebmodal/f?href=https://www.facebook.com/facebook)</a></li>
        <br />
        <li className="underline"><a href="line://" target="_blank">Line for iOS (line://)</a></li>
        <li className="underline"><a href="https://line.me/R/" target="_blank">Line for Android (https://line.me/R/)</a></li>
        <br />
        <li className="underline"><a href="instagram://user?username=instagram">Instagram (instagram://user?username=instagram)</a></li>
        <br />
        <li className="underline"><a href="twitter://user?screen_name=twitter">Twitter (twitter://user?screen_name=twitter)</a></li>
      </ul>
    </div>
  )
}
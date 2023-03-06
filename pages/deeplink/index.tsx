import PageTitle from "components/PageTitle"

export default function DeepLink() {
  return (
    <div className="px-4">
      <PageTitle title="DeepLink" />
      <h1 className="text-3xl font-bold my-4">DeepLink (Universal Link, App Link)</h1>
      <p className="my-2">Deep linking is commonly used in mobile apps to allow users to jump directly to a specific part of the app, rather than having to navigate through menus and screens.</p>
      <ul>
        <li className="underline"><a href="fb://facewebmodal/f?href=https://www.facebook.com" target="_blank">Facebook (fb://facewebmodal/f?href=https://www.facebook.com)</a></li>
        <li className="underline"><a href="fb://facewebmodal/f?href=https://www.facebook.com/facebook" target="_blank">Facebook - Open page (fb://facewebmodal/f?href=https://www.facebook.com/facebook)</a></li>
        <li className="underline"><a href="fb://facewebmodal/f?href=https://www.facebook.com/groups/nextjs" target="_blank">Facebook - Open group (fb://facewebmodal/f?href=https://www.facebook.com/groups/nextjs)</a></li>
        <li className="underline"><a href="fb://profile" target="_blank">Facebook - Open profile (fb://profile)</a></li>
        <br />
        <li className="underline"><a href="https://line.me/R/" target="_blank">Line (https://line.me/R/)</a></li>
        <li className="underline"><a href="line://" target="_blank"><i>Line - Deprecated (line://)</i></a></li>
        <li className="underline"><a href="https://line.me/R/nv/camera/" target="_blank">Line - Open Camera (https://line.me/R/nv/camera/)</a></li>
        <li className="underline"><a href="https://line.me/R/ti/p/@linedevelopers" target="_blank">Line - Open LINE Official Account (https://line.me/R/ti/p/@linedevelopers)</a></li>
        <br />
        <li className="underline"><a href="instagram://">Instagram (instagram://)</a></li>
        <li className="underline"><a href="instagram://camera">Instagram - Open Camera (instagram://camera)</a></li>
        <li className="underline"><a href="instagram://user?username=instagram">Instagram - Open profile (instagram://user?username=instagram)</a></li>
        <br />
        <li className="underline"><a href="twitter://">Twitter (twitter://)</a></li>
        <li className="underline"><a href="twitter://user?screen_name=twitter">Twitter - Open profile (twitter://user?screen_name=twitter)</a></li>
      </ul>
    </div>
  )
}
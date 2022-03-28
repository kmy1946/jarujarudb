import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import '../styles/globals.css';
import Loading from "./components/UIkits/Loading";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setPageLoading(true)
    const handleComplete = () => setPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    // Remove the server-side injected CSS.
    // This resolve Error Bellow↓
    //「Prop `className` did not match. Server」
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  const loadingComponent = (<Loading/>)
  return (
    <div>
      {pageLoading && loadingComponent}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

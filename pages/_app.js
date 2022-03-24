import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setPageLoading(true)
    const handleComplete = () => setPageLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  // TODO 正式なローディングコンポーネントにする
  const loadingComponent = (<h2 style={{marginTop:'200px'}}>Loading...</h2>)
  return (
    <div>
      {pageLoading && loadingComponent}
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

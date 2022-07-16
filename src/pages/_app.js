import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'typeface-dm-sans';
import 'typeface-nunito';
import '../../styles/Main.css'
import '../../styles/global.css'
import { AuthContextProvider } from 'contexts/Auth';
import { DataContextProvider } from 'contexts/Data';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <>
      <AuthContextProvider>
        <DataContextProvider>
          <Component {...pageProps} />
        </DataContextProvider>
      </AuthContextProvider>
    </>
  )
}

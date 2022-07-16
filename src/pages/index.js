import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/recentSessions';
import CustomerSupport from 'sections/customer-support';
import Feature from 'sections/feature';
import VideoOne from 'sections/video-one';
import CallToAction from 'sections/call-to-action';
import BoostAgencies from 'sections/boost-agencies';
import { useDataContext } from 'contexts/Data';

export default function IndexPage() {

  const { eventData } = useDataContext()

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="HACK CLUB SIGCE" />
          <Banner />
          <CallToAction data={eventData} />
          <Services />
          <BoostAgencies />
          {/* <VideoOne /> */}
          <Testimonials />
          <Feature />
          <CustomerSupport />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

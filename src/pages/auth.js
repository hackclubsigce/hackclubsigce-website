import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/authbanner';

export default function IndexPage() {
	return (
		<ThemeProvider theme={theme}>
			<StickyProvider>
				<Layout>
					<SEO title="HACK CLUB SIGCE Authentication" />
					<Banner />
				</Layout>
			</StickyProvider>
		</ThemeProvider>
	);
}

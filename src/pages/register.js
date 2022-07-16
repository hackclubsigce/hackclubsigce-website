import Layout from 'components/layout'
import SEO from 'components/seo'
import { StickyProvider } from 'contexts/app/app.provider'
import { useDataContext } from 'contexts/Data'
import React from 'react'
import RegisterEvent from 'sections/registerEvent'
import theme from 'theme'
import { ThemeProvider } from 'theme-ui'

const Register = () => {
	const { eventData } = useDataContext()
	return (
		<>
			<ThemeProvider theme={theme}>
				<StickyProvider>
					<Layout>
						<SEO title="HACK CLUB SIGCE" />
						<RegisterEvent data={eventData}/>
					</Layout>
				</StickyProvider>
			</ThemeProvider>
		</>
	)
}

export default Register
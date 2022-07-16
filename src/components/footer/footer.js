/** @jsx jsx */
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
        backgroundColor: '#fff',
      }}
    >
      <Container
        sx={{
          variant: 'layout.toolbar',
          justifyContent: ['center', null, null, 'space-between'],
          flexDirection: ['column', null, null, null, 'row'],
          paddingTop: [20, 20],
          paddingBottom: [20, 20],
        }}
      >
        <Box sx={styles.left}>
          <Logo />
          <Text as="p">
            &copy; {new Date().getFullYear()} All right reserved - Design &
            Developed by HackClub SIGCE
          </Text>
        </Box>
        <Box sx={styles.right}>
          <a href="mailto:hackclubsigce@gmail.com" target={'_blank'}>Email</a>
          <a href="https://www.instagram.com/hack_club_sigce/" target={'_blank'}>Instagram</a>
          <a href="https://www.linkedin.com/company/hackclub-sigce/mycompany/" target={'_blank'}>Linkedin</a>
          <a href="https://www.youtube.com/channel/UCtEXF1Qp6GhDNQLGsEiWXmw" target={'_blank'}>Youtube</a>
          <a href="https://hcs-social-tree.vercel.app/" target={'_blank'}>Socialtree</a>
          <a href="https://hack-club-sigce-blogs.web.app/" target={'_blank'}>Blogs</a>
        </Box>
      </Container>
    </footer>
  )
}

const styles = {
  left: {
    display: 'flex',
    flexDirection: ['column', null, 'row'],
    alignItems: 'center',
    p: {
      fontSize: [0, 1],
      color: 'black',
      opacity: 0.6,
      mt: ['10px', null, '0'],
      ml: ['30px']
    },
  },
  right: {
    display: ['none', null, null, null, 'flex'],
    fontSize: 2,
    alignItems: 'center',
    color: 'black',
    a: {
      transition: '500ms',
      '&:hover': {
        color: 'primary',
      },
    },
    'a+a': {
      marginLeft: '30px',
    },
  },
};

/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/HCS-logo-gradient.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={logo} sx={{ display: 'flex', height: '50px' }} alt="startup landing logo" />
      </div>
    </Link>
  );
}

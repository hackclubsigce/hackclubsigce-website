/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A, Button } from 'theme-ui';
import NextLink from 'next/link';
export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <MenuLink {...rest}>{children ? children : label}</MenuLink>
    </NextLink>
  );
}
export function Link({ path, label, click, children, ...rest }) {
  return (
    <>
      {
        path ? <NextLink href={path}>
          <A {...rest}>{children ? children : label}</A>
        </NextLink> :
          <Button onClick={click} {...rest}>
            {children ? children : label}
          </Button>
      }
    </>
  );
}

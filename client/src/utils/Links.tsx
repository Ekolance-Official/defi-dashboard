import { forwardRef, Link } from "@chakra-ui/react";
import { Link as ReactLink, useMatch, useResolvedPath } from "react-router-dom";

export const NavLink = forwardRef(({ children, to, ...rest }, ref) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      ref={ref}
      as={ReactLink}
      p={2.5}
      to={to}
      rounded={"md"}
      bg={match ? "accent2.200" : "transparent"}
      _hover={{
        textDecoration: "none",
        bg: "accent2.100",
      }}
      _focus={{ outline: "none" }}
      {...rest}
    >
      {children}
    </Link>
  );
});

const InternalLink = forwardRef(({ children, to, ...rest }, ref) => (
  <Link as={ReactLink} to={to || "/"} ref={ref} {...rest}>
    {children}
  </Link>
));

const ExternalLink = forwardRef(({ children, href, ...rest }, ref) => (
  <Link href={href} ref={ref} isExternal {...rest}>
    {children}
  </Link>
));

export { InternalLink, ExternalLink };

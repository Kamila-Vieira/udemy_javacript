import Link from 'next/link';

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
}

export function CustomLink({ children, href }: CustomLinkProps) {
  return href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

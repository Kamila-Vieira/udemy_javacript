import Head from 'next/head';
import { SITE_NAME } from '../../config';

interface CustomPageHeadProps {
  titleComplement?: string;
  description: string;
}

export function CustomPageHead({
  titleComplement = '',
  description,
}: CustomPageHeadProps) {
  return (
    <Head>
      <title>{`${SITE_NAME}${
        titleComplement ? ': ' : ''
      }${titleComplement}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

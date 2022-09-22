import Head from 'next/head';

interface CustomPageHeadProps {
  title: string;
  description: string;
}

export function CustomPageHead({ title, description }: CustomPageHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

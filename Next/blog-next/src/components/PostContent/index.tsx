import ReactMarkdown from 'react-markdown';
import { AnchorHTMLAttributes } from 'react';
import { CustomLink } from '../CustomLink';
import * as Styled from './styles';

interface PostContentProps {
  content: string;
}

export function PostContent({ content }: PostContentProps) {
  return (
    <Styled.Container>
      <ReactMarkdown
        components={{
          a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
            <CustomLink href={props.href}>{props.children}</CustomLink>
          ),
          img: (props) => <Styled.Image src={props.src} />,
          h1: (props) => <Styled.Heading1 {...props} />,
          h2: (props) => <Styled.Heading2 {...props} />,
          h3: (props) => <Styled.HeadingCommon {...props} />,
          h4: (props) => <Styled.HeadingCommon {...props} />,
          h5: (props) => <Styled.HeadingCommon {...props} />,
          h6: (props) => <Styled.HeadingCommon {...props} />,
          p: (props) => <Styled.Paragraph {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </Styled.Container>
  );
}

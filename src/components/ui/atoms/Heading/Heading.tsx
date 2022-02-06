import { forwardRef, AriaAttributes, HTMLAttributes } from 'react';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, headingLevel, ...props }: HeadingProps, ref) => {
    const HeadingLevel = headingLevel || 'h2';
    return (
      <HeadingLevel ref={ref} className={`${className}`} {...props}>
        {children}
      </HeadingLevel>
    );
  }
);
Heading.defaultProps = {
  className: '',
  headingLevel: 'h2'
};

Heading.displayName = 'Heading';
export type HeadingLevelProps = {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type HeadingProps = {
  className?: string;
} & HeadingLevelProps &
  AriaAttributes &
  HTMLAttributes<HTMLHeadingElement>;

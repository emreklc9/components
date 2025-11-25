import React from "react";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'body' | 'caption' | 'heading' | 'subheading';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'error' | 'success';
  align?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'body',
  size,
  weight,
  color = 'default',
  align,
  truncate = false,
  className = "",
  children,
  ...props
}) => {
  // Default sizes based on variant
  const defaultSizes: Record<'body' | 'caption' | 'heading' | 'subheading', 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'> = {
    body: 'md',
    caption: 'sm',
    heading: '2xl',
    subheading: 'xl',
  };

  const finalSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' = size || defaultSizes[variant];

  // Size styles
  const sizeStyles: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl', string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
  };

  // Weight styles
  const weightStyles: Record<'light' | 'normal' | 'medium' | 'semibold' | 'bold', string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  // Color styles
  const colorStyles: Record<'default' | 'muted' | 'primary' | 'secondary' | 'error' | 'success', string> = {
    default: 'text-gray-900',
    muted: 'text-gray-500',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    error: 'text-red-600',
    success: 'text-green-600',
  };

  // Alignment styles
  const alignStyles: Record<'left' | 'center' | 'right' | 'justify', string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const baseStyles = "m-0";
  const truncateStyle = truncate ? "truncate" : "";

  const classes = `
    ${baseStyles}
    ${sizeStyles[finalSize]}
    ${weight ? weightStyles[weight] : ''}
    ${colorStyles[color]}
    ${align ? alignStyles[align] : ''}
    ${truncateStyle}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const Component = as;

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};


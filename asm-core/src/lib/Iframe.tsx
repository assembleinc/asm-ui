export type IframeTypes = {
  allow?: string;
  allowFullScreen?: boolean;
  className?: string;
  controls?: boolean;
  height?: number | string;
  loading?: 'eager' | 'lazy';
  src: string;
  title: string;
  width?: number | string;
  style?: React.CSSProperties;
}

export const Iframe = ({
  allow,
  allowFullScreen=true,
  className='asm-iframe',
  height='100%',
  width='100%',
  loading='lazy',
  src,
  title,
  style
}: IframeTypes): JSX.Element => {
  return (
    <iframe
      allow={allow}
      allowFullScreen={allowFullScreen}
      className={className}
      height={height}
      loading={loading}
      src={src}
      title={title}
      width={width}
      style={style}
    ></iframe>
  );
};
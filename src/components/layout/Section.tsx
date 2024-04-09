import { useInView, animated } from '@react-spring/web';

type Props = React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
  const { children, ...others } = props;
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: {
        duration: 3.0,
      },
    }),
    {
      rootMargin: '-20% 0%',
    }
  );

  return (
    <animated.section
      ref={ref}
      style={springs}
      className={`flex align-center justify-center w-full`}
    >
      <div {...others}>{children}</div>
    </animated.section>
  );
};

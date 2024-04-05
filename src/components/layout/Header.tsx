import ProfileImage from '../ui/ProfileImage';

export default () => (
  <header
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '50px',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      padding: '10px 0',
      zIndex: 1000,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
    }}
  >
    <a
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      href="https://gitsunmin.github.io/portfolio"
    >
      <ProfileImage width={50} height={50} alt="me"></ProfileImage>
      <span
        style={{
          color: 'white',
        }}
      >
        Gitsunmin's Portfolio
      </span>
    </a>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <slot></slot>
    </div>

    <div
      style={{
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <a href="https://gitsunmin.github.io/">Blog</a>
    </div>
  </header>
);

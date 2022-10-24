export const modal = {
  '.scrim': {
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '900',
  },
  '.modal-container': {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'auto',
    background: 'rgba(0, 0, 0, 0.75)',
    zIndex: '9990',
  },
  '.modal': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderRadius: 12,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 640,
    backgroundColor: 'rgba(var(--fill))',
    borderWidth: 1,
    boxShadow:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  '.modal-close': {
    fontSize: '1.75rem',
    color: 'rgba(var(--glyph-gray-tertiary))',
    position: 'absolute',
    zIndex: '50',
    display: 'flex',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
    lineHeight: '1',
    borderRadius: 4,
    cursor: 'pointer',
    top: '1rem',
    right: '1rem',
  },
  '.modal-close:hover': {
    color: 'rgba(var(--glyph-gray-secondary))',
  },
  '.modal-close::after': {
    fontFamily: '"SF Pro Icons"',
    fontWeight: '300',
    content: '""',
    padding: '0',
  },
};
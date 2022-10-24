export const dropdown = {
  '.dropdown-menu': {
    '--dropdown-bg-fill': 'rgba(var(--fill))',
  },
  '.dropdown-wrap': {
    position: 'relative',
    display: 'inline-block',
  },
  '.dropdown-wrap > .dropdown-menu': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    borderRadius: 8,
    fontSize: '0.875rem',
    position: 'absolute',
    zIndex: '50',
    paddingLeft: '0',
    paddingRight: '0',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    lineHeight: '1.5rem',
    listStyleType: 'none',
    borderWidth: 1,
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    minWidth: '14rem',
    background: 'var(--dropdown-bg-fill)',
    top: 'calc(100% + 8px)',
  },
  '.dropdown-wrap .active': {
    boxShadow: '0 0 0 3px rgba(var(--fill-primary, var(--primary)), 0.35)',
  },
  '.dropdown-menu hr': {
    borderColor: 'rgba(var(--fill-gray-quaternary))',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  '.menu-header': {
    fontSize: '0.6875rem',
    color: 'rgba(var(--glyph-gray-secondary))',
    display: 'block',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingBottom: '0.25rem',
    fontWeight: '600',
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
  },
  '.menu-item': {
    color: 'rgba(var(--glyph-gray))',
    display: 'block',
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    lineHeight: '1',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  '.menu-item:hover': {
    backgroundColor: 'rgba(var(--fill-tertiary))',
    textDecoration: 'none',
  },
  '.dropdown-wrap > .dropdown-menu.dropdown-condensed': {
    minWidth: '0',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  '.dropdown-condensed .menu-item': {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
};
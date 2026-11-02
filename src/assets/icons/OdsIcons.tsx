import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const OdsIcon1: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.8" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Family / Protection shelter */}
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10.5V20a1 1 0 001 1h12a1 1 0 001-1v-9.5" />
    <circle cx="9" cy="14" r="1.5" />
    <circle cx="15" cy="13.5" r="1.8" />
    <path d="M7.5 19v-1a1.5 1.5 0 013 0v1" />
    <path d="M13.2 19v-1.5a1.8 1.8 0 013.6 0V19" />
  </svg>
);

export const OdsIcon2: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Bowl of food with wheat ear */}
    <path d="M3 13c0 4.4 3.6 8 8 8s8-3.6 8-8H3z" />
    <line x1="2" y1="13" x2="22" y2="13" />
    <path d="M12 4v9" />
    <path d="M12 4c-1.5 1-2.5 3-2 5 1.5-1 2.5-3 2-5z" />
    <path d="M12 4c1.5 1 2.5 3 2 5-1.5-1-2.5-3-2-5z" />
    <path d="M8 8c.5-1.5 2-2.5 3.5-2" />
    <path d="M16 8c-.5-1.5-2-2.5-3.5-2" />
  </svg>
);

export const OdsIcon3: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Heart with ECG heartbeat line */}
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    <path d="M7 13h2.5l1.5-3 2 6 1.5-3H17" strokeWidth="2" />
  </svg>
);

export const OdsIcon4: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Book and education pencil */}
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="M9 7h6" />
    <path d="M9 11h4" />
    <path d="M18 4l2-2 2 2-2 2-2-2z" />
  </svg>
);

export const OdsIcon5: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Gender equality balance */}
    <circle cx="12" cy="8" r="5" />
    <line x1="12" y1="13" x2="12" y2="21" />
    <line x1="9" y1="17" x2="15" y2="17" />
    <line x1="9.5" y1="7" x2="14.5" y2="7" />
    <line x1="9.5" y1="9" x2="14.5" y2="9" />
  </svg>
);

export const OdsIcon6: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Water drop and clean waves */}
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    <path d="M8 14a4 4 0 0 0 7.5 1.5" />
  </svg>
);

export const OdsIcon7: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Clean energy sun & power ray */}
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    <path d="M11 10.5l-1 2h2.5l-1 3" strokeWidth="1.5" stroke="#fff" />
  </svg>
);

export const OdsIcon8: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Economic growth chart & upward arrow */}
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 13l6-6 4 4 8-8" />
    <polyline points="17 3 21 3 21 7" />
  </svg>
);

export const OdsIcon9: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Industry, gear and tech network */}
    <path d="M2 20h20" />
    <path d="M6 20V8l4 3V8l4 3V4l6 4v12" />
    <circle cx="9" cy="16" r="1.5" />
    <circle cx="15" cy="14" r="1.5" />
    <path d="M9 16l6-2" strokeDasharray="1 1" />
  </svg>
);

export const OdsIcon10: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Equality inside diamond */}
    <rect x="3" y="3" width="18" height="18" rx="2" transform="rotate(45 12 12)" strokeWidth="1.5" />
    <line x1="8" y1="10.5" x2="16" y2="10.5" strokeWidth="2.2" />
    <line x1="8" y1="13.5" x2="16" y2="13.5" strokeWidth="2.2" />
  </svg>
);

export const OdsIcon11: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Sustainable buildings and community */}
    <path d="M3 21h18" />
    <path d="M4 21V9l5-4 5 4v12" />
    <path d="M14 21V5l6 3v13" />
    <rect x="7" y="11" width="2" height="2" />
    <rect x="7" y="15" width="2" height="2" />
    <rect x="16" y="10" width="2" height="2" />
    <rect x="16" y="14" width="2" height="2" />
  </svg>
);

export const OdsIcon12: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Infinity loop / circular economy */}
    <path d="M12 12c-2.5-4-6-4-8-2s-2 5 0 7 5.5 2 8-2c2.5 4 6 4 8 2s2-5 0-7-5.5-2-8 2z" />
    <path d="M18 7l2 2-2 2" strokeWidth="1.5" />
    <path d="M6 17l-2-2 2-2" strokeWidth="1.5" />
  </svg>
);

export const OdsIcon13: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Climate action eye & weather front */}
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 9h16.8" />
    <path d="M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18" />
    <path d="M12.5 3a17 17 0 0 1 0 18" />
    <path d="M12 8l2 4h-4l2 4" strokeWidth="1.5" stroke="#fff" />
  </svg>
);

export const OdsIcon14: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Life below water - fish and waves */}
    <path d="M2 17c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    <path d="M16 11c-3-3-7-3-11 0 4 3 8 3 11 0z" />
    <path d="M16 11l4-2.5v5L16 11z" />
    <circle cx="8" cy="10" r="0.8" fill="currentColor" />
  </svg>
);

export const OdsIcon15: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Life on land - tree and bird */}
    <path d="M12 21v-7" />
    <path d="M12 14c-3 0-5.5-2.2-5.5-5 0-2.3 1.8-4.2 4-4.8A4.5 4.5 0 0 1 19 8c0 3.3-3.1 6-7 6z" />
    <path d="M9 17l3-3 3 3" />
    <circle cx="16" cy="6" r="1" fill="currentColor" />
  </svg>
);

export const OdsIcon16: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Peace dove & justice scales */}
    <path d="M12 3v18" />
    <path d="M6 7l6-2 6 2" />
    <path d="M6 7v6a3 3 0 0 0 6 0V7" />
    <path d="M18 7v6a3 3 0 0 0-6 0" />
    <path d="M3 21h18" />
  </svg>
);

export const OdsIcon17: React.FC<IconProps> = ({ className = 'w-6 h-6', size }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} style={size ? { width: size, height: size } : undefined}>
    {/* Global partnerships interconnected nodes */}
    <circle cx="12" cy="12" r="3" />
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <line x1="8" y1="7.5" x2="10" y2="10" />
    <line x1="16" y1="7.5" x2="14" y2="10" />
    <line x1="8" y1="16.5" x2="10" y2="14" />
    <line x1="16" y1="16.5" x2="14" y2="14" />
  </svg>
);

export const OdsIcon: React.FC<{ id: number; className?: string; size?: number }> = ({ id, className, size }) => {
  switch (id) {
    case 1: return <OdsIcon1 className={className} size={size} />;
    case 2: return <OdsIcon2 className={className} size={size} />;
    case 3: return <OdsIcon3 className={className} size={size} />;
    case 4: return <OdsIcon4 className={className} size={size} />;
    case 5: return <OdsIcon5 className={className} size={size} />;
    case 6: return <OdsIcon6 className={className} size={size} />;
    case 7: return <OdsIcon7 className={className} size={size} />;
    case 8: return <OdsIcon8 className={className} size={size} />;
    case 9: return <OdsIcon9 className={className} size={size} />;
    case 10: return <OdsIcon10 className={className} size={size} />;
    case 11: return <OdsIcon11 className={className} size={size} />;
    case 12: return <OdsIcon12 className={className} size={size} />;
    case 13: return <OdsIcon13 className={className} size={size} />;
    case 14: return <OdsIcon14 className={className} size={size} />;
    case 15: return <OdsIcon15 className={className} size={size} />;
    case 16: return <OdsIcon16 className={className} size={size} />;
    case 17: return <OdsIcon17 className={className} size={size} />;
    default: return null;
  }
};

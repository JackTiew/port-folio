import { useEffect, useRef, useState } from 'react';

import { site } from '../../data/portfolio';

const EmailButton = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Show email address"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="group relative inline-flex h-10 w-10 items-center justify-center"
      >
        <img
          alt=""
          className="h-8 w-8 opacity-90 transition group-hover:opacity-0"
          src="/assets/icons/email-white.svg"
        />
        <img
          alt=""
          className="absolute h-8 w-8 opacity-0 transition group-hover:opacity-100"
          src="/assets/icons/email-color.svg"
        />
      </button>

      {open && (
        <div
          className="email-popup"
          role="dialog"
          aria-label="Email address"
        >
          <p className="email-popup-label">Email</p>
          <p className="email-popup-address">{site.email}</p>
          <button type="button" className="email-popup-copy" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailButton;

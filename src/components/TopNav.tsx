import React from 'react';
import { NavLink } from 'react-router-dom';
import { convention } from '../data/convention';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/schedule', label: 'Timetable' },
  { to: '/venue', label: 'Venue' },
  { to: '/hotel', label: 'Hotel' },
  { to: '/athens', label: 'Athens Guide' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/safety', label: 'Safety & Barker Database' },
  { to: '/contact', label: 'Contact' },
];

export function TopNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-100/10 p-2">
            <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
              <path
                d="M3 12h18M7.5 7.5 16.5 16.5M16.5 7.5 7.5 16.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-100">{convention.shortTitle}</div>
            <div className="text-xs text-slate-400">
              {convention.city} • {convention.hashtag}
            </div>
          </div>
        </div>

        <button
          className="rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-sm font-semibold text-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.slice(0, 6).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-xl px-3 py-2 text-sm font-semibold transition',
                  isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-200 hover:bg-slate-900/50',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="group relative">
            <div className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/50">
              More
            </div>
            <div className="invisible absolute right-0 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-950 p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {navItems.slice(6).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      'block rounded-xl px-3 py-2 text-sm font-semibold transition',
                      isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-200 hover:bg-slate-900/50',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {open ? (
        <div className="border-t border-slate-800 md:hidden">
          <nav className="mx-auto grid max-w-6xl grid-cols-1 gap-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-3 py-2 text-sm font-semibold transition',
                    isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-200 hover:bg-slate-900/50',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

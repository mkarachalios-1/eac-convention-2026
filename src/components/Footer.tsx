import React from 'react';
import { convention } from '../data/convention';

export function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold text-slate-200">{convention.shortTitle}</div>
            <div>
              {convention.city} • {new Date(convention.dates.start).getFullYear()}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-slate-200" href={convention.eacWebsite} target="_blank" rel="noreferrer">
              EAC Website
            </a>
            <a className="hover:text-slate-200" href={convention.bookingPortal} target="_blank" rel="noreferrer">
              Booking Portal
            </a>
            <a className="hover:text-slate-200" href={convention.venue.website} target="_blank" rel="noreferrer">
              Hotel Website
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-slate-500">
          This delegate site is intended for convention information and operational updates. Items marked “TBC” may
          change. Please verify timings and room allocations against official communications as the event approaches.
        </p>
      </div>
    </footer>
  );
}

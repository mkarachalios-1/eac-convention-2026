import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-300">The page you are looking for does not exist.</p>
      <Link className="inline-flex rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950" to="/">
        Go back home
      </Link>
    </div>
  );
}

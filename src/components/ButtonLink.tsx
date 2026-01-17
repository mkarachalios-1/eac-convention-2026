import React from 'react';

export function ButtonLink(props: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  newTab?: boolean;
}) {
  const variant = props.variant ?? 'primary';
  const cls =
    variant === 'primary'
      ? 'bg-slate-100 text-slate-950 hover:bg-white'
      : 'bg-slate-800 text-slate-100 hover:bg-slate-700';

  return (
    <a
      className={[
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition',
        cls,
      ].join(' ')}
      href={props.href}
      target={props.newTab ? '_blank' : undefined}
      rel={props.newTab ? 'noreferrer' : undefined}
    >
      {props.children}
    </a>
  );
}

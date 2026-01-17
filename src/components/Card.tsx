import React from 'react';

export function Card(props: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section
      className={[
        'rounded-2xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm',
        props.className ?? '',
      ].join(' ')}
    >
      {props.title ? <h2 className="text-lg font-semibold text-slate-100">{props.title}</h2> : null}
      <div className={props.title ? 'mt-3' : ''}>{props.children}</div>
    </section>
  );
}

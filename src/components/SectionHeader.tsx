import React from 'react';

export function SectionHeader(props: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-1">
      <h1 className="text-3xl font-bold tracking-tight">{props.title}</h1>
      {props.subtitle ? <p className="text-slate-300">{props.subtitle}</p> : null}
    </div>
  );
}

import React from 'react';
import { speakers } from '../data/speakers';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export default function Speakers() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Speakers" subtitle="Speaker line-up and session allocation (to be confirmed)." />

      <Card>
        {speakers.length === 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-slate-200">
              The speaker list has not been published yet. When confirmed, populate{' '}
              <span className="font-mono text-xs">src/data/speakers.ts</span> and add any photos under{' '}
              <span className="font-mono text-xs">public/speakers</span>.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm text-slate-300">
              <div className="font-semibold text-slate-100">Recommended minimum fields</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Name and organisation/title</li>
                <li>Session (timetable mapping)</li>
                <li>Short bio (2–4 sentences)</li>
                <li>Links (website, LinkedIn, etc.)</li>
              </ul>
            </div>
          </div>
        ) : (
          <ul className="space-y-3">
            {speakers.map((s) => (
              <li key={s.name} className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                <div className="flex gap-4">
                  {s.photo ? (
                    <img src={s.photo} alt={`${s.name} photo`} className="h-16 w-16 rounded-xl object-cover" />
                  ) : (
                    <div className="h-16 w-16 rounded-xl border border-slate-800 bg-slate-900/30" />
                  )}
                  <div className="flex-1">
                    <div className="text-base font-semibold text-slate-100">{s.name}</div>
                    {s.titleOrOrg ? <div className="text-sm text-slate-300">{s.titleOrOrg}</div> : null}
                    {s.session ? <div className="mt-1 text-xs text-slate-400">Session: {s.session}</div> : null}
                    {s.bio ? <p className="mt-2 text-sm text-slate-300">{s.bio}</p> : null}
                    {s.links?.length ? (
                      <div className="mt-2 flex flex-wrap gap-3">
                        {s.links.map((l) => (
                          <a
                            key={l.url}
                            className="text-sm font-semibold text-slate-200 underline decoration-slate-700 underline-offset-4 hover:text-white"
                            href={l.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

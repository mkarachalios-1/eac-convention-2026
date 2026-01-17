import React from 'react';
import { sponsors } from '../data/sponsors';
import { partnerPackages } from '../data/partners';
import { assetUrl } from '../utils/assetUrl';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export default function Sponsors() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Sponsors & Partners" subtitle="Recognising the organisations supporting EAC Convention 2026." />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Confirmed (initial list)">
          {sponsors.length === 0 ? (
            <p className="text-sm text-slate-400">Sponsors will be published here once confirmed.</p>
          ) : (
            <ul className="space-y-3">
              {sponsors.map((s) => (
                <li key={s.name} className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-slate-100">{s.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{s.tier}</div>
                    </div>
                    {s.website ? (
                      <a className="text-sm font-semibold text-slate-200 underline decoration-slate-700 underline-offset-4 hover:text-white" href={s.website} target="_blank" rel="noreferrer">
                        Website
                      </a>
                    ) : null}
                  </div>
                  {s.description ? <p className="mt-2 text-sm text-slate-300">{s.description}</p> : null}
                  {s.logo ? (
                    <div className="mt-3">
                      <img src={assetUrl(s.logo)} alt={`${s.name} logo`} className="max-h-12 opacity-90" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-3 text-xs text-slate-500">
            Update sponsor entries in <span className="font-mono">src/data/sponsors.ts</span> and place logos in{' '}
            <span className="font-mono">public/sponsors</span>.
          </p>
        </Card>

        <Card title="Partnering packages (summary)">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="py-2 pr-3">Tier</th>
                  <th className="py-2 pr-3">Availability</th>
                  <th className="py-2 pr-3">Price (€)</th>
                  <th className="py-2 pr-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                {partnerPackages.map((p) => (
                  <tr key={p.tier} className="border-t border-slate-800">
                    <td className="py-2 pr-3 font-semibold text-slate-100">{p.tier}</td>
                    <td className="py-2 pr-3">{(p as any).availability ?? '—'}</td>
                    <td className="py-2 pr-3">{p.priceEUR ?? '—'}</td>
                    <td className="py-2 pr-3">{(p as any).status ?? 'Available'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/30 p-4 text-sm text-slate-200">
            <div className="font-semibold text-slate-100">Included services (high level)</div>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Logo placement in convention materials and venue signage (tier-dependent).</li>
              <li>Exhibition presence and/or branded visibility in common areas.</li>
              <li>Delegate places and gala dinner invitations (tier-dependent).</li>
              <li>Potential stage/screen exposure where appropriate.</li>
            </ul>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Confirm the final deliverables and print deadlines with EAC Executive.
          </p>
        </Card>
      </div>
    </div>
  );
}

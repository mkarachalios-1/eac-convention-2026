import React from 'react';
import { safetyResources } from '../data/safety';
import { assetUrl } from '../utils/assetUrl';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export default function Safety() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Safety & Barker Database" subtitle="EAC safety resources for delegates and working groups." />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title={safetyResources.barkerDatabase.title}>
          <p className="text-sm text-slate-200">{safetyResources.barkerDatabase.description}</p>
          <a
            className="mt-4 inline-flex rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white"
            href={assetUrl(safetyResources.barkerDatabase.file)}
          >
            Download database (Excel)
          </a>
          <p className="mt-3 text-xs text-slate-500">
            If you prefer not to host the dataset publicly, remove the file from <span className="font-mono">public/resources</span> and
            replace the link with your internal URL.
          </p>
        </Card>

        <Card title="Barker reports (PDF)">
          <ul className="space-y-2 text-sm text-slate-200">
            {safetyResources.reports.map((r) => (
              <li key={r.year} className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/30 p-3">
                <div className="font-semibold text-slate-100">Des Barker Report {r.year}</div>
                <a className="text-sm font-semibold underline decoration-slate-700 underline-offset-4 hover:text-white" href={assetUrl(r.file)}>
                  Open PDF
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Suggested on-site use">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>Use the database to support workshop discussions on causal factors and mitigations.</li>
          <li>Align terms and categories used in incident reporting for comparability.</li>
          <li>Where presenting statistics, include exposure measures (shows, flights, display lines) where available.</li>
          <li>Document assumptions; avoid implying causality where only correlation exists.</li>
        </ul>
      </Card>
    </div>
  );
}

import React from 'react';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

const links = [
  { label: 'Athens Airport (AIA) – transport/taxi info', url: 'https://www.aia.gr/en/traveller/transportation-airport' },
  { label: 'STASY – Metro Line 3 timetables', url: 'https://www.stasy.gr/en/timetables/line-3/' },
  { label: 'OASA – Airport express buses (24-hour)', url: 'https://www.oasa.gr/en/visit-athens/airport-express-bus-lines/' },
  { label: 'This is Athens – safety tips & emergency numbers', url: 'https://www.thisisathens.org/useful-tips/safety-tips' },
  { label: 'Visit Greece – health & safety', url: 'https://www.visitgreece.gr/before-travelling-to-greece/health-safety/' },
  { label: 'European Commission – EES rollout information', url: 'https://home-affairs.ec.europa.eu/news/commission-set-launch-date-entryexit-system-12-october-2025-2025-07-30_en' },
];

export default function Athens() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Athens Guide" subtitle="Practical tips for getting around and staying safe." />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Airport to city centre (common options)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>
              <span className="font-semibold text-slate-100">Metro (Line 3):</span> Airport ↔ Syntagma with airport
              services typically every ~36 minutes (verify on the day).
            </li>
            <li>
              <span className="font-semibold text-slate-100">Express bus (X95):</span> Airport ↔ Syntagma, 24-hour
              operation (frequency varies).
            </li>
            <li>
              <span className="font-semibold text-slate-100">Taxi:</span> fixed fare Airport ↔ Athens city centre inner
              ring (day/night). Confirm the fixed-fare zone and ensure the driver issues a receipt.
            </li>
          </ul>
        </Card>

        <Card title="Local transport and tickets">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Metro, tram, buses and trolley-buses operate across central Athens.</li>
            <li>
              Consider multi-day passes if you will be using public transport heavily; airport routes have special
              ticketing rules.
            </li>
            <li>Validate tickets where required and keep them available for inspection.</li>
          </ul>
        </Card>
      </div>

      <Card title="Safety and emergency numbers">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Emergency</div>
            <div className="mt-1 text-sm text-slate-200">112 (pan‑European emergency number)</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Police</div>
            <div className="mt-1 text-sm text-slate-200">100</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Ambulance</div>
            <div className="mt-1 text-sm text-slate-200">166</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Tourist police</div>
            <div className="mt-1 text-sm text-slate-200">1571</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-300">
          Athens is generally safe, but treat pickpocketing as a credible risk on public transport and in crowded
          tourist areas. Use standard big-city precautions and keep valuables secured.
        </p>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Practical essentials">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Currency: Euro (€).</li>
            <li>Power: 230V, plugs typically Type C/F.</li>
            <li>Mobile: EU roaming may apply for EU SIMs; visitors should check provider terms.</li>
            <li>Time zone: Eastern European Time (EET/EEST, depending on daylight saving).</li>
          </ul>
        </Card>

        <Card title="Border control note (non‑EU travellers)">
          <p className="text-sm text-slate-200">
            The EU Entry/Exit System (EES) is being phased in from October 2025, with a progressive rollout period.
            Delegates travelling on non‑EU passports should anticipate additional biometric steps at the Schengen
            border (first entry per passport) and allow extra time.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Always verify latest requirements for your nationality and route before travel.
          </p>
        </Card>
      </div>

      <Card title="Useful official links">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          {links.map((l) => (
            <li key={l.url}>
              <a className="underline decoration-slate-700 underline-offset-4 hover:text-white" href={l.url} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

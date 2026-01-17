import React from 'react';
import { convention } from '../data/convention';
import { Card } from '../components/Card';
import { ButtonLink } from '../components/ButtonLink';
import { SectionHeader } from '../components/SectionHeader';

export default function Hotel() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Hotel" subtitle="Royal Olympic Hotel – accommodation and on-site facilities." />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="space-y-3">
            <div className="text-lg font-semibold text-slate-100">{convention.venue.name}</div>
            <div className="text-sm text-slate-300">{convention.venue.address}</div>
            <div className="text-sm text-slate-400">Phone: {convention.venue.phone}</div>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={convention.venue.reservationLink} newTab>
                Book at EAC rate
              </ButtonLink>
              <ButtonLink href={convention.venue.website} newTab variant="secondary">
                Hotel website
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Typical policy</div>
              <div className="mt-1 text-sm text-slate-200">
                Check-in: after 15:00 • Check-out: before 11:00 (verify on booking confirmation)
              </div>
            </div>
          </div>
        </Card>

        <Card title="Gala dinner venue">
          <p className="text-sm text-slate-200">
            The convention gala dinner is scheduled for the hotel’s roof garden restaurant/bar, offering landmark views
            over central Athens.
          </p>
          <p className="mt-3 text-xs text-slate-500">Exact room/area to be confirmed in final event note.</p>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Facilities (indicative)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Complimentary high-speed Wi‑Fi (hotel-wide).</li>
            <li>Conference and meeting spaces suitable for large delegate groups.</li>
            <li>Restaurant and rooftop bar/restaurant.</li>
            <li>Fitness facilities and seasonal pool (subject to season and policy).</li>
          </ul>
        </Card>

        <Card title="How to reach the hotel by metro (summary)">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-200">
            <li>From ATH Airport, take Metro Line 3 to Syntagma.</li>
            <li>Change direction towards Ag. Dimitrios and exit at “Acropoli”.</li>
            <li>Walk to the hotel (short distance).</li>
          </ol>
          <p className="mt-3 text-xs text-slate-500">
            For real-time service, consult OASA/STASY channels and allow buffer time.
          </p>
        </Card>
      </div>
    </div>
  );
}

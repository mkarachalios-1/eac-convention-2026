import React from 'react';
import { convention } from '../data/convention';
import { tickets } from '../data/tickets';
import { exhibitionOptions } from '../data/exhibition';
import { Card } from '../components/Card';
import { ButtonLink } from '../components/ButtonLink';
import { SectionHeader } from '../components/SectionHeader';
import { assetUrl } from '../utils/assetUrl';

export default function Home() {
  const start = new Date(convention.dates.start);
  const end = new Date(convention.dates.end);
  const dateRange = `${start.toLocaleDateString(undefined, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })} – ${end.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}`;

  return (
    <div className="space-y-10">
      <SectionHeader
        title={convention.title}
        subtitle={`${dateRange} • ${convention.venue.name}, ${convention.city}`}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <div className="space-y-4">
            <p className="text-slate-200">
              This delegate hub consolidates the latest convention logistics: timetable, venue guidance, hotel
              information, local travel tips, sponsors, speakers, and safety resources.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={convention.bookingPortal} newTab>
                Book / Manage Registration
              </ButtonLink>
              <ButtonLink href={convention.venue.reservationLink} newTab variant="secondary">
                Book Hotel (EAC Rate)
              </ButtonLink>
              <ButtonLink href={assetUrl('resources/EAC-Convention-2026-Info-Pack.pdf')} newTab variant="secondary">
                Open Info Pack (PDF)
              </ButtonLink>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Venue</div>
                <div className="mt-1 text-sm text-slate-100">{convention.venue.name}</div>
                <div className="text-sm text-slate-400">{convention.venue.address}</div>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Contact</div>
                <div className="mt-1 text-sm text-slate-100">{convention.contact.name}</div>
                <div className="text-sm text-slate-400">{convention.contact.email}</div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="What to do first">
          <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-200">
            <li>Confirm travel dates and airport transfer plan.</li>
            <li>Reserve hotel rooms via the EAC booking code.</li>
            <li>Review the timetable and note workshops relevant to your role.</li>
            <li>Check border/visa requirements if travelling from outside the EU/Schengen.</li>
            <li>Bring any sponsor/exhibitor assets (logo files, slides, QR codes).</li>
          </ol>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Ticket options (summary)">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="py-2 pr-3">Ticket</th>
                  <th className="py-2 pr-3">Early (€)</th>
                  <th className="py-2 pr-3">Full (€)</th>
                </tr>
              </thead>
              <tbody className="text-slate-200">
                {tickets.map((t) => (
                  <tr key={t.name} className="border-t border-slate-800">
                    <td className="py-2 pr-3">
                      <div className="font-semibold text-slate-100">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.includes}</div>
                    </td>
                    <td className="py-2 pr-3">{t.earlyRateEUR}</td>
                    <td className="py-2 pr-3">{t.fullRateEUR}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Rates are shown as per the convention information pack. Always confirm the latest pricing in the booking
            portal.
          </p>
        </Card>

        <Card title="Exhibition options">
          <ul className="space-y-3 text-sm text-slate-200">
            {exhibitionOptions.map((o) => (
              <li key={o.name} className="rounded-xl border border-slate-800 bg-slate-950/30 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-semibold text-slate-100">{o.name}</div>
                  <div className="text-xs font-semibold text-slate-300">{o.price}</div>
                </div>
                <div className="mt-1 text-xs text-slate-400">{o.details}</div>
                <div className="mt-1 text-xs text-slate-500">Eligibility: {o.eligibility}</div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card title="Operational note">
        <p className="text-sm text-slate-200">
          Room allocations and the final speaker line-up may change. This site is designed so you can update content by
          editing simple data files under <span className="font-mono text-xs">src/data/</span> and redeploying to
          GitHub Pages.
        </p>
      </Card>
    </div>
  );
}

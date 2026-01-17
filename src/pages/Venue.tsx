import React from 'react';
import { convention } from '../data/convention';
import { Card } from '../components/Card';
import { ButtonLink } from '../components/ButtonLink';
import { SectionHeader } from '../components/SectionHeader';

export default function Venue() {
  const mapQuery = encodeURIComponent(convention.venue.address);

  return (
    <div className="space-y-6">
      <SectionHeader title="Venue" subtitle="Convention venue and practical directions." />

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="space-y-3">
            <div className="text-lg font-semibold text-slate-100">{convention.venue.name}</div>
            <div className="text-sm text-slate-300">{convention.venue.address}</div>
            <div className="text-sm text-slate-400">Phone: {convention.venue.phone}</div>

            <div className="flex flex-wrap gap-3 pt-2">
              <ButtonLink href={convention.venue.website} newTab>
                Hotel website
              </ButtonLink>
              <ButtonLink
                href={`https://www.openstreetmap.org/search?query=${mapQuery}`}
                newTab
                variant="secondary"
              >
                Open map
              </ButtonLink>
            </div>
          </div>
        </Card>

        <Card title="Quick checklist">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>Bring photo ID for registration.</li>
            <li>Use business cards or QR codes for networking.</li>
            <li>Allow extra time for morning arrivals.</li>
            <li>Dress: business casual (gala dinner: smart / formal).</li>
          </ul>
        </Card>
      </div>

      <Card title="Map">
        <div className="aspect-video overflow-hidden rounded-xl border border-slate-800">
          <iframe
            title="Venue map"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.openstreetmap.org/export/embed.html?search=${mapQuery}`}
          />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          If the embedded map does not load in your environment, use “Open map” above.
        </p>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Airport to venue (high-level)">
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
            <li>
              <span className="font-semibold text-slate-100">Metro:</span> Airport → Syntagma, then one stop to
              “Acropoli” and walk to the hotel.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Express bus:</span> X95 Airport Express to Syntagma.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Taxi:</span> fixed airport/city-centre fare (day & night).
            </li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">
            See the Athens Guide page for current frequencies, ticket types, and official references.
          </p>
        </Card>

        <Card title="Local walking distances">
          <p className="text-sm text-slate-200">
            The venue is in the historic centre, immediately next to major landmarks and walkable areas. Expect high
            pedestrian activity, especially around Syntagma, Plaka, and the Acropolis perimeter.
          </p>
        </Card>
      </div>
    </div>
  );
}

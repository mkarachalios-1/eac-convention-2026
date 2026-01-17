import React from 'react';
import { convention } from '../data/convention';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export default function Contact() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Contact" subtitle="Convention contact points and useful channels." />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="EAC Executive (convention logistics)">
          <div className="text-sm text-slate-200">
            <div className="font-semibold text-slate-100">{convention.contact.name}</div>
            <div className="text-slate-300">{convention.contact.role}</div>
            <div className="mt-2">
              Email:{' '}
              <a className="underline decoration-slate-700 underline-offset-4 hover:text-white" href={`mailto:${convention.contact.email}`}>
                {convention.contact.email}
              </a>
            </div>
          </div>
        </Card>

        <Card title="Venue / Hotel">
          <div className="text-sm text-slate-200">
            <div className="font-semibold text-slate-100">{convention.venue.name}</div>
            <div className="text-slate-300">{convention.venue.address}</div>
            <div className="mt-2">Phone: {convention.venue.phone}</div>
            <div className="mt-2">
              Website:{' '}
              <a className="underline decoration-slate-700 underline-offset-4 hover:text-white" href={convention.venue.website} target="_blank" rel="noreferrer">
                {convention.venue.website}
              </a>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Operational channels (recommended)">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          <li>Create a single “Updates” section on the home page for last-minute schedule/room changes.</li>
          <li>Provide a QR code at registration linking to this site.</li>
          <li>If you need push updates, convert this site to a PWA and add a notification provider.</li>
        </ul>
      </Card>
    </div>
  );
}

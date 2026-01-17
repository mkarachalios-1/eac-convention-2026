import React from 'react';
import { schedule } from '../data/schedule';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export default function SchedulePage() {
  const [query, setQuery] = React.useState('');

  const filtered = schedule.map((day) => ({
    ...day,
    items: day.items.filter((item) => {
      const text = [
        item.time,
        item.title,
        item.type,
        item.location ?? '',
        ...(item.details ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return text.includes(query.toLowerCase());
    }),
  }));

  return (
    <div className="space-y-6">
      <SectionHeader title="Timetable" subtitle="Convention timetable (rooms noted as TBC where not confirmed)." />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          className="w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500"
          placeholder="Search sessions (e.g., 'FJ', 'marketing', 'workshop')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-900/70"
          onClick={() => setQuery('')}
        >
          Clear
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((day) => (
          <Card key={day.date} title={day.label}>
            {day.items.length === 0 ? (
              <p className="text-sm text-slate-400">No items match your search.</p>
            ) : (
              <ul className="space-y-3">
                {day.items.map((item, idx) => (
                  <li key={idx} className="rounded-xl border border-slate-800 bg-slate-950/30 p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div className="min-w-40 text-sm font-semibold text-slate-200">{item.time}</div>
                      <div className="flex-1">
                        <div className="text-base font-semibold text-slate-100">{item.title}</div>
                        <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{item.type}</div>
                        {item.audience ? (
                          <div className="mt-1 text-xs text-slate-300">Audience: {item.audience}</div>
                        ) : null}
                        {item.location ? (
                          <div className="mt-2 text-sm text-slate-300">Location: {item.location}</div>
                        ) : null}
                        {item.details?.length ? (
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                            {item.details.map((d, i) => (
                              <li key={i}>{d}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

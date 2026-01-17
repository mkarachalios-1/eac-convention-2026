export const safetyResources = {
  barkerDatabase: {
    title: "Barker's Airshow Accident Database",
    file: "resources/barker/Airshow-Accident-Database_11-8-2025.xlsx",
    description:
      "EAC-hosted airshow accident dataset (Excel). Use for research, trend analysis, and safety discussions.",
  },
  reports: [
    { year: 2024, file: "resources/barker/Des-Barker-Report-2024.pdf" },
    { year: 2023, file: "resources/barker/Des-Barker-Report-2023.pdf" },
    { year: 2022, file: "resources/barker/Des-Barker-Report-2022.pdf" },
  ],
} as const;

import React, { useEffect, useState } from "react";

const STORAGE_KEY = "veneer_consumption_entries";

function getSavedEntries() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Unable to read veneer consumption data:", error);
    return [];
  }
}

function formatDateForDisplay(date) {
  if (!date) return "";

  const [year, month, day] = date.split("-");

  if (!year || !month || !day) {
    return date;
  }

  return `${day}/${month}/${year}`;
}

export default function Consumption() {
  const [entries, setEntries] = useState(() =>
    getSavedEntries()
  );

  useEffect(() => {
    function refreshConsumption() {
      setEntries(getSavedEntries());
    }

    window.addEventListener(
      "veneerConsumptionUpdated",
      refreshConsumption
    );

    window.addEventListener(
      "storage",
      refreshConsumption
    );

    return () => {
      window.removeEventListener(
        "veneerConsumptionUpdated",
        refreshConsumption
      );

      window.removeEventListener(
        "storage",
        refreshConsumption
      );
    };
  }, []);

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Material Consumption
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Consumption
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            View saved veneer consumption records by order and item.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <p className="text-xs text-slate-500">
            Total Entries
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {entries.length}
          </p>
        </div>
      </div>

      {/* TABLE */}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

        {entries.length === 0 ? (
          <div className="flex min-h-64 flex-col items-center justify-center px-6 text-center">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <span className="text-xl text-slate-400">
                —
              </span>
            </div>

            <h3 className="text-sm font-semibold text-slate-900">
              No consumption entries
            </h3>

            <p className="mt-1 max-w-sm text-sm text-slate-500">
              Saved veneer consumption records will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-[1100px] w-full text-left text-sm">

              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">
                    S.No.
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Date
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Order Number
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Item Number
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Item Name
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Employee Name
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Veneers Used
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {entries.map((entry, index) => (
                  <tr
                    key={entry.id}
                    className="align-top transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-500">
                      {index + 1}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                      {formatDateForDisplay(entry.date)}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-slate-700">
                        {entry.orderNo}
                      </span>
                    </td>

                    <td className="px-5 py-4 font-medium text-slate-800">
                      {entry.itemNo}
                    </td>

                    <td className="min-w-48 px-5 py-4 font-medium text-slate-800">
                      {entry.itemName}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                      {entry.employeeName}
                    </td>

                    <td className="min-w-96 px-5 py-4">
                      <div className="space-y-1.5">
                        {entry.veneers.map(
                          (veneer, veneerIndex) => (
                            <div
                              key={`${entry.id}-${veneerIndex}`}
                              className="flex flex-wrap items-center gap-2"
                            >
                              <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-slate-700">
                                {veneer.code}
                              </span>

                              <span className="text-slate-700">
                                {veneer.name}
                              </span>

                              <span className="text-xs font-medium text-slate-500">
                                {veneer.quantity} {veneer.unit}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
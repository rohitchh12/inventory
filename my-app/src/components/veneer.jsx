import React, { useEffect, useState } from "react";

const STORAGE_KEY = "veneer_consumption_entries";

const VENEER_MASTER = [
  {
    code: "VNR000015",
    name: "Am Walnut Edgebanding 16x1",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000019",
    name: "Am Walnut Qtr Cut Veneer 4mm Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000014",
    name: "Am Walnut Crown Veneer 4mm Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000026",
    name: "Am White OAK Qtr Veneer 4mmx10'x4' Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000244",
    name: "Osl Teak Veneer AAA Grade 4mx10'x4'",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000271",
    name: "OST Ply 1mmx8'x4' Century",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000023",
    name: "Am White OAK Crown Veneer 4mm Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000275",
    name: "OST Ply 4mmx8'x4' Century",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000235",
    name: "Osl Teak Q/c 4mmx10'x4' Veneer C2C",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000025",
    name: "Am White OAK Qtr Veneer 4mm Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000227",
    name: "Osl Face Veneer 4mmx 10'x4' 5432",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000049",
    name: "Backer Veneer VC 300 White C2C",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000024",
    name: "Am White OAK Qtr Veneer 4mm Century",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000129",
    name: "European White OAK Edgebanding 16x1",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000276",
    name: "OST Ply 4mmx8'x4' Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000274",
    name: "OST Ply 4mmx10'x4' Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000314",
    name: "Raw Veneer EUF 412",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000322",
    name: "Raw Veneer Type 512",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000325",
    name: "Raw Veneer Type 515",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000319",
    name: "Raw Veneer Type 508",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000318",
    name: "Raw Veneer Type 507",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000317",
    name: "Raw Veneer Type 506",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000323",
    name: "Raw Veneer Type 513",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000320",
    name: "Raw Veneer Type 510",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000324",
    name: "Raw Veneer Type 514",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000321",
    name: "Raw Veneer Type 511",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000315",
    name: "Raw Veneer FR 315",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000313",
    name: "Raw Veneer BL 122",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000310",
    name: "Raw Veneer BL 111",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000311",
    name: "Raw Veneer BL 116",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000312",
    name: "Raw Veneer BL 117",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000359",
    name: "Sycamore Qtr Raw Veneer",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000407",
    name: "Winwood Raw Veneer",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000343",
    name: "Scarlet Wood Raw Veneer",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000031",
    name: "Anigre Qtr Raw Veneer",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000021",
    name: "Am Walnut Qtr Veneer 4mm 10'x4' Green",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000018",
    name: "Am Walnut Qtr Cut Veneer 4mm Century",
    group: "Veneer",
    unit: "Pcs",
  },
  {
    code: "VNR000132",
    name: "European White OAK Edgebanding 30x1",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000117",
    name: "Edgebanding PVC Tape 30x2",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000363",
    name: "Teak Edgebanding 22x1",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000365",
    name: "Teak Edgebanding Tape 30x1",
    group: "Veneer",
    unit: "Mtr",
  },
  {
    code: "VNR000309",
    name: "Raw Veneer Alpi 13.19- 2.50x.68 6pcs",
    group: "Veneer",
    unit: "SqMtr",
  },
  {
    code: "VNR000345",
    name: "Silkwood_Raw Veneer Decorative",
    group: "Veneer",
    unit: "SqMtr",
  },
];

function getToday() {
  const today = new Date();

  return `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function getSavedEntries() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Unable to read veneer data:", error);
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));

  window.dispatchEvent(new Event("veneerConsumptionUpdated"));
}

function createId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()}`;
}

export default function Veneer() {
  const [date, setDate] = useState(getToday());
  const [orderNo, setOrderNo] = useState("");
  const [itemNo, setItemNo] = useState("");
  const [itemName, setItemName] = useState("");
  const [employeeName, setEmployeeName] = useState("");

  const [selectedVeneerCode, setSelectedVeneerCode] = useState("");
  const [quantity, setQuantity] = useState("");

  const [addedVeneers, setAddedVeneers] = useState([]);
  const [savedEntries, setSavedEntries] = useState(() =>
    getSavedEntries()
  );

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setSavedEntries(getSavedEntries());
  }, []);

  const selectedVeneer = VENEER_MASTER.find(
    (veneer) => veneer.code === selectedVeneerCode
  );

  function handleAddVeneer() {
    setError("");
    setMessage("");

    if (!selectedVeneerCode) {
      setError("Please select a veneer.");
      return;
    }

    const numericQuantity = Number(quantity);

    if (
      !quantity ||
      Number.isNaN(numericQuantity) ||
      numericQuantity <= 0
    ) {
      setError("Please enter a quantity greater than 0.");
      return;
    }

    setAddedVeneers((current) => [
      ...current,
      {
        id: createId(),
        code: selectedVeneer.code,
        name: selectedVeneer.name,
        group: selectedVeneer.group,
        unit: selectedVeneer.unit,
        quantity: numericQuantity,
      },
    ]);

    setSelectedVeneerCode("");
    setQuantity("");
  }

  function handleDeleteVeneer(id) {
    setAddedVeneers((current) =>
      current.filter((veneer) => veneer.id !== id)
    );
  }

  function handleSave() {
    setError("");
    setMessage("");

    const cleanOrderNo = orderNo.trim();
    const cleanItemNo = itemNo.trim();
    const cleanItemName = itemName.trim();
    const cleanEmployeeName = employeeName.trim();

    if (!date) {
      setError("Please select a date.");
      return;
    }

    if (!cleanOrderNo) {
      setError("Please enter Order No.");
      return;
    }

    if (!cleanItemNo) {
      setError("Please enter Item No.");
      return;
    }

    if (!cleanItemName) {
      setError("Please enter Item Name.");
      return;
    }

    if (!cleanEmployeeName) {
      setError("Please enter Employee Name.");
      return;
    }

    if (addedVeneers.length === 0) {
      setError("Please add at least one veneer.");
      return;
    }

    const existingEntries = getSavedEntries();

    const duplicateExists = existingEntries.some(
      (entry) =>
        String(entry.orderNo).trim().toLowerCase() ===
          cleanOrderNo.toLowerCase() &&
        String(entry.itemNo).trim().toLowerCase() ===
          cleanItemNo.toLowerCase()
    );

    if (duplicateExists) {
      setError(
        `Order No. ${cleanOrderNo} + Item No. ${cleanItemNo} already exists.`
      );
      return;
    }

    const newEntry = {
      id: createId(),
      serialNo: existingEntries.length + 1,
      date,
      orderNo: cleanOrderNo,
      itemNo: cleanItemNo,
      itemName: cleanItemName,
      employeeName: cleanEmployeeName,
      veneers: addedVeneers.map((veneer) => ({
        code: veneer.code,
        name: veneer.name,
        group: veneer.group,
        unit: veneer.unit,
        quantity: veneer.quantity,
      })),
    };

    const updatedEntries = [...existingEntries, newEntry];

    saveEntries(updatedEntries);
    setSavedEntries(updatedEntries);

    setDate(getToday());
    setOrderNo("");
    setItemNo("");
    setItemName("");
    setEmployeeName("");
    setSelectedVeneerCode("");
    setQuantity("");
    setAddedVeneers([]);

    setMessage("Veneer consumption saved successfully.");
  }

  const inputClass =
    "mt-2 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-200";

  const labelClass =
    "text-xs font-semibold uppercase tracking-wide text-slate-600";

  return (
    <div className="space-y-6">

      {/* PAGE HEADER */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Material Consumption
          </p>

          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
            Veneer Consumption
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Record veneer usage against an order and item.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <p className="text-xs text-slate-500">
            Next S.No.
          </p>

          <p className="text-lg font-semibold text-slate-900">
            {savedEntries.length + 1}
          </p>
        </div>
      </div>

      {/* ORDER DETAILS */}
      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h3 className="text-sm font-semibold text-slate-900">
            Order Details
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Enter the basic information for this consumption entry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">

          <div>
            <label className={labelClass}>Date</label>

            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Order No.</label>

            <input
              type="text"
              value={orderNo}
              onChange={(event) => setOrderNo(event.target.value)}
              placeholder="Enter order number"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Item No.</label>

            <input
              type="text"
              value={itemNo}
              onChange={(event) => setItemNo(event.target.value)}
              placeholder="Enter item number"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Item Name</label>

            <input
              type="text"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
              placeholder="Enter item name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Employee Name</label>

            <input
              type="text"
              value={employeeName}
              onChange={(event) =>
                setEmployeeName(event.target.value)
              }
              placeholder="Enter employee name"
              className={inputClass}
            />
          </div>
        </div>
      </section>

      {/* ADD VENEER */}
      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Add Veneer
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Select a veneer and enter the consumed quantity.
              </p>
            </div>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {addedVeneers.length} added
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-[1fr_180px_auto] lg:items-end">

          <div>
            <label className={labelClass}>
              Veneer
            </label>

            <select
              value={selectedVeneerCode}
              onChange={(event) =>
                setSelectedVeneerCode(event.target.value)
              }
              className={inputClass}
            >
              <option value="">
                Select veneer
              </option>

              {VENEER_MASTER.map((veneer) => (
                <option
                  key={veneer.code}
                  value={veneer.code}
                >
                  {veneer.code} - {veneer.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>
              Quantity
            </label>

            <div className="relative">
              <input
                type="number"
                min="0"
                step="0.01"
                value={quantity}
                onChange={(event) =>
                  setQuantity(event.target.value)
                }
                placeholder="0.00"
                className={`${inputClass} pr-16`}
              />

              {selectedVeneer && (
                <span className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-xs font-medium text-slate-400">
                  {selectedVeneer.unit}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleAddVeneer}
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            + Add Veneer
          </button>
        </div>
      </section>

      {/* ADDED VENEERS */}
      {addedVeneers.length > 0 && (
        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 px-5 py-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Veneers Added
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">
                    S.No.
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Veneer Code
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Veneer Name
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Quantity
                  </th>

                  <th className="px-5 py-3 font-semibold">
                    Unit
                  </th>

                  <th className="px-5 py-3 text-right font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {addedVeneers.map((veneer, index) => (
                  <tr
                    key={veneer.id}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-500">
                      {index + 1}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-slate-700">
                        {veneer.code}
                      </span>
                    </td>

                    <td className="px-5 py-4 font-medium text-slate-800">
                      {veneer.name}
                    </td>

                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {veneer.quantity}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {veneer.unit}
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteVeneer(veneer.id)
                        }
                        className="text-sm font-medium text-red-600 transition hover:text-red-700 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* MESSAGES */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {message && (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {message}
        </div>
      )}

      {/* SAVE */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSave}
          className="rounded-lg bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Save Consumption
        </button>
      </div>
    </div>
  );
}
import { useLoaderData, useSearchParams } from "react-router-dom";

export async function loader() {
  const res = await fetch("/data/indonesia_regions.json");
  return res.json();
}

export default function FilterPage() {
  const data: any = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();

  const province = searchParams.get("province");
  const regency = searchParams.get("regency");
  const district = searchParams.get("district");

  const provinces = data.provinces;
  const regencies = data.regencies;
  const districts = data.districts;

  const filteredRegencies = regencies.filter(
    (r: any) => r.province_id === Number(province),
  );

  const filteredDistricts = districts.filter(
    (d: any) => d.regency_id === Number(regency),
  );

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[320px_1fr]">
      <aside className="bg-[#f9fafc] border-r border-gray-200 p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-blue-100 p-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d="M7 8l3 1 2-2 3 1 2 3-2 2-3-1-2 2-3-1-2-3z" />
            </svg>
          </div>

          <p className="text-black font-semibold text-lg">
            Frontend Assessment
          </p>
        </div>

        <div className="pt-14 pb-8">
          <p className="text-gray-400 font-semibold text-xs">FILTER WILAYAH</p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-gray-400  mb-3">
              PROVINSI
            </p>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5-2V6l5 2m0 12l6-2m-6 2V8m6 10l5 2V6l-5-2m0 12V4m-6 4l6-2"
                  />
                </svg>
              </div>

              <select
                name="province"
                value={province || ""}
                onChange={(e) => setSearchParams({ province: e.target.value })}
                className="w-full border-1 border-gray-400 rounded-2xl pl-10 pr-10 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-gray-700">
                  Pilih Provinsi
                </option>

                {provinces.map((p: any) => (
                  <option key={p.id} value={p.id} className="text-gray-700">
                    {p.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-400 mb-3">
              KOTA / KABUPATEN
            </p>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21h18M5 21V7l7-4v18M19 21V11l-6-4"
                  />
                </svg>
              </div>

              <select
                name="regency"
                value={regency || ""}
                onChange={(e) =>
                  setSearchParams({
                    province: province || "",
                    regency: e.target.value,
                  })
                }
                className="w-full border border-gray-400 rounded-2xl pl-10 pr-10 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-gray-700">
                  Pilih Kota
                </option>

                {filteredRegencies.map((r: any) => (
                  <option key={r.id} value={r.id} className="text-gray-700">
                    {r.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-400 mb-3">
              KECAMATAN
            </p>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>

              <select
                name="district"
                value={district || ""}
                onChange={(e) =>
                  setSearchParams({
                    province: province || "",
                    regency: regency || "",
                    district: e.target.value,
                  })
                }
                className="w-full border border-gray-400 rounded-2xl pl-10 pr-10 py-3 text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" className="text-gray-700">
                  Pilih Kecamatan
                </option>

                {filteredDistricts.map((d: any) => (
                  <option key={d.id} value={d.id} className="text-gray-700">
                    {d.name}
                  </option>
                ))}
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSearchParams({})}
            className="w-full flex items-center justify-center gap-2 border-2 border-[#0a5fc5] bg-[#f1f5fb] text-gray-700 text-sm font-semibold h-[50px] rounded-2xl mt-4 hover:bg-[#e4ecf9] transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4h18l-7 8v6l-4 2v-8L3 4z"
              />

              <line x1="2" y1="1" x2="22" y2="21" strokeLinecap="round" />
            </svg>
            RESET
          </button>
        </div>
      </aside>

      <div className="flex flex-col w-full">
        <header className="w-full bg-white border-b border-gray-200 h-[60px] flex items-center px-10">
          <nav className="breadcrumb flex items-center text-sm font-medium gap-2">
            <span className="text-gray-500 font-semibold text-sm">
              Indonesia
            </span>

            {province && (
              <>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                <span
                  className={
                    !regency && !district
                      ? "text-blue-500 font-semibold text-sm"
                      : "text-gray-500 font-semibold text-sm"
                  }
                >
                  {provinces.find((p: any) => p.id === Number(province))?.name}
                </span>
              </>
            )}

            {regency && (
              <>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                <span
                  className={
                    !district
                      ? "text-blue-500 font-semibold text-sm"
                      : "text-gray-500 font-semibold text-sm"
                  }
                >
                  {regencies.find((r: any) => r.id === Number(regency))?.name}
                </span>
              </>
            )}

            {district && (
              <>
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>

                <span className="text-blue-500 font-semibold text-sm">
                  {districts.find((d: any) => d.id === Number(district))?.name}
                </span>
              </>
            )}
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-10 bg-[#f9fafc]">
          <div className="text-center space-y-14">
            {province && (
              <div>
                <p className="text-sm tracking-[0.3em] text-blue-400">
                  PROVINSI
                </p>

                <h1 className="text-6xl text-black font-bold mt-3">
                  {provinces.find((p: any) => p.id === Number(province))?.name}
                </h1>
              </div>
            )}

            {regency && (
              <>
                <div className="text-gray-300 text-3xl">↓</div>

                <div>
                  <p className="text-sm tracking-[0.3em] text-blue-400">
                    KOTA / KABUPATEN
                  </p>

                  <h2 className="text-5xl text-black  font-bold mt-3">
                    {regencies.find((r: any) => r.id === Number(regency))?.name}
                  </h2>
                </div>
              </>
            )}

            {district && (
              <>
                <div className="text-gray-300 text-3xl">↓</div>

                <div>
                  <p className="text-sm tracking-[0.3em] text-blue-400">
                    KECAMATAN
                  </p>

                  <h3 className="text-4xl text-black font-bold mt-3">
                    {
                      districts.find((d: any) => d.id === Number(district))
                        ?.name
                    }
                  </h3>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

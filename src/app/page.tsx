export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Header */}
        <header className="mb-8 flex items-center justify-between border-b border-slate-800 pb-6">
          <div>
            <p className="text-sm text-slate-400">AI Venture Studio</p>
            <h1 className="mt-1 text-4xl font-bold tracking-tight">ORVIA HQ</h1>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
            ● ARIA Online
          </div>
        </header>

        {/* Hero */}
        <section className="mb-8 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Good evening, CEO
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight">
            ARIA 보고드립니다.
            <br />
            오늘 ORVIA의 핵심 브리핑을 준비했습니다.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">분석 완료</p>
              <p className="mt-2 text-3xl font-bold">3건</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">승인 대기</p>
              <p className="mt-2 text-3xl font-bold">1건</p>
            </div>

            <div className="rounded-2xl bg-slate-800 p-5">
              <p className="text-sm text-slate-400">신규 제안</p>
              <p className="mt-2 text-3xl font-bold">2건</p>
            </div>
          </div>

          <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]">
            ARIA와 회의 시작
          </button>
        </section>

        {/* Grid */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Today's Pipeline</h3>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-slate-800 p-4">
                AI Companion 시장조사
              </div>
              <div className="rounded-2xl bg-slate-800 p-4">
                시니어 SaaS 아이템 발굴
              </div>
              <div className="rounded-2xl bg-slate-800 p-4">
                MVP 후보 검토
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Task Board</h3>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-blue-300">
                진행중: 2건
              </div>

              <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-300">
                검토중: 1건
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
                완료: 4건
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
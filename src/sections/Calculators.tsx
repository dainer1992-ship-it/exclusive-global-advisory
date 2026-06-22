import { Building2, CreditCard, UserRound } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import {
  calculateCreditCardPayoff,
  calculatePersonalLoan,
  calculateSmeLoan,
  firstMinimumPayment,
  type CreditCardResult,
} from '../lib/calculators';
import { formatCurrency, formatPercent, formatYears } from '../lib/format';

type Tab = 'sme' | 'personal' | 'card';

const tabs: { id: Tab; label: string; icon: typeof Building2 }[] = [
  { id: 'sme', label: 'SME Loan', icon: Building2 },
  { id: 'personal', label: 'Personal Loan', icon: UserRound },
  { id: 'card', label: 'Credit Card', icon: CreditCard },
];

type RangeFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function RangeField({ label, value, min, max, step, prefix = '', suffix = '', onChange }: RangeFieldProps) {
  const handleChange = (raw: string) => {
    const parsed = Number(raw);
    if (Number.isFinite(parsed)) onChange(clamp(parsed, min, max));
  };

  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold text-white/80">
        <span>{label}</span>
        <span className="tabular-nums text-gold">
          {prefix}
          {value.toLocaleString('en-MY')}
          {suffix}
        </span>
      </span>
      <input
        className="range-input mb-3 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
      <input
        className="w-full rounded-xl border border-white/10 bg-white/[.09] px-3 py-2.5 text-white outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </label>
  );
}

function ResultCard({ label, value, note }: { label: string; value: string; note?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.07] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.07)]">
      <p className="mb-2 text-sm text-white/60">{label}</p>
      <p className="gold-text break-words text-2xl font-extrabold tabular-nums md:text-3xl">{value}</p>
      {note ? <p className="mt-2 text-xs text-white/55">{note}</p> : null}
    </div>
  );
}

function Sparkline({ result }: { result: CreditCardResult }) {
  const points = useMemo(() => {
    const values = result.schedule;
    const max = Math.max(...values, 1);
    return values
      .map((balance, index) => {
        const x = values.length === 1 ? 0 : (index / (values.length - 1)) * 100;
        const y = 36 - (balance / max) * 32;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(' ');
  }, [result.schedule]);

  return (
    <svg viewBox="0 0 100 40" className="h-20 w-full overflow-visible" role="img" aria-label="Balance payoff sparkline">
      <line x1="0" y1="36" x2="100" y2="36" stroke="rgba(255,255,255,.18)" strokeWidth="0.7" />
      <polyline fill="none" stroke="#D4B86A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" points={points} />
    </svg>
  );
}

export function Calculators() {
  const [active, setActive] = useState<Tab>('sme');

  const [smeAmount, setSmeAmount] = useState(250000);
  const [smeRate, setSmeRate] = useState(7);
  const [smeYears, setSmeYears] = useState(5);
  const sme = calculateSmeLoan(smeAmount, smeRate, smeYears);

  const [personalAmount, setPersonalAmount] = useState(50000);
  const [personalRate, setPersonalRate] = useState(6);
  const [personalYears, setPersonalYears] = useState(5);
  const [flatMode, setFlatMode] = useState(true);
  const personal = calculatePersonalLoan(personalAmount, personalRate, personalYears, flatMode);

  const [cardBalance, setCardBalance] = useState(10000);
  const [cardApr, setCardApr] = useState(18);
  const [cardMode, setCardMode] = useState<'min' | 'fixed'>('min');
  const [fixedPayment, setFixedPayment] = useState(300);
  const card = calculateCreditCardPayoff(
    cardBalance,
    cardApr,
    cardMode === 'min' ? { type: 'min' } : { type: 'fixed', fixedPayment },
  );
  const minComparison = calculateCreditCardPayoff(cardBalance, cardApr, { type: 'min' });
  const fixedComparisonPayment =
    cardMode === 'fixed' ? fixedPayment : Math.round(firstMinimumPayment(cardBalance, cardApr) * 2);
  const fixedComparison = calculateCreditCardPayoff(cardBalance, cardApr, {
    type: 'fixed',
    fixedPayment: fixedComparisonPayment,
  });

  return (
    <section id="calculators" className="section-pad bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn trigger="scroll">
          <div className="mb-10 max-w-3xl">
            <p className="kicker mb-4 border-gold/25 bg-gold/10 text-gold">
              Calculators
            </p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Estimate your funding cost before you speak to a lender.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              Use the live calculators for SME loans, personal flat-rate financing, and credit card
              payoff planning.
            </p>
          </div>
        </FadeIn>

        <FadeIn trigger="scroll" delay={120}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.055] p-3 shadow-[0_28px_90px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] md:p-5">
            <div className="mb-8 grid gap-2 rounded-2xl bg-black/14 p-2 md:grid-cols-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      active === tab.id
                        ? 'gold-gradient text-navy'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {active === 'sme' ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
                <div className="space-y-5">
                  <RangeField label="Loan amount" value={smeAmount} min={50000} max={10000000} step={10000} prefix="RM" onChange={setSmeAmount} />
                  <RangeField label="Rate p.a." value={smeRate} min={3} max={12} step={0.1} suffix="%" onChange={setSmeRate} />
                  <RangeField label="Tenure" value={smeYears} min={1} max={10} step={1} suffix=" years" onChange={setSmeYears} />
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <ResultCard label="Monthly Installment" value={formatCurrency(sme.monthly)} />
                  <ResultCard label="Total Interest" value={formatCurrency(sme.totalInterest)} />
                  <ResultCard label="Total Payable" value={formatCurrency(sme.totalPayable)} />
                </div>
              </div>
            ) : null}

            {active === 'personal' ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
                <div className="space-y-5">
                  <RangeField label="Loan amount" value={personalAmount} min={5000} max={200000} step={1000} prefix="RM" onChange={setPersonalAmount} />
                  <RangeField label="Rate p.a." value={personalRate} min={4} max={12} step={0.1} suffix="%" onChange={setPersonalRate} />
                  <RangeField label="Tenure" value={personalYears} min={1} max={7} step={1} suffix=" years" onChange={setPersonalYears} />
                  <button
                    type="button"
                    onClick={() => setFlatMode((current) => !current)}
                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                      flatMode ? 'border-gold bg-gold/15 text-gold' : 'border-white/10 bg-white/10 text-white'
                    }`}
                  >
                    <span>Flat rate (typical MY)</span>
                    <span className="font-semibold">{flatMode ? 'ON' : 'Reducing'}</span>
                  </button>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ResultCard label="Monthly" value={formatCurrency(personal.monthly)} />
                  <ResultCard label="Total Interest" value={formatCurrency(personal.totalInterest)} />
                  <ResultCard label="Total Payable" value={formatCurrency(personal.totalPayable)} />
                  <ResultCard
                    label="Effective APR"
                    value={personal.effectiveApr ? formatPercent(personal.effectiveApr) : 'Reducing rate'}
                    note={flatMode ? 'Bisection estimate from flat-rate monthly payment.' : 'Toggle flat mode to view APR equivalent.'}
                  />
                </div>
              </div>
            ) : null}

            {active === 'card' ? (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
                <div className="space-y-5">
                  <RangeField label="Card balance" value={cardBalance} min={1000} max={100000} step={500} prefix="RM" onChange={setCardBalance} />
                  <RangeField label="APR" value={cardApr} min={8} max={24} step={0.1} suffix="%" onChange={setCardApr} />
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCardMode('min')}
                      className={`rounded-lg px-4 py-3 text-sm font-semibold ${cardMode === 'min' ? 'gold-gradient text-navy' : 'bg-white/10 text-white'}`}
                    >
                      Minimum only
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardMode('fixed')}
                      className={`rounded-lg px-4 py-3 text-sm font-semibold ${cardMode === 'fixed' ? 'gold-gradient text-navy' : 'bg-white/10 text-white'}`}
                    >
                      Fixed monthly
                    </button>
                  </div>
                  {cardMode === 'fixed' ? (
                    <RangeField label="Fixed payment" value={fixedPayment} min={50} max={5000} step={10} prefix="RM" onChange={setFixedPayment} />
                  ) : null}
                </div>

                <div className="space-y-4">
                  {card.neverPaysOff ? (
                  <div className="rounded-2xl border border-red-400/50 bg-red-500/15 p-4 text-sm text-red-100">
                      This payment only covers interest — the balance never clears. Increase it.
                    </div>
                  ) : null}
                  <div className="grid gap-4 md:grid-cols-3">
                    <ResultCard label="Months to Clear" value={card.neverPaysOff ? 'Never' : formatYears(card.months)} />
                    <ResultCard label="Total Interest" value={formatCurrency(card.totalInterest)} />
                    <ResultCard label="Total Paid" value={formatCurrency(card.totalPaid)} />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[.07] p-5">
                    <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row">
                      <div>
                        <p className="text-sm font-semibold text-white">Minimum payment trap</p>
                        <p className="text-sm text-white/60">
                          Minimum-only vs fixed monthly payment comparison.
                        </p>
                      </div>
                      <p className="text-sm text-gold">Fixed comparison: {formatCurrency(fixedComparisonPayment)}</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-xl bg-black/15 p-4">
                        <p className="text-xs uppercase tracking-[.14em] text-white/50">Minimum only</p>
                        <p className="mt-2 text-lg font-semibold">{formatYears(minComparison.months)}</p>
                        <p className="text-sm text-white/60">{formatCurrency(minComparison.totalInterest)} interest</p>
                      </div>
                      <div className="rounded-xl bg-black/15 p-4">
                        <p className="text-xs uppercase tracking-[.14em] text-white/50">Fixed monthly</p>
                        <p className="mt-2 text-lg font-semibold">
                          {fixedComparison.neverPaysOff ? 'Never clears' : formatYears(fixedComparison.months)}
                        </p>
                        <p className="text-sm text-white/60">{formatCurrency(fixedComparison.totalInterest)} interest</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Sparkline result={card.neverPaysOff ? minComparison : card} />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <p className="mt-8 text-xs leading-5 text-white/50">
              Estimates only. Actual rates and approval subject to the lender. Not financial advice.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export type LoanResult = {
  monthly: number;
  totalInterest: number;
  totalPayable: number;
};

export type PersonalLoanResult = LoanResult & {
  effectiveApr?: number;
};

export type CreditCardMode =
  | { type: 'min' }
  | {
      type: 'fixed';
      fixedPayment: number;
    };

export type CreditCardResult = {
  months: number;
  years: number;
  totalInterest: number;
  totalPaid: number;
  neverPaysOff: boolean;
  schedule: number[];
};

export function amortizedPayment(principal: number, monthlyRate: number, months: number) {
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function calculateSmeLoan(principal: number, annualRatePercent: number, years: number): LoanResult {
  const months = years * 12;
  const monthlyRate = annualRatePercent / 100 / 12;
  const monthly = amortizedPayment(principal, monthlyRate, months);
  const totalPayable = monthly * months;
  return {
    monthly,
    totalInterest: totalPayable - principal,
    totalPayable,
  };
}

function solveEffectiveApr(principal: number, monthlyPayment: number, years: number) {
  const months = years * 12;
  let low = 0.0001;
  let high = 1;

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const mid = (low + high) / 2;
    const payment = amortizedPayment(principal, mid, months);
    if (payment > monthlyPayment) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return ((low + high) / 2) * 12 * 100;
}

export function calculatePersonalLoan(
  principal: number,
  annualRatePercent: number,
  years: number,
  flatRateMode = true,
): PersonalLoanResult {
  if (!flatRateMode) {
    return calculateSmeLoan(principal, annualRatePercent, years);
  }

  const totalInterest = principal * (annualRatePercent / 100) * years;
  const totalPayable = principal + totalInterest;
  const monthly = totalPayable / (years * 12);

  return {
    monthly,
    totalInterest,
    totalPayable,
    effectiveApr: solveEffectiveApr(principal, monthly, years),
  };
}

export function calculateCreditCardPayoff(
  openingBalance: number,
  annualAprPercent: number,
  mode: CreditCardMode,
): CreditCardResult {
  const monthlyRate = annualAprPercent / 100 / 12;
  let balance = openingBalance;
  let months = 0;
  let totalInterest = 0;
  let totalPaid = 0;
  const schedule = [balance];

  while (balance > 0.005 && months < 1200) {
    const interest = balance * monthlyRate;
    const statement = balance + interest;
    let payment =
      mode.type === 'min' ? Math.max(50, 0.05 * statement) : mode.fixedPayment;

    payment = Math.min(payment, statement);

    if (mode.type === 'fixed' && payment <= interest) {
      return {
        months,
        years: months / 12,
        totalInterest,
        totalPaid,
        neverPaysOff: true,
        schedule,
      };
    }

    balance = statement - payment;
    totalInterest += interest;
    totalPaid += payment;
    months += 1;
    schedule.push(Math.max(balance, 0));
  }

  return {
    months,
    years: months / 12,
    totalInterest,
    totalPaid,
    neverPaysOff: months >= 1200,
    schedule,
  };
}

export function firstMinimumPayment(balance: number, annualAprPercent: number) {
  const statement = balance + balance * (annualAprPercent / 100 / 12);
  return Math.max(50, 0.05 * statement);
}

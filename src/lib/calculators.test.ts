import { describe, expect, it } from 'vitest';
import {
  calculateCreditCardPayoff,
  calculatePersonalLoan,
  calculateSmeLoan,
} from './calculators';

describe('Exclusive Global Advisory calculators', () => {
  it('calculates SME reducing-balance loan repayments', () => {
    const result = calculateSmeLoan(100000, 8, 5);

    expect(result.monthly).toBeCloseTo(2027.64, 2);
    expect(result.totalInterest).toBeCloseTo(21658.37, 2);
    expect(result.totalPayable).toBeCloseTo(121658.37, 2);
  });

  it('calculates personal flat-rate loan effective APR for RM50k at 6% over 5 years', () => {
    const result = calculatePersonalLoan(50000, 6, 5, true);

    expect(result.monthly).toBeCloseTo(1083.33, 2);
    expect(result.totalInterest).toBeCloseTo(15000, 2);
    expect(result.effectiveApr).toBeCloseTo(10.85, 2);
  });

  it('calculates personal flat-rate loan effective APR for RM30k at 8% over 3 years', () => {
    const result = calculatePersonalLoan(30000, 8, 3, true);

    expect(result.monthly).toBeCloseTo(1033.33, 2);
    expect(result.effectiveApr).toBeCloseTo(14.55, 2);
  });

  it('calculates credit card minimum-payment payoff for RM10k at 18% APR', () => {
    const result = calculateCreditCardPayoff(10000, 18, { type: 'min' });

    expect(result.months).toBe(88);
    expect(result.years).toBeCloseTo(7.3, 1);
    expect(result.totalInterest).toBeCloseTo(3973.78, 2);
  });

  it('calculates credit card minimum-payment payoff for RM5k at 15% APR', () => {
    const result = calculateCreditCardPayoff(5000, 15, { type: 'min' });

    expect(result.months).toBe(65);
    expect(result.totalInterest).toBeCloseTo(1469.26, 2);
  });

  it('calculates credit card fixed-payment payoff for RM10k at 18% APR', () => {
    const result = calculateCreditCardPayoff(10000, 18, {
      type: 'fixed',
      fixedPayment: 300,
    });

    expect(result.months).toBe(47);
    expect(result.totalInterest).toBeCloseTo(3967.21, 2);
  });

  it('flags fixed payments that only cover interest', () => {
    const result = calculateCreditCardPayoff(10000, 18, {
      type: 'fixed',
      fixedPayment: 140,
    });

    expect(result.neverPaysOff).toBe(true);
  });
});

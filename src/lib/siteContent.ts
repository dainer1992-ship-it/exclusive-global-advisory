export type ContentBlock = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ContentPage = {
  path: string;
  eyebrow: string;
  title: string;
  summary: string;
  kind: 'page' | 'service' | 'article' | 'support';
  blocks: ContentBlock[];
  cta?: string;
  related?: string[];
};

export const migratedPages: ContentPage[] = [
  {
    path: '/about/',
    eyebrow: 'About Exclusive Global Advisory',
    title: 'Business financing guidance for Malaysian SME owners.',
    summary:
      'Exclusive Global Advisory helps owners move from funding uncertainty to a clearer financing route, stronger documents, and lender-ready action.',
    kind: 'page',
    cta: 'Book a consultation',
    related: ['/services/', '/why-choose-us/', '/contact/'],
    blocks: [
      {
        heading: 'What the original page promised',
        body: [
          'The original site positioned EGA as a one-stop business financial advisor in Malaysia with practical support across financing, licensing, accounting, legal, and risk services.',
          'The upgraded site keeps the same promise but removes demo-theme language and makes the offer clearer for SME owners.',
        ],
      },
      {
        heading: 'How EGA supports an owner',
        body: [
          'EGA reviews the business situation, maps suitable financing channels, prepares the case, and connects the owner with funding options that fit the stage of the company.',
        ],
        bullets: [
          'Understand the funding need and business profile.',
          'Identify possible routes: bank, grant, equity, factoring, P2P, halal, or koperasi channels.',
          'Prepare documents and financial positioning before approaching funders.',
          'Keep the process clear, transparent, and practical.',
        ],
      },
    ],
  },
  {
    path: '/why-choose-us/',
    eyebrow: 'Why Choose Us',
    title: 'A multi-source financing partner, not just a loan introducer.',
    summary:
      'The original site highlighted four reasons to choose EGA: multi-source financing, proven track record, zero upfront fees, and one-stop support.',
    kind: 'page',
    cta: 'Talk to EGA',
    related: ['/services/business-fundraising-capital/', '/support/', '/contact/'],
    blocks: [
      {
        heading: 'Multi-source financing under one roof',
        body: [
          'SMEs often lose time by asking one bank, receiving one rejection, then stopping. EGA approaches financing as a route-mapping problem first.',
        ],
      },
      {
        heading: 'Track record and practical support',
        body: [
          'EGA keeps the original proof points: 300+ clients assisted, RM200k-RM100mil funding capacity, seven financing options, and loan tenures up to ten years.',
        ],
      },
      {
        heading: 'Transparent process',
        body: [
          'The site should avoid guaranteed approval language. The safer promise is clear advice, stronger preparation, and suitable funding route selection.',
        ],
      },
    ],
  },
  {
    path: '/services/',
    eyebrow: 'Services',
    title: 'Financing, advisory, licensing, accounting, legal, and risk support.',
    summary:
      'This page migrates the original services overview and links each service into a deeper page for clients who need more detail before contacting Jay.',
    kind: 'page',
    cta: 'See which route fits your business',
    related: [
      '/services/business-fundraising-capital/',
      '/services/account-tax-collaboration-with-partner/',
      '/services/legal-services-collaboration-with-partner/',
      '/services/business-license/',
      '/services/insurance-risk-services/',
    ],
    blocks: [
      {
        heading: 'The five original service lines',
        body: [
          'The original EGA site listed five core service categories. The upgraded version keeps those categories and expands them into pages that are easier to read, share, and rank.',
        ],
        bullets: [
          'Fundraising & Capital.',
          'Accounting & Tax.',
          'Legal Advisory.',
          'Business Licensing.',
          'Insurance & Risk.',
        ],
      },
    ],
  },
  {
    path: '/services/business-fundraising-capital/',
    eyebrow: 'Service Detail',
    title: 'Business fundraising and capital advisory.',
    summary:
      'For SMEs that need a practical financing route across bank, grant, equity, halal, koperasi, factoring, P2P, BFP, BSP, and PCP options.',
    kind: 'service',
    cta: 'Check my funding route',
    related: ['/loan-eligibility-test/', '/articles/business-loan-rejection-malaysia/', '/contact/'],
    blocks: [
      {
        heading: 'What this service covers',
        body: [
          'This is the main EGA service line from the original site. It helps business owners understand which funding route is realistic before they waste time approaching the wrong lender or programme.',
        ],
        bullets: [
          'Grant financing and government-linked routes.',
          'Equity financing and investor-ready preparation.',
          'Bank financing and working capital routes.',
          'Halal financing, koperasi institution financing, factoring, and P2P financing.',
          'BFP, BSP, and PCP route matching where suitable.',
        ],
      },
      {
        heading: 'Best fit',
        body: [
          'This fits owners who already have a real business need: expansion, cash-flow gap, equipment purchase, invoice cycle pressure, working capital, or refinancing pressure.',
        ],
      },
    ],
  },
  {
    path: '/services/account-tax-collaboration-with-partner/',
    eyebrow: 'Service Detail',
    title: 'Accounting and tax support with partners.',
    summary:
      'Company secretary, bookkeeping, audit, and tax support that helps SMEs keep cleaner records before financing discussions.',
    kind: 'service',
    cta: 'Ask about accounting support',
    related: [
      '/services/company-secretary-cosec/',
      '/services/bookkeeping/',
      '/services/audit/',
      '/services/tax/',
      '/contact/',
    ],
    blocks: [
      {
        heading: 'Why it matters for financing',
        body: [
          'A financing case is weaker when the accounts are messy, incomplete, or difficult for a lender to understand. Accounting and tax support can turn a business story into documents that are easier to assess.',
        ],
        bullets: [
          'Company Secretary (COSEC).',
          'Bookkeeping.',
          'Audit support.',
          'Tax services.',
        ],
      },
      {
        heading: 'When to start',
        body: [
          'Start before applying for funding, not after rejection. Clean records reduce friction and make the advisory process faster.',
        ],
      },
    ],
  },
  {
    path: '/services/company-secretary-cosec/',
    eyebrow: 'Accounting & Tax',
    title: 'Company secretary support for cleaner statutory records.',
    summary:
      'COSEC support helps SMEs keep company records, filings, resolutions, and governance paperwork ready before banking or financing review.',
    kind: 'service',
    cta: 'Ask about COSEC support',
    related: [
      '/services/account-tax-collaboration-with-partner/',
      '/services/bookkeeping/',
      '/services/business-fundraising-capital/',
      '/contact/',
    ],
    blocks: [
      {
        heading: 'What is Company Secretary (COSEC)?',
        body: [
          'Company secretary support keeps statutory records and corporate filings organised so the company can operate, report, and apply for financing with fewer document gaps.',
          'For financing work, clean company records reduce back-and-forth when lenders, partners, or government programmes need to understand the company structure.',
        ],
      },
      {
        heading: 'Key areas covered',
        body: ['The practical work is governance housekeeping and document readiness.'],
        bullets: [
          'Company statutory records and registers.',
          'Board and shareholder resolutions where needed.',
          'Annual filing and compliance coordination.',
          'Document support for financing, licensing, and partner review.',
        ],
      },
    ],
  },
  {
    path: '/services/bookkeeping/',
    eyebrow: 'Accounting & Tax',
    title: 'Bookkeeping support that makes the business easier to assess.',
    summary:
      'Bookkeeping records daily transactions, reconciles accounts, and keeps the financial trail readable for tax, audit, and funding discussions.',
    kind: 'service',
    cta: 'Ask about bookkeeping',
    related: [
      '/services/account-tax-collaboration-with-partner/',
      '/services/audit/',
      '/services/tax/',
      '/contact/',
    ],
    blocks: [
      {
        heading: 'What is Bookkeeping?',
        body: [
          'Bookkeeping is the regular recording of sales, expenses, payments, receipts, invoices, and bank activity. It turns day-to-day business movement into records that owners and advisors can review.',
          'When a company wants financing, bookkeeping quality affects how quickly the business story can be checked against real numbers.',
        ],
      },
      {
        heading: 'Why it matters before funding',
        body: ['A lender or programme owner needs numbers that are consistent, traceable, and explainable.'],
        bullets: [
          'Transaction recording and document filing.',
          'Bank reconciliation and payment tracking.',
          'Management-account preparation support.',
          'Cleaner handoff for audit, tax, and financing review.',
        ],
      },
    ],
  },
  {
    path: '/services/audit/',
    eyebrow: 'Accounting & Tax',
    title: 'Audit support for transparent records and lender confidence.',
    summary:
      'Audit support helps owners prepare records, evidence, and review trails so financial information can be checked with more confidence.',
    kind: 'service',
    cta: 'Ask about audit support',
    related: [
      '/services/account-tax-collaboration-with-partner/',
      '/services/bookkeeping/',
      '/services/tax/',
      '/contact/',
    ],
    blocks: [
      {
        heading: 'What is Audit?',
        body: [
          'An audit is a systematic, independent, and documented examination of records, processes, or systems like financial statements, IT controls, or quality standards. The purpose is to provide an objective evaluation, check for accuracy and compliance, identify risks, and ensure transparency for stakeholders.',
          'For an SME owner, audit readiness gives banks, partners, regulators, and management a clearer view of whether the records match established criteria.',
        ],
      },
      {
        heading: 'Key aspects of an audit',
        body: ['The original audit page positioned this as a disciplined check of business records and controls.'],
        bullets: [
          'Systematic and independent review by qualified professionals.',
          'Objective evidence from records, documents, and processes.',
          'Accuracy, compliance, and risk checks.',
          'More confidence for investors, regulators, lenders, and management.',
        ],
      },
    ],
  },
  {
    path: '/services/tax/',
    eyebrow: 'Accounting & Tax',
    title: 'Tax support for compliant, financing-ready business records.',
    summary:
      'Tax support helps business owners understand obligations, prepare records, and avoid messy gaps before financing or compliance review.',
    kind: 'service',
    cta: 'Ask about tax support',
    related: [
      '/services/account-tax-collaboration-with-partner/',
      '/services/bookkeeping/',
      '/services/audit/',
      '/contact/',
    ],
    blocks: [
      {
        heading: 'What is Tax?',
        body: [
          'Taxation is the process by which a government imposes mandatory financial charges on individuals and businesses to fund public services and government operations. These payments are compulsory and not directly linked to any specific benefit received by the individual taxpayer.',
          'For SMEs, tax records also become part of the financial picture that banks and advisors review during funding discussions.',
        ],
      },
      {
        heading: 'Key aspects of taxation',
        body: ['The practical goal is compliant records and fewer surprises when business documents are reviewed.'],
        bullets: [
          'Compulsory payment required by law.',
          'Record preparation for filing and review.',
          'Tax-position clarity before funding applications.',
          'Coordination with bookkeeping, audit, and advisory work.',
        ],
      },
    ],
  },
  {
    path: '/services/legal-services-collaboration-with-partner/',
    eyebrow: 'Service Detail',
    title: 'Legal advisory and facility agreement support.',
    summary:
      'Corporate legal support and facility agreement drafting for owners who need the paperwork around financing handled properly.',
    kind: 'service',
    cta: 'Ask about legal support',
    related: ['/services/business-fundraising-capital/', '/services/business-license/', '/contact/'],
    blocks: [
      {
        heading: 'What this service covers',
        body: [
          'The original site listed facility agreement drafting and corporate legal services. In the upgraded site, this is positioned as support around serious financing, ownership, and corporate matters.',
        ],
        bullets: [
          'Facility agreement drafting.',
          'Corporate legal services.',
          'Partner-led review and document support.',
        ],
      },
      {
        heading: 'How it connects to financing',
        body: [
          'Legal documents should support the financing structure, not create confusion later. This is especially relevant for larger facilities, shareholder structures, and partner arrangements.',
        ],
      },
    ],
  },
  {
    path: '/services/business-license/',
    eyebrow: 'Service Detail',
    title: 'Business licensing support.',
    summary:
      'Local government and agency government licence application support for SMEs that need operating compliance before growth.',
    kind: 'service',
    cta: 'Ask about licensing',
    related: ['/services/account-tax-collaboration-with-partner/', '/support/', '/contact/'],
    blocks: [
      {
        heading: 'What this service covers',
        body: [
          'The original service page described local government and agency government licence applications. The practical value is helping the owner avoid delays caused by missing or incorrect application details.',
        ],
        bullets: [
          'Local government licence support.',
          'Agency government licence application support.',
          'Document readiness and application coordination.',
        ],
      },
      {
        heading: 'Why owners ask for this',
        body: [
          'Many businesses only discover a licensing issue when expansion, banking, audit, or compliance pressure appears. Handling it earlier protects the growth plan.',
        ],
      },
    ],
  },
  {
    path: '/services/insurance-risk-services/',
    eyebrow: 'Service Detail',
    title: 'Insurance and risk advisory.',
    summary:
      'Keyman insurance and corporate insurance support for owners who want risk planning alongside business financing.',
    kind: 'service',
    cta: 'Ask about risk support',
    related: ['/services/business-fundraising-capital/', '/support/', '/contact/'],
    blocks: [
      {
        heading: 'What this service covers',
        body: [
          'Insurance and risk support protects the business behind the financing plan. The original service line listed Keyman Insurance and Corporate Insurance.',
        ],
        bullets: ['Keyman insurance.', 'Corporate insurance.', 'Risk planning for business continuity.'],
      },
      {
        heading: 'Why it belongs on the site',
        body: [
          'Risk support shows EGA is not just helping clients get funds. It is helping owners think about continuity, obligations, and downside protection.',
        ],
      },
    ],
  },
  {
    path: '/contact/',
    eyebrow: 'Contact EGA',
    title: 'Book a consultation and speak with the advisory team.',
    summary:
      'Contact details migrated from the original website, including WhatsApp, phone, email, address, and social links.',
    kind: 'page',
    cta: 'Start WhatsApp chat',
    related: ['/support/', '/services/', '/loan-eligibility-test/'],
    blocks: [
      {
        heading: 'Contact details',
        body: [
          'Phone: +6012-544 1068. Email: info@exclusiveglobaladvisory.com.my. Address: SS-02-20, SKY-POD Square, Persiaran Puchong Jaya Selatan, 47100 Puchong, Selangor.',
        ],
      },
      {
        heading: 'Best first message',
        body: [
          'Tell Jay the company type, years in business, rough monthly revenue, funding amount needed, and whether the funding is for working capital, equipment, expansion, refinancing, or cash-flow timing.',
        ],
      },
    ],
  },
  {
    path: '/support/',
    eyebrow: 'Support',
    title: 'Questions SME owners usually ask before applying for financing.',
    summary:
      'A support hub for owners who are not ready to call yet but need clear answers on process, documents, and realistic next steps.',
    kind: 'support',
    cta: 'Ask Jay on WhatsApp',
    related: ['/loan-eligibility-test/', '/loan-calculator/', '/articles/'],
    blocks: [
      {
        heading: 'What should I prepare first?',
        body: [
          'Prepare company documents, management accounts, bank statements, latest tax information, existing facility details, and a simple explanation of why the money is needed.',
        ],
      },
      {
        heading: 'Can EGA guarantee approval?',
        body: [
          'No responsible advisor should guarantee approval. EGA can help map suitable routes, improve readiness, and reduce wasted time, but approval depends on lender criteria and business profile.',
        ],
      },
      {
        heading: 'Do I need perfect accounts?',
        body: [
          'Perfect is not required, but incomplete or confusing records can slow the process. If records need cleanup, EGA can point owners toward accounting and tax support.',
        ],
      },
      {
        heading: 'Which financing route is best?',
        body: [
          'It depends on use of funds, revenue pattern, documentation, industry, repayment ability, and urgency. This is why route-mapping should happen before applications are submitted.',
        ],
      },
    ],
  },
  {
    path: '/loan-calculator/',
    eyebrow: 'Calculator',
    title: 'SME loan, personal loan, and credit-card payoff calculators.',
    summary:
      'The original site referenced a loan calculator. The upgraded version includes three live calculators with transparent assumptions and disclaimers.',
    kind: 'support',
    cta: 'Open calculators',
    related: ['/#calculators', '/loan-eligibility-test/', '/support/'],
    blocks: [
      {
        heading: 'What the calculators do',
        body: [
          'The SME calculator estimates reducing-balance monthly payments. The personal-loan calculator shows flat-rate monthly payment and effective APR. The credit-card calculator shows the minimum-payment trap.',
        ],
      },
      {
        heading: 'Important disclaimer',
        body: [
          'All calculator numbers are estimates only. Actual rates, tenure, approval, and fees depend on lender terms and borrower profile.',
        ],
      },
    ],
  },
  {
    path: '/loan-eligibility-test/',
    eyebrow: 'Eligibility Check',
    title: 'A practical pre-check before applying for business financing.',
    summary:
      'The original site referenced a loan eligibility test. This upgraded page turns it into a clear readiness checklist.',
    kind: 'support',
    cta: 'Check eligibility with Jay',
    related: ['/loan-calculator/', '/support/', '/services/business-fundraising-capital/'],
    blocks: [
      {
        heading: 'Fast readiness checklist',
        body: ['Use this before submitting any application. It helps identify gaps before a lender does.'],
        bullets: [
          'Company is active and has a clear business model.',
          'Bank statements and accounts support the funding amount requested.',
          'Use of funds is clear: working capital, equipment, expansion, invoices, or refinancing.',
          'Existing debt and repayment ability are understood.',
          'Documents are complete enough for a lender or programme owner to review.',
        ],
      },
      {
        heading: 'What happens after the check',
        body: [
          'If the route looks viable, the next step is document preparation and matching the case to suitable financing options.',
        ],
      },
    ],
  },
  {
    path: '/articles/',
    eyebrow: 'Articles',
    title: 'Financing guides for Malaysian SME owners.',
    summary:
      'A starter article hub for SEO, sales education, and weekly social repurposing. These articles are based on EGA service categories and safe financing guidance.',
    kind: 'article',
    cta: 'Read the guides',
    related: [
      '/articles/business-loan-rejection-malaysia/',
      '/articles/working-capital-financing-malaysia/',
      '/articles/grant-equity-bank-financing-malaysia/',
      '/articles/factoring-p2p-financing-malaysia/',
    ],
    blocks: [
      {
        heading: 'Why this hub exists',
        body: [
          'The original site had service pages but limited searchable education. This hub gives Jay a place to publish financing explanations, social content, and Google Business Profile posts.',
        ],
      },
    ],
  },
  {
    path: '/articles/business-loan-rejection-malaysia/',
    eyebrow: 'Article',
    title: 'Business loan rejected in Malaysia? What to fix before reapplying.',
    summary:
      'A practical guide for owners who were rejected and want to understand whether the issue is route, documents, cash flow, or timing.',
    kind: 'article',
    cta: 'Ask for a route check',
    related: ['/loan-eligibility-test/', '/services/business-fundraising-capital/', '/support/'],
    blocks: [
      {
        heading: 'Do not rush into the next application',
        body: [
          'A rejection is data. It may mean the lender was wrong for the case, the documents were weak, the funding amount was too high, or the repayment story was unclear.',
        ],
      },
      {
        heading: 'What to review',
        body: ['Before reapplying, review the case like a lender would.'],
        bullets: [
          'Bank statement pattern.',
          'Profitability and cash-flow consistency.',
          'Existing facilities and repayment pressure.',
          'Purpose of funds.',
          'Completeness of management accounts and supporting documents.',
        ],
      },
    ],
  },
  {
    path: '/articles/working-capital-financing-malaysia/',
    eyebrow: 'Article',
    title: 'Working capital financing: when it helps and when it does not.',
    summary:
      'Working capital financing should solve timing pressure, not hide a business model problem.',
    kind: 'article',
    cta: 'Discuss working capital options',
    related: ['/services/business-fundraising-capital/', '/loan-calculator/', '/contact/'],
    blocks: [
      {
        heading: 'Good use cases',
        body: [
          'Working capital can help when sales are healthy but cash is tied up in inventory, receivables, expansion timing, or project cycles.',
        ],
      },
      {
        heading: 'Risk signs',
        body: [
          'If the business has no clear repayment source, weak margins, or recurring losses with no fix, more capital may only delay the real problem.',
        ],
      },
    ],
  },
  {
    path: '/articles/grant-equity-bank-financing-malaysia/',
    eyebrow: 'Article',
    title: 'Grant, equity, or bank financing: how SME owners should compare routes.',
    summary:
      'Different funding routes solve different problems. The best route depends on control, urgency, documentation, and repayment ability.',
    kind: 'article',
    cta: 'Compare financing routes',
    related: ['/services/business-fundraising-capital/', '/support/', '/contact/'],
    blocks: [
      {
        heading: 'Bank financing',
        body: ['Best when the business has repayment ability, documents, and a clear use of funds.'],
      },
      {
        heading: 'Grant financing',
        body: ['Best when the business fits a programme objective and can meet the application requirements.'],
      },
      {
        heading: 'Equity financing',
        body: ['Best when growth potential is high and the owner accepts dilution or investor involvement.'],
      },
    ],
  },
  {
    path: '/articles/factoring-p2p-financing-malaysia/',
    eyebrow: 'Article',
    title: 'Factoring and P2P financing for SMEs: what owners should understand.',
    summary:
      'Alternative financing can help with speed and cash-flow timing, but the cost and repayment structure must be understood clearly.',
    kind: 'article',
    cta: 'Ask which option fits',
    related: ['/services/business-fundraising-capital/', '/loan-calculator/', '/support/'],
    blocks: [
      {
        heading: 'Factoring',
        body: [
          'Factoring can help when invoices or receivables create a cash timing gap. The quality of customers, invoice terms, and verification process matter.',
        ],
      },
      {
        heading: 'P2P financing',
        body: [
          'P2P can be faster for some SMEs, but owners need to compare cost, tenure, platform requirements, and repayment pressure.',
        ],
      },
    ],
  },
  {
    path: '/articles/keyman-insurance-corporate-risk/',
    eyebrow: 'Article',
    title: 'Keyman insurance and corporate risk: why financing is not the full plan.',
    summary:
      'Funding can grow the business, but risk planning protects continuity when key people, obligations, or unexpected events create pressure.',
    kind: 'article',
    cta: 'Ask about risk support',
    related: ['/services/insurance-risk-services/', '/support/', '/contact/'],
    blocks: [
      {
        heading: 'Why risk belongs in the conversation',
        body: [
          'A financing plan assumes the business can keep operating. Keyman and corporate insurance conversations help owners think beyond approval and into continuity.',
        ],
      },
    ],
  },
];

export function normalizeRoute(pathname: string, search: string) {
  const params = new URLSearchParams(search);
  const redirected = params.get('p');
  const raw = redirected || pathname;
  const withoutBase = raw.replace(/^\/exclusive-global-advisory\/?/, '/');
  const clean = withoutBase.startsWith('/') ? withoutBase : `/${withoutBase}`;
  if (clean === '/index.html') return '/';
  return clean.endsWith('/') || clean.includes('#') ? clean : `${clean}/`;
}

export function findContentPage(pathname: string, search = '') {
  const normalized = normalizeRoute(pathname, search);
  return migratedPages.find((page) => page.path === normalized);
}

export function pageTitleForPath(path: string) {
  if (path === '/#calculators') return 'Loan Calculators';
  return migratedPages.find((page) => page.path === path)?.title || path;
}

export type LISTArray = [
  {
    id: string;
    name: string;
    amount: string;
  },
];

export type InvestmentState = {
  isInvestmentProductFetching: boolean;
  isInvestmentProductSuccess: boolean;
  ListOfInvestments: LISTArray;
};

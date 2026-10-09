interface IMarket {
  market: string;
  division: string;
  min: number;
  max: number;
}

export interface IProduct {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  image: string;

  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;

  unit: "kg" | "litre" | "dozen" | "piece";
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };

  markets: IMarket[];
}

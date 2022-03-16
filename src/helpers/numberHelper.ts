export const numFormat = (num: number) => {
  if(num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + "b";
  else if (num >= 1_000_000 && num < 1_000_000_000) return (num / 1_000_000).toFixed(2) + "m";
  else if (num >= 100_000 && num < 1_000_000) return (num / 1000).toFixed(2) + "k";
  else return num.toFixed(2);
};


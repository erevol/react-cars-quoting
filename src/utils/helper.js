export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}
export function getBrandPercentage(brand) {
  let percentage = 0;
  switch (brand) {
    case 'Citroën':
      percentage = 1.35;
      break;
    case 'Ford':
      percentage = 1.25;
      break;
    case 'Chevrolet':
      percentage = 1.15;
      break;
    default:
      percentage = 1.05;
      break;
  }

  return percentage;
}
export function getPlanPercentage(plan) {
  return (plan === 'Basic') ? 1.20 : 1.5;
}
export function onlyFirstToUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
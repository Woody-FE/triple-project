/*
  출처 : https://easings.net/
*/

function easeOutQuint(x: number): number {
  return 1 - Math.pow(1 - x, 5);
}

export { easeOutQuint };

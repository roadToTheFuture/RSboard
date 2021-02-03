export default function generate(length) {
  const futureString = [];

  for (let i = length; i > 0; i -= 1) {
    futureString.push('1');
  }

  return futureString.join('');
}

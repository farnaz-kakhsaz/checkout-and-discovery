// Replace all leading non-digits with nothing
const getNumberFromString = (string) => Number(string?.replace(/^\D+/g, ""));

export { getNumberFromString };

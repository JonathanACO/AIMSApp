export function deserializeStateTree(stringifyStateTree: string) {
  return JSON.parse(stringifyStateTree, (_key, value) => {
    const regexISODate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (typeof value === "string" && value.match(regexISODate)) {
      return new Date(value);
    }
    return value;
  });
}

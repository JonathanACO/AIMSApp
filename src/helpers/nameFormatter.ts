export function nameFormatter(fullName: string): string {
  const dividedName = fullName.split(" ");
  return `${dividedName[0].charAt(0)}. ${
    dividedName[dividedName.length - 2]
  } ${dividedName[dividedName.length - 1].charAt(0)}.`;
}

export function formatNurseName(fullName: string): string {
  const dividedName = fullName.split(" ");

  if (dividedName.length <= 2) {
    return fullName;
  }
  return `${dividedName[0].charAt(0)}. ${
    dividedName[dividedName.length - 2]
  } ${dividedName[dividedName.length - 1].charAt(0)}.`;
}

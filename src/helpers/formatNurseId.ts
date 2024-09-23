export function generateNurseId(id: string): string {
  if (id.length < 4) {
    id = id.padStart(3, "0");
  }
  return `PF${id}`;
}

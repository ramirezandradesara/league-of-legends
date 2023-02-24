export function splitName(name: string) {
  return name.split(/(?=[A-Z])/).join(" ");
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function isEmailValid(email: string): boolean {
  return emailRegex.test(email);
}

export const waitFor = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

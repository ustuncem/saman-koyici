function isStringEmpty(string: string | null | undefined): boolean {
  return string === undefined || string === '' || string === null;
}

export default isStringEmpty;

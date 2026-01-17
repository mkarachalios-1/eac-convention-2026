/**
 * Build a URL to a file in /public that will work locally and on GitHub Pages.
 * Pass a path relative to the public root (e.g. "resources/file.pdf").
 */
export function assetUrl(publicPath: string): string {
  const cleaned = publicPath.replace(/^\//, '');
  return new URL(cleaned, import.meta.env.BASE_URL).toString();
}

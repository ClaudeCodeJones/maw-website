/**
 * Escapes characters that have special meaning in HTML.
 * Must be applied to ALL user-supplied values before inserting them into
 * HTML strings (e.g. email templates built via template literals).
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

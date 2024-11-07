export default function json2html(data) {
  // Collect table headers by combining keys from all objects
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Begin the HTML table with the data-user attribute
  let html = `<table data-user="meghanathreddyallipurapu@gmail.com">`;
  html += `<thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
  html += `<tbody>`;

  // Populate table rows for each object in the array
  data.forEach(row => {
    html += `<tr>${headers.map(header => `<td>${row[header] ?? ''}</td>`).join('')}</tr>`;
  });

  html += `</tbody></table>`;

  return html;
}

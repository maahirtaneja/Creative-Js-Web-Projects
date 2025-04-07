const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  const key = e.key === ' ' ? 'Space' : e.key;

  insert.innerHTML = `
    <div class="color">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Key Code</th>
            <th>Code</th>
            <th>Which</th>
          </tr>
        </thead>
        <tbody>
          <tr class="fade-in">
            <td>${key}</td>
            <td>${e.keyCode || 'Deprecated'}</td>
            <td>${e.code}</td>
            <td>${e.which || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
});
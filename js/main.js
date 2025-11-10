const singers = [
  {
    Singer: "Corey Taylor",
    DOB: "December 08, 1973",
    Band: "Slipknot",
    BestSongs: ["Psychosocial", "Duality"],
  },
  {
    Singer: "Brandon Flowers",
    DOB: "June 21, 1981",
    Band: "The Killers",
    BestSongs: ["Mr. Brightside", "Somebody Told Me"],
  },
  {
    Singer: "Deryck Whibley",
    DOB: "March 21, 1980",
    Band: "Sum 41",
    BestSongs: ["Fat Lip", "Still Waiting"],
  },
  {
    Singer: "Kurt Cobain",
    DOB: "February 20, 1967",
    Band: "Nirvana",
    BestSongs: ["Smells Like Teen Spirit", "Something in the Way"],
  },
];

const tablebody = document.getElementById("FavoritesingerTableBody");
singers.forEach((singer) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${singer.Singer}</td>
    <td>${singer.DOB}</td>
    <td>${singer.Band}</td>
    <td>${singer.BestSongs.join(", ")}</td>
    `;
  tablebody.appendChild(row);
});

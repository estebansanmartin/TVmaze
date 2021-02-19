const API = "http://api.tvmaze.com/shows?page=1";
const SEARCHAPI = "http://api.tvmaze.com/search/shows?q=:";

const main = document.getElementById('main');

//--- API
    //muestro la api en pantalla
    getTv(API);
    //llamo la api del servidor
    async function getTv(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    verTv(respData);
    console.log(respData);
};


 function verTv(programas) {
    main.innerHTML = "";

    programas.forEach((programa) => {
        const {name, summary, image, genres, url, language} = programa;
        const programaEl = document.createElement("div");

        programaEl.classList.add("programa");
                
        programaEl.innerHTML = `
            <div class="card columns card-stile">
                <div class="card-image column">
                    <figure class="image">
                    <img src="${image.original}" alt="${name}">
                    </figure>
                </div>
                <div class="card-content column">
                    <div class="">
                        <div class="title">${name}</div>
                        <p class="texto">${summary}</p>
                    </div>
                    <div class="footer is-vcentered">
                        <span class="tag column">Genere: ${genres}</span>
                        <span class="tag column">Lingua: ${language}</span>
                        <a href="${url}" class="button column is-half link">LINK</a>
                    </div>
                </div>
            </div>
        `;
        main.appendChild(programaEl);
    })
} 

//------ CONFIGURACION DEL FORM -----
/* form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const caricaDati = search.value;

    if (caricaDati) {
        getTv(SEARCHAPI + caricaDati);

        search.value = "";
        console.log(caricaDati);
    }
}); */

//---  CONFIGURACION DARK THEME
/* const check = document.getElementById('check');

check.addEventListener('change', () => {
    //theme dark del sitio
    document.body.classList.toggle('dark');
})  */

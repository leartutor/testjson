let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);


tabsArray.forEach((ele) => {
    ele.addEventListener("click", function (e) {

        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
    });

});



const api = "https://raw.githubusercontent.com/leartutor/jsontest/main/Courses.json"
async function getData() {
    const response = await fetch(api)
    const data = await response.json()
    printdata(data)
    printdata1(data)
    printdata2(data)
    printdata3(data)
    printdata4(data)
    printdata5(data)
    printdata6(data)
    printdata7(data)
    printdata8(data)
    printdata9(data)
    printdata10(data)
}

function printdata(data) {
    const header = document.querySelector("#langle")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "تعلم اللغات") {
            continue;
        }
        header.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}
function printdata1(data) {
    const program = document.querySelector("#programming")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "برمجة") {
            continue;
        }
        program.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata2(data) {
    const medicine = document.querySelector("#medicine")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "محتوى طبي") {
            continue;
        }
        medicine.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata3(data) {
    const progapps = document.querySelector("#progapps")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "برامج و تطبيقات") {
            continue;
        }
        progapps.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata4(data) {
    const marketing = document.querySelector("#marketing")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "تسويق إلكتروني") {
            continue;
        }
        marketing.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata5(data) {
    const studymat = document.querySelector("#studymat")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "مواد دراسية") {
            continue;
        }
        studymat.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata6(data) {
    const mahara = document.querySelector("#mahara")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "تطوير الذات") {
            continue;
        }
        mahara.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata7(data) {
    const graphic = document.querySelector("#graphic")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "Graphic design") {
            continue;
        }
        graphic.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata8(data) {
    const dini = document.querySelector("#dini")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "ديني") {
            continue;
        }
        dini.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata9(data) {
    const other = document.querySelector("#other")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "أخرى") {
            continue;
        }
        other.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}

function printdata10(data) {
    const freelancing = document.querySelector("#freelancing")
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.trim() !== "Freelancing") {
            continue;
        }
        freelancing.innerHTML += `<div class="col">
    <div class="card h-100">
        <img class="img-fluid" src="${data[i].thumbnailurl}" class="card-img-top"
            alt="...">
        <div class="card-body">
            <h5 class="card-title">${data[i].title}</h5>
            <p><strong>by</strong> <span class="badge text-bg-success"> ${data[i].provider}</span></p>
            <span class="badge text-bg-danger">${data[i].platform}</span>
            <a class="btn btn-outline-success" href="${data[i].curl}" target="_blank"> عرض الكورس
            </a>
        </div>
    </div>
</div>`

    }


}



getData()


//export { getData, printdata10, printdata9, printdata8, printdata7, printdata6, printdata5, printdata4, printdata3, printdata2, printdata1, printdata }

const openMenu = document.getElementById("menu-pop");
// const closemenu = document.getElementById("menu-close");

function popMenu() {
    openMenu.classList.add("pop-menu-show");
}
popMenu();

function closePop() {
    openMenu.classList.remove("pop-menu-show");
}
closePop();

const data = [
    {
        id: 1,
        name: "SohYeong Noh",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (3).svg",
    },
    {
        id: 2,
        name: "James Maddisson",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (4).svg",
    },
    {
        id: 3,
        name: "Emperor Martins",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (2).svg",
    },
    {
        id: 4,
        name: "Jeff Jury",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (5).svg",
    },
    {
        id: 5,
        name: "Peter Shenk",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (6).svg",
    },
    {
        id: 6,
        name: "Desmond liland",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "images/speaker_01 1 (7).svg",
    },
];

const mobileData = [
    {
        id: 1,
        name: "SohYeong Noh",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "images/speaker_01 1.svg",
    },
    {
        id: 2,
        name: "James Maddisson",
        position: "Director of Art center Nabi and a board member of CC Korea",
        description:
            "As a main venue for new media art production in Korea, Nabi promotes cross-discipline collaboration and understading among science technology, humanities and Art",
        mobileImg: "images/speaker_01 1 (1).svg",
    },
];

data.forEach((item) => {
    const section = document.createElement("div");
    section.className = "speaker2";

    section.innerHTML = `
     <img src="${item.desktopImg}" alt="" />
     <div class="speaker2-write">
        <h3>${item.name}</h3>
        <p>
        ${item.position}
        </p>
        <div class="speaker-line"></div>
        <h4>
        ${item.description}
        </h4>
        </div>
    `;

    const speakers = document.querySelector(".desktop-speakers");
    speakers.appendChild(section);
});

mobileData.forEach((item) => {
    const mobileSection = document.createElement("div");
    mobileSection.className = "speaker1";

    mobileSection.innerHTML = `
    <img src="${item.mobileImg}" alt="" />
    <div class="speaker1-write">
        <h3>${item.name}</h3>
        <p>
        ${item.position}
        </p>
        <div class="speaker-line"></div>
        <h4>
        ${item.description}
        </h4>
    </div>
    `;

    const mobileSpeakers = document.querySelector(".featured-speakers");
    mobileSpeakers.appendChild(mobileSection);
});

// const moreButton = document.createElement("div");
// moreButton.className = "more-speakers";

// moreButton.innerHTML = `
//     More <img src="images/arrow_down 1.svg" alt="" />
//     `;

// mobileSpeakers.appendChild(moreButton);

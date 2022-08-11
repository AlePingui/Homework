const LIST_CARDS = [
    {
        state: "Asignada",
        date: "27/05/2022",
        title: "Enlaces covalentes",
        subject: "Quimica II",
        cardType: "cardBlue",
    },
    {
        state: "Pendiente",
        date: "20/05/2022",
        title: "Resumen del libro Geografia V",
        subject: "Geografia",
        cardType: "cardGrey",
    },
    {
        state: "Asignada",
        date: "27/05/2022",
        title: "Funciones Lineales",
        subject: "Analisis Matematico",
        cardType: "cardYellow",
    },
    {
        state: "Pendiente",
        date: "23/04/2022",
        title: "Historia - Red conceptual",
        subject: "Historia",
        cardType: "cardBlack",
    },
    {
        state: "Asignada",
        date: "30/05/2022",
        title: "Oscar Mayer",
        subject: "Geografia",
        cardType: "cardBlue",
    },
    {
        state: "Completada",
        date: "20/05/2022",
        title: "Resumen del libro",
        subject: "Literatura",
        cardType: "cardRed",
    },
    {
        state: "Asignada",
        date: "27/05/2022",
        title: "Mariano Lamadrid",
        subject: "Circuitos",
        cardType: "cardGrey",
    },
    {
        state: "Asignada",
        date: "30/05/2022",
        title: "Jorgito el Glafico",
        subject: "Salud y Adolescencia",
        cardType: "cardYellow",
    },
    {
        state: "Pendiente",
        date: "27/05/2022",
        title: "Lo peor de todo",
        subject: "Politica y ciudadania",
        cardType: "cardBlack",
    }
];

export function getTasks (filter = "Todas") {
    return new Promise((res, rej) => {
        if (filter == "Todas") {
            res(LIST_CARDS);
        }
        if (filter == "Asignadas") {
            res(LIST_CARDS.filter(
                singleCard => singleCard.state == "Asignada"
            ));
        }
        if (filter == "Pendientes") {
            res(LIST_CARDS.filter(
                singleCard => singleCard.state == "Pendiente"
            ));
        }
        if (filter == "Completadas") {
            res(LIST_CARDS.filter(
                singleCard => singleCard.state == "Completada"
            ));
        }
    });
}

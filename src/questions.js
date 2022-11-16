const questions = [
  {
    title: `¿Cuántos litros de sangre tiene una persona adulta?`,
    img: "../assets/img/sangre.jpg",
    options: [
      { answertext: "Tiene entre 2 y 4 litros", isCorrect: false },
      { answertext: "Tiene 10 litros", isCorrect: false },
      { answertext: "Tiene 7 litros", isCorrect: false },
      { answertext: "Tiene entre 4 y 6 litros", isCorrect: true },
    ],
  },
  {
    title: `¿Quién es el autor de la frase "Pienso, luego existo" ?`,
    img: "../assets/img/filosofia1.jpg",

    options: [
      { answertext: "Platón", isCorrect: false },
      { answertext: "Sócrates", isCorrect: false },
      { answertext: "Descartes", isCorrect: true },
      { answertext: "Galileo Galilei", isCorrect: false },
    ],
  },
  {
    title: `¿Cuál es el país más grande y el más pequeño del mundo?`,
    img: "../assets/img/globoterraqueo.webp",
    options: [
      { answertext: "Rusia y Vaticano", isCorrect: true },
      { answertext: "Platón", isCorrect: false },
      { answertext: "Canadá y Mónaco", isCorrect: false },
      { answertext: "Estados Unidos y Malta", isCorrect: false },
    ],
  },

  {
    title: `¿Cuál es el libro más vendido en el mundo después de la Biblia?`,
    img: "../assets/img/libros.jpg",
    options: [
      { answertext: "El Señor de los Anillos", isCorrect: false },
      { answertext: "Don Quijote de la Mancha", isCorrect: true },
      { answertext: "El Principito", isCorrect: false },
      { answertext: "La Odisea", isCorrect: false },
    ],
  },

  {
    title: `La sal común está formada por dos elementos, ¿cuáles son?`,
    img: "../assets/img/sal.jpg",
    options: [
      { answertext: "Sodio y potasio", isCorrect: false },
      { answertext: "Sodio y carbono", isCorrect: false },
      { answertext: "Cristal y sodio", isCorrect: false },
      { answertext: "Sodio y cloro", isCorrect: true },
    ],
  },

  {
    title: `¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?`,
    img: "../assets/img/sistemasolar.jpg",
    options: [
      { answertext: "12 minutos", isCorrect: false },
      { answertext: "1 día", isCorrect: false },
      { answertext: "8 minutos", isCorrect: true },
      { answertext: "12 horas", isCorrect: false },
    ],
  },

  {
    title: `¿En qué periodo de la prehistoria fue descubierto el fuego?`,
    img: "../assets/img/fogata.jpg",
    options: [
      { answertext: "Neolítico", isCorrect: false },
      { answertext: "Paleolítico", isCorrect: true },
      { answertext: "Edad media", isCorrect: false },
      { answertext: "Edad de piedra", isCorrect: false },
    ],
  },

  {
    title: `¿A quién se le atribuye la frase "Solo sé que no sé nada"?`,
    img: "../assets/img/filosofia2.jpg",

    options: [
      { answertext: "Salomón", isCorrect: false },
      { answertext: "Aristóteles", isCorrect: false },
      { answertext: "Sócrates", isCorrect: true },
      { answertext: "Nietszche", isCorrect: false },
    ],
  },

  {
    title: `¿Cuál es la montaña más alta del continente americano?`,
    img: "../assets/img/montaña.jpg",

    options: [
      { answertext: "Aconcagua", isCorrect: true },
      { answertext: "Monte Everest", isCorrect: false },
      { answertext: "Pico Bolívar", isCorrect: false },
      { answertext: "Monte Fuji", isCorrect: false },
    ],
  },

  {
    title: `¿Cuál es el animal terrestre más grande en la actualidad?`,
    img: "../assets/img/animales.webp",

    options: [
      { answertext: "Jirafa", isCorrect: false },
      { answertext: "Elefante africano", isCorrect: true },
      { answertext: "Ballena azul", isCorrect: false },
      { answertext: "Diplodocus", isCorrect: false },
    ],
  },
];

export default questions;

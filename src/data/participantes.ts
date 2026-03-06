export const participantesByYear: Record<
  string,
  {
    nombre: string;
    foto?: string;
    grupo?: number;
    apodo?: string;
    pareja?: string;
    posicion?: string;
    edad?: number;
    descripcion?: string;
  }[]
> = {
 "2025": [
  {
    nombre: "Germán Martínez",
    grupo: 1,
    apodo: "",
    pareja: "Yeray",
    posicion: "revés",
    edad: 29,
    descripcion: "Jugador muy competitivo que destaca por su constancia y su capacidad para mantener el ritmo del partido incluso en los momentos más igualados."
  },
  {
    nombre: "Yeray",
    grupo: 1,
    apodo: "",
    pareja: "Germán Martínez",
    posicion: "drive",
    edad: 27,
    descripcion: "Gran lectura del juego y mucha calma en pista. Suele tomar buenas decisiones en los puntos importantes."
  },
  {
    nombre: "Pablo Rodera",
    grupo: 1,
    apodo: "DJ Kirresk",
    pareja: "Ivana",
    posicion: "revés",
    edad: 27,
    descripcion: "Jugador técnico con buena mano en la red y gran capacidad para construir los puntos con paciencia."
  },
  {
    nombre: "Ivana",
    grupo: 1,
    apodo: "",
    pareja: "Pablo Rodera",
    posicion: "drive",
    edad: 23,
    descripcion: "Muy sólida desde el fondo de pista, aporta equilibrio al juego y siempre pelea cada punto."
  },
  {
    nombre: "Toni Artiaga",
    grupo: 1,
    apodo: "",
    pareja: "Edu",
    posicion: "revés",
    edad: 27,
    descripcion: "Jugador intenso que destaca por su energía y su actitud competitiva durante todo el partido."
  },
  {
    nombre: "Edu",
    grupo: 1,
    apodo: "",
    pareja: "Toni Artiaga",
    posicion: "drive",
    edad: 24,
    descripcion: "Con un estilo de juego muy completo, combina bien defensa y ataque cuando el partido lo requiere."
  },
  {
    nombre: "Mario Guardiola",
    grupo: 1,
    apodo: "",
    pareja: "David",
    posicion: "revés",
    edad: 28,
    descripcion: "Jugador estratégico que sabe aprovechar los huecos en pista y sorprender con golpes bien colocados."
  },
  {
    nombre: "David Arqueros",
    grupo: 1,
    apodo: "Sargox",
    pareja: "Mario Guardiola",
    posicion: "drive",
    edad: 26,
    descripcion: "Gran compañero en pista, con buena comunicación y capacidad para adaptarse a diferentes estilos de juego."
  },
  {
    nombre: "Marina",
    grupo: 1,
    apodo: "",
    pareja: "Alex",
    posicion: "drive",
    edad: 23,
    descripcion: "Jugador muy constante que aporta estabilidad en los intercambios largos y mantiene la concentración."
  },
  {
    nombre: "Alex",
    grupo: 1,
    apodo: "",
    pareja: "Marina",
    posicion: "revés",
    edad: 19,
    descripcion: "Destaca por su actitud positiva en pista y por intentar siempre jugar de forma ofensiva."
  },
  {
    nombre: "Iván Ballester",
    grupo: 2,
    apodo: "Tambez",
    pareja: "Anabel",
    posicion: "revés",
    edad: 29,
    descripcion: "Jugador dominante con gran presencia en pista y mucha confianza en los momentos decisivos."
  },
  {
    nombre: "Anabel",
    grupo: 2,
    apodo: "Anapi",
    pareja: "Iván Ballester",
    posicion: "drive",
    edad: 28,
    descripcion: "Jugadora muy completa que combina técnica, colocación y una excelente lectura del juego."
  },
  {
    nombre: "Arantxa",
    grupo: 2,
    apodo: "",
    pareja: "Antonio",
    posicion: "drive",
    edad: 24,
    descripcion: "Gran capacidad defensiva y mucha regularidad, lo que la convierte en una rival muy difícil."
  },
  {
    nombre: "Antonio",
    grupo: 2,
    apodo: "",
    pareja: "Arantxa",
    posicion: "revés",
    edad: 28,
    descripcion: "Jugador con mucha experiencia en pista que sabe manejar bien los tiempos del partido."
  },
  {
    nombre: "Medy",
    grupo: 2,
    apodo: "ElFrances",
    pareja: "Adri",
    posicion: "revés",
    edad: 29,
    descripcion: "Muy dinámico en pista y siempre dispuesto a luchar cada bola, aportando intensidad al juego."
  },
  {
    nombre: "Adri",
    grupo: 2,
    apodo: "ElniñoTorres",
    pareja: "Medy",
    posicion: "drive",
    edad: 19,
    descripcion: "Jugador creativo que busca soluciones originales en los puntos complicados."
  },
  {
    nombre: "Martin Gutierrez",
    grupo: 2,
    apodo: "Iron Fist",
    pareja: "Manu",
    posicion: "drive",
    edad: 28,
    descripcion: "Gran actitud en pista y mucha entrega, siempre intenta mantener el ritmo del partido."
  },
  {
    nombre: "Manu",
    grupo: 2,
    apodo: "El Raquetas",
    pareja: "Martin",
    posicion: "revés",
    edad: 29,
    descripcion: "Jugador constante que destaca por su capacidad de mantener peloteos largos."
  },
  {
    nombre: "Raquel Ballester",
    grupo: 2,
    apodo: "Reixel",
    pareja: "María",
    posicion: "revés",
    edad: 23,
    descripcion: "Jugadora muy comprometida con el juego, siempre buscando mejorar y competir al máximo."
  },
  {
    nombre: "María",
    grupo: 2,
    apodo: "",
    pareja: "Raquel",
    posicion: "drive",
    edad: 25,
    descripcion: "Gran compañera en pista que aporta calma y seguridad en los momentos más intensos."
  },
  {
    nombre: "Cintia Martínez",
    grupo: 2,
    apodo: "LaInvatible",
    pareja: "Alejandro",
    posicion: "revés",
    edad: 35,
    descripcion: "Jugador con gran espíritu deportivo y muchas ganas de competir en cada partido."
  },
  {
    nombre: "Alejandro",
    grupo: 2,
    apodo: "Saque Mate",
    pareja: "Cintia Martínez",
    posicion: "drive",
    edad: 32,
    descripcion: "Jugador muy participativo que disfruta del juego y aporta siempre buen ambiente en la pista."
  }
],
  "2026": [
  {
    nombre: "Germán Martínez",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "revés",
    edad: 30,
    descripcion: "Jugador muy competitivo que destaca por su constancia y su capacidad para mantener el nivel durante todo el partido."
  },
  {
    nombre: "Hector",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador con mucha energía en pista y un estilo de juego dinámico que siempre presiona al rival."
  },
  {
    nombre: "Dani",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Muy sólido desde el fondo de pista, con gran capacidad para mantener peloteos largos."
  },
  {
    nombre: "Javi Miralles",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador técnico que destaca por su precisión y por saber elegir bien los momentos para atacar."
  },
  {
    nombre: "Pablo Rodera",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Gran lectura del juego y muy buen control en la red, lo que le permite dominar muchos puntos."
  },
  {
    nombre: "David",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador equilibrado que combina defensa y ataque con mucha inteligencia en pista."
  },
  {
    nombre: "Alan",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Destaca por su actitud positiva en pista y por competir cada punto con intensidad."
  },
  {
    nombre: "Luis",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador constante que aporta estabilidad al juego y sabe mantener la calma en los momentos clave."
  },
  {
    nombre: "Cristian",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Muy participativo en pista y con buena capacidad para adaptarse a diferentes estilos de juego."
  },
  {
    nombre: "Abel",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador con mucha entrega que siempre intenta imponer ritmo en los intercambios."
  },
  {
    nombre: "Kevin",
    grupo: 1,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador agresivo en ataque que busca constantemente tomar la iniciativa en los puntos."
  },

  {
    nombre: "Raquel",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugadora muy constante que aporta seguridad en pista y lucha cada punto hasta el final."
  },
  {
    nombre: "Ivana",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Gran capacidad defensiva y buena colocación, lo que la convierte en una rival muy difícil."
  },
  {
    nombre: "Alonso",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador con un estilo de juego ofensivo que intenta dominar los puntos desde el principio."
  },
  {
    nombre: "Aran",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Muy activo en pista y con buena coordinación, siempre aporta intensidad al juego."
  },
  {
    nombre: "Edu",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador muy completo que combina potencia y colocación en sus golpes."
  },
  {
    nombre: "Antonio",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador con experiencia que sabe manejar bien los tiempos del partido."
  },
  {
    nombre: "Marina",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugadora muy regular que aporta estabilidad al juego de pareja."
  },
  {
    nombre: "Jessica",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugadora con mucha actitud en pista que siempre busca competir al máximo."
  },
  {
    nombre: "María",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Muy buena compañera en pista y con gran capacidad para mantener la concentración."
  },
  {
    nombre: "Loreto",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugadora muy comprometida que aporta energía y constancia en cada partido."
  },
  {
    nombre: "Martin",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador muy trabajador que pelea cada punto y mantiene una gran actitud competitiva."
  },
  {
    nombre: "Alejandro",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador con buen control de bola que destaca por su regularidad durante los partidos."
  },
  {
    nombre: "Xavi",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador creativo que intenta sorprender con golpes bien colocados."
  },
  {
    nombre: "David Cabrera",
    grupo: 2,
    apodo: "",
    pareja: "",
    posicion: "",
    edad: 0,
    descripcion: "Jugador muy sólido que aporta seguridad y buen juego en equipo."
  }
],
};
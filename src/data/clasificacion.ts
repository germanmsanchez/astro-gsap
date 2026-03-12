export type ClasifRow = {
  jugador: string;
  puntos: number;
  pista1_min?: number;
  subidas?: number;
  bajadas?: number;
  grupo?: number;
};

export const clasificacionByYear: Record<string, ClasifRow[]> = {
  "2025": [
    { jugador: "Germán", puntos: 9, pista1_min: 0, subidas: 3, bajadas: 1, grupo:1 },
    { jugador: "Yeray", puntos: 9, pista1_min: 0, subidas: 3, bajadas: 1, grupo:1 },
    { jugador: "Pablo Rodera", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "Ivana", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "Toni Artiaga", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "Edu", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "Mario Guardiola", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "David", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:1 },
    { jugador: "Marina", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:1 },
    { jugador: "Alex", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:1 },
    { jugador: "Iván", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0, grupo:2 },
    { jugador: "Anabel", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0, grupo:2 },
    { jugador: "Arantxa", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0, grupo:2 },
    { jugador: "Antonio", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0, grupo:2 },
    { jugador: "Medy", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:2 },
    { jugador: "Adri", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2, grupo:2 },
    { jugador: "Martin", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:2 },
    { jugador: "Manu", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:2 },
    { jugador: "Raquel", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:2 },
    { jugador: "María", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3, grupo:2 },
    { jugador: "Cintia", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 4, grupo:2 },
    { jugador: "Alejandro", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 4, grupo:2 },
  ],
  "2026": [
    { jugador: "Germán", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Hector", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Dani", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Javi Miralles", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Pablo Rodera", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "David", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Alex Lopez", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Alan", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Pablo Tomas", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Toni Artiaga", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Luis", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Alejandro Zarza", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Cristian", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Dani Guerrero", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Abel", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    { jugador: "Kevin", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:1 },
    
    { jugador: "Raquel", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Ivana", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Alonso", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Aran Riera", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Ivan Gumpert", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Antonio", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Marina", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Jessica", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "María", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Loreto", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Martin", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Alejandro", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "Xavi", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "David Cabrera", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0, grupo:2 },
  ],
};

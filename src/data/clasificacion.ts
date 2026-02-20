export type ClasifRow = {
  jugador: string;
  puntos: number;
  pista1_min?: number;
  subidas?: number;
  bajadas?: number;
};

export const clasificacionByYear: Record<string, ClasifRow[]> = {
  "2025": [
    { jugador: "Germán", puntos: 9, pista1_min: 120, subidas: 3, bajadas: 1 },
    { jugador: "Yeray", puntos: 9, pista1_min: 120, subidas: 3, bajadas: 1 },
    { jugador: "Pablo Rodera", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "Ivana", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "Toni Artiaga", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "Edu", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "Mario Guardiola", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "David", puntos: 6, pista1_min: 120, subidas: 2, bajadas: 2 },
    { jugador: "Marina", puntos: 3, pista1_min: 120, subidas: 1, bajadas: 3 },
    { jugador: "Alex", puntos: 3, pista1_min: 120, subidas: 1, bajadas: 3 },
    { jugador: "Iván", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0 },
    { jugador: "Anabel", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0 },
    { jugador: "Arantxa", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0 },
    { jugador: "Antonio", puntos: 12, pista1_min: 0, subidas: 4, bajadas: 0 },
    { jugador: "Medy", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2 },
    { jugador: "Adri", puntos: 6, pista1_min: 0, subidas: 2, bajadas: 2 },
    { jugador: "Martin", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3 },
    { jugador: "Manu", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3 },
    { jugador: "Raquel", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3 },
    { jugador: "María", puntos: 3, pista1_min: 0, subidas: 1, bajadas: 3 },
    { jugador: "Cintia", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 4 },
    { jugador: "Alejandro", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 4 },
  ],
  "2026": [
    { jugador: "Germán", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Hector", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Dani", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Javi Miralles", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Pablo Rodera", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "David", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Martin", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Alan", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Alejandro", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },

    { jugador: "Abel", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
    { jugador: "Kevin", puntos: 0, pista1_min: 0, subidas: 0, bajadas: 0 },
  ],
};

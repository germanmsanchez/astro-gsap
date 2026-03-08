export type Enfrentamiento = {
  grupo: number;
  partido?: number;
  pareja1: [string, string];
  pareja2: [string, string];
  resultado?: string;
};

export const partidosByYear: Record<string, Enfrentamiento[]> = {
  "2025": [
    // GRUPO 1 - PARTIDO 1
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Pablo Rodera", "Ivana"],
      pareja2: ["Marina", "Alex"],
      resultado: "6-2, 6-1",
    },
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Toni Artiaga", "Edu"],
      pareja2: ["Mario Guardiola", "David"],
      resultado: "6-2, 6-4",
    },

    // GRUPO 1 - PARTIDO 2
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Germán", "Yeray"],
      pareja2: ["Marina", "Alex"],
      resultado: "4-6, 5-7",
    },
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Pablo Rodera", "Ivana"],
      pareja2: ["Toni Artiaga", "Edu"],
      resultado: "6-4, 6-4",
    },

    // GRUPO 1 - PARTIDO 3
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Germán", "Yeray"],
      pareja2: ["Mario Guardiola", "David"],
      resultado: "6-3, 6-2",
    },
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Toni Artiaga", "Edu"],
      pareja2: ["Marina", "Alex"],
      resultado: "6-3, 6-2",
    },

    // GRUPO 1 - PARTIDO 4
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Germán", "Yeray"],
      pareja2: ["Toni Artiaga", "Edu"],
      resultado: "7-5, 6-4",
    },
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Pablo Rodera", "Ivana"],
      pareja2: ["Mario Guardiola", "David"],
      resultado: "4-6, 3-6",
    },

    // GRUPO 1 - PARTIDO 5
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Germán", "Yeray"],
      pareja2: ["Pablo Rodera", "Ivana"],
      resultado: "6-4, 6-3",
    },
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Mario Guardiola", "David"],
      pareja2: ["Marina", "Alex"],
      resultado: "6-1, 6-4",
    },

    // GRUPO 2 - PARTIDO 1
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Iván", "Anabel"],
      pareja2: ["Cintia", "Alejandro"],
      resultado: "6-0, 6-1",
    },
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Arantxa", "Antonio"],
      pareja2: ["Raquel", "María"],
      resultado: "6-1, 6-2",
    },
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Medy", "Adri"],
      pareja2: ["Martin", "Manu"],
    },

    // GRUPO 2 - PARTIDO 2
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Iván", "Anabel"],
      pareja2: ["Raquel", "María"],
      resultado: "6-3, 6-2",
    },
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Cintia", "Alejandro"],
      pareja2: ["Martin", "Manu"],
      resultado: "6-4, 6-2",
    },
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Arantxa", "Antonio"],
      pareja2: ["Medy", "Adri"],
      resultado: "6-4, 6-4",
    },

    // GRUPO 2 - PARTIDO 3
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Iván", "Anabel"],
      pareja2: ["Martin", "Manu"],
      resultado: "6-1, 6-3",
    },
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Raquel", "María"],
      pareja2: ["Medy", "Adri"],
      resultado: "6-4, 6-3",
    },
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Cintia", "Alejandro"],
      pareja2: ["Arantxa", "Antonio"],
      resultado: "6-0, 6-0",
    },

    // GRUPO 2 - PARTIDO 4
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Iván", "Anabel"],
      pareja2: ["Medy", "Adri"],
      resultado: "6-2, 6-4",
    },
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Martin", "Manu"],
      pareja2: ["Arantxa", "Antonio"],
      resultado: "6-2, 6-3",
    },
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Raquel", "María"],
      pareja2: ["Cintia", "Alejandro"],
    },

    // GRUPO 2 - PARTIDO 5
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Iván", "Anabel"],
      pareja2: ["Arantxa", "Antonio"],
    },
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Medy", "Adri"],
      pareja2: ["Cintia", "Alejandro"],
      resultado: "6-2, 6-1",
    },
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Martin", "Manu"],
      pareja2: ["Raquel", "María"],
      resultado: "6-3, 4-6, 6-4",
    },
  ],

  "2026": [
    // GRUPO 1 - PARTIDO 1
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Alex Lopez", "Hector Sanz"],
    },
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Pablo Tomas", "Toni Artiaga"],
      pareja2: ["Abel", "Kevin"],
    },
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Germán Martínez", "Alan"],
      pareja2: ["Luis", "Cristian"],
    },
    {
      grupo: 1,
      partido: 1,
      pareja1: ["Dani", "Javi Miralles"],
      pareja2: ["Pablo Rodera", "David"],
    },

    // GRUPO 1 - PARTIDO 2
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Abel", "Kevin"],
    },
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Alex Lopez", "Hector Sanz"],
      pareja2: ["Luis", "Cristian"],
    },
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Pablo Tomas", "Toni Artiaga"],
      pareja2: ["Pablo Rodera", "David"],
    },
    {
      grupo: 1,
      partido: 2,
      pareja1: ["Germán Martínez", "Alan"],
      pareja2: ["Dani", "Javi Miralles"],
    },

    // GRUPO 1 - PARTIDO 3
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Luis", "Cristian"],
    },
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Abel", "Kevin"],
      pareja2: ["Pablo Rodera", "David"],
    },
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Alex Lopez", "Hector Sanz"],
      pareja2: ["Dani", "Javi Miralles"],
    },
    {
      grupo: 1,
      partido: 3,
      pareja1: ["Pablo Tomas", "Toni Artiaga"],
      pareja2: ["Germán Martínez", "Alan"],
    },

    // GRUPO 1 - PARTIDO 4
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Pablo Rodera", "David"],
    },
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Luis", "Cristian"],
      pareja2: ["Dani", "Javi Miralles"],
    },
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Abel", "Kevin"],
      pareja2: ["Germán Martínez", "Alan"],
    },
    {
      grupo: 1,
      partido: 4,
      pareja1: ["Alex Lopez", "Hector Sanz"],
      pareja2: ["Pablo Tomas", "Toni Artiaga"],
    },

    // GRUPO 1 - PARTIDO 5
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Dani", "Javi Miralles"],
    },
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Pablo Rodera", "David"],
      pareja2: ["Germán Martínez", "Alan"],
    },
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Luis", "Cristian"],
      pareja2: ["Pablo Tomas", "Toni Artiaga"],
    },
    {
      grupo: 1,
      partido: 5,
      pareja1: ["Abel", "Kevin"],
      pareja2: ["Alex Lopez", "Hector Sanz"],
    },

    // GRUPO 1 - PARTIDO 6
    {
      grupo: 1,
      partido: 6,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Germán Martínez", "Alan"],
    },
    {
      grupo: 1,
      partido: 6,
      pareja1: ["Dani", "Javi Miralles"],
      pareja2: ["Pablo Tomas", "Toni Artiaga"],
    },
    {
      grupo: 1,
      partido: 6,
      pareja1: ["Pablo Rodera", "David"],
      pareja2: ["Alex Lopez", "Hector Sanz"],
    },
    {
      grupo: 1,
      partido: 6,
      pareja1: ["Luis", "Cristian"],
      pareja2: ["Abel", "Kevin"],
    },

    // GRUPO 1 - PARTIDO 7
    {
      grupo: 1,
      partido: 7,
      pareja1: ["Dani Guerrero", "Alejandro Zarza"],
      pareja2: ["Pablo Tomas", "Toni Artiaga"],
    },
    {
      grupo: 1,
      partido: 7,
      pareja1: ["Germán Martínez", "Alan"],
      pareja2: ["Alex Lopez", "Hector Sanz"],
    },
    {
      grupo: 1,
      partido: 7,
      pareja1: ["Dani", "Javi Miralles"],
      pareja2: ["Abel", "Kevin"],
    },
    {
      grupo: 1,
      partido: 7,
      pareja1: ["Pablo Rodera", "David"],
      pareja2: ["Luis", "Cristian"],
    },

    // GRUPO 2 - PARTIDO 1
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Por definir", "Por definir"],
    },
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Alonso", "Aran Riera"],
      pareja2: ["Xavi", "David Cabrera"],
    },
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Edu Lopez", "Antonio"],
      pareja2: ["Martin", "Alejandro"],
    },
    {
      grupo: 2,
      partido: 1,
      pareja1: ["Marina", "Jessica"],
      pareja2: ["María", "Loreto"],
    },

    // GRUPO 2 - PARTIDO 2
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Xavi", "David Cabrera"],
    },
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Por definir", "Por definir"],
      pareja2: ["Martin", "Alejandro"],
    },
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Alonso", "Aran Riera"],
      pareja2: ["María", "Loreto"],
    },
    {
      grupo: 2,
      partido: 2,
      pareja1: ["Edu Lopez", "Antonio"],
      pareja2: ["Marina", "Jessica"],
    },

    // GRUPO 2 - PARTIDO 3
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Martin", "Alejandro"],
    },
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Xavi", "David Cabrera"],
      pareja2: ["María", "Loreto"],
    },
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Por definir", "Por definir"],
      pareja2: ["Marina", "Jessica"],
    },
    {
      grupo: 2,
      partido: 3,
      pareja1: ["Alonso", "Aran Riera"],
      pareja2: ["Edu Lopez", "Antonio"],
    },

    // GRUPO 2 - PARTIDO 4
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["María", "Loreto"],
    },
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Martin", "Alejandro"],
      pareja2: ["Marina", "Jessica"],
    },
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Xavi", "David Cabrera"],
      pareja2: ["Edu Lopez", "Antonio"],
    },
    {
      grupo: 2,
      partido: 4,
      pareja1: ["Por definir", "Por definir"],
      pareja2: ["Alonso", "Aran Riera"],
    },

    // GRUPO 2 - PARTIDO 5
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Marina", "Jessica"],
    },
    {
      grupo: 2,
      partido: 5,
      pareja1: ["María", "Loreto"],
      pareja2: ["Edu Lopez", "Antonio"],
    },
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Martin", "Alejandro"],
      pareja2: ["Alonso", "Aran Riera"],
    },
    {
      grupo: 2,
      partido: 5,
      pareja1: ["Xavi", "David Cabrera"],
      pareja2: ["Por definir", "Por definir"],
    },

    // GRUPO 2 - PARTIDO 6
    {
      grupo: 2,
      partido: 6,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Edu Lopez", "Antonio"],
    },
    {
      grupo: 2,
      partido: 6,
      pareja1: ["Marina", "Jessica"],
      pareja2: ["Alonso", "Aran Riera"],
    },
    {
      grupo: 2,
      partido: 6,
      pareja1: ["María", "Loreto"],
      pareja2: ["Por definir", "Por definir"],
    },
    {
      grupo: 2,
      partido: 6,
      pareja1: ["Martin", "Alejandro"],
      pareja2: ["Xavi", "David Cabrera"],
    },

    // GRUPO 2 - PARTIDO 7
    {
      grupo: 2,
      partido: 7,
      pareja1: ["Raquel Ballester", "Ivana"],
      pareja2: ["Alonso", "Aran Riera"],
    },
    {
      grupo: 2,
      partido: 7,
      pareja1: ["Edu Lopez", "Antonio"],
      pareja2: ["Por definir", "Por definir"],
    },
    {
      grupo: 2,
      partido: 7,
      pareja1: ["Marina", "Jessica"],
      pareja2: ["Xavi", "David Cabrera"],
    },
    {
      grupo: 2,
      partido: 7,
      pareja1: ["María", "Loreto"],
      pareja2: ["Martin", "Alejandro"],
    },
  ],
};
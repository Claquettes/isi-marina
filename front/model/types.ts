//we define the type Boat
export type Boat = {
    id: number
    name: string
    length: number
    width: number
    year_of_immatriculation: number
    year_since_in_marina: number
    year_until_concession_payed: number
    id_owner: number
}

export type User = {
    id: number
    name: string
    surname: string
    third_name: string
    year_of_birth: number
    year_since_adherent: number
}

export type Emplacement = {
    id: number
    e_row: number
    e_column: number
    price_per_year: number
    year_of_attribution: number
    id_owner: number
    id_boat: number
    id_boat_parked: number
}
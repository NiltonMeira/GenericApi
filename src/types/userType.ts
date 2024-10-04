export type TUser = {
    id: string,
    name: string,
    email: string,
    phone: string,
    homePhone:string,
    cep: string,
    state: string,
    city: string,
    adress: string,
    houseNumber: string
}

export type TUserCreation = Omit<TUser, "id">
export type TUserUpdate = Partial<TUser>
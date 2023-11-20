export interface EmployeePerks {
    title: string,
    logo: string,
    user: UserPerks
}

export interface UserPerks {
    firstName: string,
    lastName: string,
    role: string,
    pointsPerMonth:number,
    address: Object,
    perks: Perks
}

export interface Perks {
    [key: string]: {
        availablePoints: number,
        totalPoints: number,
    }
}
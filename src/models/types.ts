export interface IForm {
    id: number,
    firstName: string;
    lastName: string;
    middleName: string | null;
    birthDate: string;
    description?: string | null;
}
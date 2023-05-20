export interface IForm {
    id: string,
    firstName: string;
    lastName: string;
    middleName: string | null;
    birthDate: string;
    description?: string | null;
}
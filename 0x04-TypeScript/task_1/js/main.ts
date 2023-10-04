export interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[index: string]: any,
}

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};
console.log(teacher3);

export interface Directors extends Teacher {
	numberOfReports: number
}


const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
	(firstName: number): string;
}
export function printTeacher(firstName: string, lastName: string): string {
	return firstName[0] + '. ' + lastName;
}
// Example: printTeacher("John", "Doe") -> J. Doe
console.log(printTeacher("John", "Doe"));

export interface StudentInterface {
	workOnHomework(): string;
	displayName(): string;
};

export class StudentClass implements StudentInterface {
	private _firstName: string;
	private _lastName: string;

	constructor(firstName: string, lastName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this._firstName;
	}
}
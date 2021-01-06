export enum Gender {
  Male,
  Female,
  Undefined,
}

export enum Breed {
  Persian,
  Siamese,
}

export class Cat {
  public name: string;
  public age: number;
  public gender: Gender;
  public breed: Breed;

  constructor(name: string, age: number, gender: Gender, breed: Breed) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
  }

  getGender(): string {
    switch (this.gender) {
      case Gender.Undefined:
        return '...';
        break;
      case Gender.Male:
        return 'Male';
      case Gender.Female:
        return 'Female';
    }
  }

  getBreed(): string {
    switch (this.breed) {
      case Breed.Persian:
        return 'Persian';
      case Breed.Siamese:
        return 'Siamese';
    }
  }
}

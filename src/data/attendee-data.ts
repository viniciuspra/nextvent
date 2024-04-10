export interface Attendee {
  id: string;
  code: string;
  name: string;
  email: string;
  registrationDate: string;
  checkInDate: string | undefined;
}

import { faker } from "@faker-js/faker";

export const attendees: Attendee[] = Array.from({ length: 234 }).map(() => {
  const checkInDate = faker.datatype.boolean({ probability: 0.9 })
    ? faker.date.recent().toString()
    : undefined;

  return {
    id: faker.number.int({ min: 1, max: 1000 }).toString(),
    code: faker.number.int({ min: 10000, max: 99999 }).toString(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    registrationDate: faker.date.recent().toString(),
    checkInDate,
  };
});

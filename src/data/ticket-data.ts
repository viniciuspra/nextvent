import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { faker } from "@faker-js/faker";

export interface TicketProps {
  id?: string;
  title: string;
  subtitle: string;
  date: dayjs.Dayjs;
  location: string;
  price?: string;
  seatNumber?: string;
  type: "Regular" | "VIP" | string;
}

export const tickets: TicketProps[] = Array.from({ length: 4 }, () => ({
  id: faker.string.uuid(),
  title: faker.word.words({ count: { min: 2, max: 5 } }),
  subtitle: faker.lorem.sentence(),
  date: dayjs(faker.date.future()),
  location:
    faker.location.streetAddress() +
    ", " +
    faker.location.state({ abbreviated: true }),
  price: faker.commerce.price({ min: 20, max: 99, dec: 2 }),
  seatNumber: faker.string.numeric({ length: { min: 1, max: 2 } }),
  type: ["Regular", "VIP", "Premium"][Math.floor(Math.random() * 3)],
}));

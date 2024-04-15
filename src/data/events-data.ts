import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { faker } from "@faker-js/faker";


import ImageCover from "@/assets/1600w-t9LPyBWkns4.webp";

interface AvatarProps {
  src: string;
  fallback: string;
}

export interface EventProps {
  id: string;
  title: string;
  coverImg: string;
  avatars: AvatarProps[];
  date: dayjs.Dayjs;
  location: string;
}

const avatars: AvatarProps[] = Array.from({ length: 14 }, () => ({
  src: "https://github.com/shadcn.png",
  fallback: "A",
}));

export const eventos: EventProps[] = Array.from({ length: 10 }, (_, index) => ({
  id: String(index + 1),
  title: faker.lorem.words(4),
  avatars,
  coverImg: ImageCover,
  date: dayjs(faker.date.future()),
  location:
    faker.location.streetAddress() +
    ", " +
    faker.location.state({ abbreviated: true }),
}));

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

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

const avatars: AvatarProps[] = [
  { src: "https://github.com/shadcn.png", fallback: "A" },
  { src: "https://github.com/shadcn.png", fallback: "B" },
  { src: "https://github.com/shadcn.png", fallback: "C" },
  { src: "https://github.com/shadcn.png", fallback: "D" },
  { src: "https://github.com/shadcn.png", fallback: "E" },
];

export const eventos: EventProps[] = [
  {
    id: "1",
    title: "Conferência de Desenvolvimento Web",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Thu Apr 11 2024 15:27:11 GMT-0300"),
    location: "Rua da Felicidade 123, SC",
  },
  {
    id: "2",
    title: "Workshop de Marketing Digital",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Fri May 03 2024 10:00:00 GMT-0300"),
    location: "Avenida da Alegria 456, RJ",
  },
  {
    id: "3",
    title: "Seminário de Inovação Tecnológica",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Sat Jun 15 2024 19:30:00 GMT-0300"),
    location: "Praça da Paz 789, SP",
  },
  {
    id: "4",
    title: "Hackathon de Soluções Sociais",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Mon Jul 22 2024 14:00:00 GMT-0300"),
    location: "Estrada da Esperança 101, MG",
  },
  {
    id: "5",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed Aug 07 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
  {
    id: "6",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed March 14 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
  {
    id: "7",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed sep 4 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
  {
    id: "8",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed jan 28 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
  {
    id: "9",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed Feb 1 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
  {
    id: "10",
    title: "Palestra sobre Inteligência Artificial",
    avatars,
    coverImg: ImageCover,
    date: dayjs("Wed dec 31 2024 08:45:00 GMT-0300"),
    location: "Rua do Progresso 222, BA",
  },
];

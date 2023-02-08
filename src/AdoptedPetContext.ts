import { createContext } from "react";
import { Pet } from './APIResponsesTypes'

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 1338,
    name: "tyler",
    animal: "dog",
    description: "Hoerm ipsum hola",
    breed: 'delmon',
    images: [],
    city: "Colima",
    state: "Co",
  },
  () => {}
]);

export default AdoptedPetContext;

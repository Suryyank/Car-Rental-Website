"use client";
import {
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  createContext,
} from "react";
import { Car } from "../../service/types";

type ModalTypes = {
  children: ReactNode;
};
type ModalContextTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  selectedCar: Car | null;
  setSelectedCar: React.Dispatch<SetStateAction<Car | null>>;
};

export const ModalContext = createContext<ModalContextTypes | undefined>(
  undefined,
);

export const ModalContextProvider = ({ children }: ModalTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, selectedCar, setSelectedCar }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("Use Withing The Provider");
  }
  return ctx;
};

"use client";
import { createContext, useEffect, useState } from "react";

export const GameContext = createContext<{
  pawnPosition: pawnPosition;
  setPawnPosition: setPawnPosition;
}>({ pawnPosition: undefined, setPawnPosition: () => {} });

export const GameProvider = ({ children }: any) => {
  const [pawnPosition, setPawnPosition] = useState<number[] | undefined>([
    1, 3,
  ]);

  return (
    <GameContext.Provider value={{ pawnPosition, setPawnPosition }}>
      {children}
    </GameContext.Provider>
  );
};

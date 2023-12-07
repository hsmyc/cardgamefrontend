import { AuthProvider } from "@/context/authcontext";
import { GameProvider } from "@/context/gamecontext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <GameProvider>
        <AuthProvider>{children}</AuthProvider>
      </GameProvider>
    </main>
  );
}

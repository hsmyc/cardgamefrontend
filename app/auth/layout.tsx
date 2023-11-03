import { AuthProvider } from "@/context/authcontext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <AuthProvider>{children}</AuthProvider>
    </main>
  );
}

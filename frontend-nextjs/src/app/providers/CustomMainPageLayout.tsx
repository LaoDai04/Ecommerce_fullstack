export default function CustomMainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-2xs mx-auto min-h-screen bg-[#54643d] p-10">
      {children}
    </main>
  );
}

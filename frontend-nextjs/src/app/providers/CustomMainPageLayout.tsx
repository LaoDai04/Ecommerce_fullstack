export default function CustomMainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-[80%] mx-auto h-fit
     bg-[#fafbf8fe] p-8 mt-15 rounded-lg ">
      {children}
    </main>
  );
}

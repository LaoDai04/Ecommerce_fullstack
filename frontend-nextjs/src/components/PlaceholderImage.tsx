export default function PlaceHolderImage({ name }: { name: string }) {
  return (
    <div
      role="img"
      aria-label={`No image available for ${name}`}
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#d3eedcfe] to-[#aac7b5fe] text-sm font-medium text-[#668440]"
    >
      No image
    </div>
  );
}

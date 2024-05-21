import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/c4ca1739-26e2-45df-a5a3-a8dd10331dae-jqkvd6.jpg",
  "https://utfs.io/f/12ea36d0-3dd2-4e6d-8d67-87cc39308c2e-vtgf75.jpg",
  "https://utfs.io/f/5eddbf88-01a5-48d4-9e03-14f5e853e1b2-d28i8l.jpg",
  "https://utfs.io/f/11e6c77c-14ad-4a02-9b60-a85ec0a3f601-d2lwu2.jpg"
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">
      {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} />
        </div>
      ))}
      </div>
    </main>
  );
}

import Image from "next/image";

const EventAlbums = () => {
  const albums = [
    { name: "Annual Fest", photoCount: 30, src: "/assets/hero/hero (1).png" },
    { name: "Sports Day", photoCount: 20, src: "/assets/hero/hero (2).png" },
    // Add more albums as needed
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Event Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {albums.map((album, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden">
            <Image src={album.src} alt={album.name} width={500} height={300} />
            <div className="p-4">
              <h3 className="text-lg font-bold">{album.name}</h3>
              <p className="text-gray-500">{album.photoCount} Photos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAlbums;

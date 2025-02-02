const VideosPage = () => {
  // Replace these with actual YouTube video IDs from MN Cricket Academy's channel
  const youtubeVideos = [
    { id: 'VIDEO_ID_1', title: 'Training Session 1' },
    { id: 'VIDEO_ID_2', title: 'Training Session 2' },
    { id: 'VIDEO_ID_3', title: 'Training Session 3' },
    { id: 'VIDEO_ID_4', title: 'Training Session 4' }
  ];

  return (
    <div className="pt-16">
      <div className="bg-cricket-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Training Videos</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Watch and learn from our training sessions and techniques
          </p>
          <div className="mt-6 text-center">
            <a 
              href="https://www.youtube.com/@mncric-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cricket-gold transition-colors"
            >
              Visit our YouTube channel →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {youtubeVideos.map((video, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                title={video.title}
                src={`https://www.youtube.com/embed/${video.id}`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
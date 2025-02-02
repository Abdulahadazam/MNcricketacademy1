const Videos = () => {
  // Replace these with actual YouTube video IDs from MN Cricket Academy's channel
  const youtubeVideos = [
    { id: 'VIDEO_ID_1', title: 'Training Session 1' },
    { id: 'VIDEO_ID_2', title: 'Training Session 2' },
    { id: 'VIDEO_ID_3', title: 'Training Session 3' },
    { id: 'VIDEO_ID_4', title: 'Training Session 4' }
  ];

  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Training Videos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our cricket training sessions and learn from the best techniques
          </p>
          <div className="mt-4">
            <a 
              href="https://www.youtube.com/@mncric-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cricket-green hover:text-cricket-gold transition-colors"
            >
              Visit our YouTube channel →
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    </section>
  );
};

export default Videos;
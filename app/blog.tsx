import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div>
        {/* Embed your YouTube videos */}
        <iframe
          className="w-full h-64 mb-6"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {/* Repeat for other videos */}
      </div>
    </div>
  );
};

export default Blog;

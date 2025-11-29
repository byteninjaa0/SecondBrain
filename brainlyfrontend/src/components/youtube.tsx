import React from 'react';

interface YoutubeEmbedProps {
  embedId: string; // The YouTube video ID
  title?: string; // Optional title for accessibility
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ embedId, title = 'Embedded YouTube video' }) => {
  return (
    <div className="video-responsive">
      <iframe className='w-full'
        width="853"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default YoutubeEmbed;
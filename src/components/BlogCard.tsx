import React from 'react';
import { BlogPost } from '../data/blogPosts';
import Image from 'next/image';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card hover-lift">
      <div className="relative h-52 w-full">
        {post.imageUrl ? (
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill
            className="object-cover"
            onError={(e) => {
              // Fallback for missing images
              const target = e.target as HTMLImageElement;
              target.src = '/images/blog/placeholder.jpg';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-400">Blog Image</p>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">{post.date}</div>
        <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{post.title}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <a 
          href={post.url || `#blogs/${post.id}`}
          className="text-primary hover:underline inline-flex items-center font-medium"
          target={post.url ? "_blank" : undefined}
          rel={post.url ? "noopener noreferrer" : undefined}
        >
          Read More
          <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard; 
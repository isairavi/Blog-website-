import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Home, User, BookOpen, Mail, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogWebsite = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React in 2026",
      excerpt: "Learn the fundamentals of React and build modern web applications with the latest features and best practices.",
      content: "React continues to be one of the most popular frontend libraries. In this comprehensive guide, we'll explore the latest features and how to get started with React development in 2026...",
      author: "Sarah Johnson",
      date: "2026-01-02",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      tags: ["React", "JavaScript", "Frontend"],
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Future of AI and Machine Learning",
      excerpt: "Exploring the latest trends in artificial intelligence and what they mean for developers and businesses.",
      content: "Artificial Intelligence is transforming industries at an unprecedented pace. From generative AI to advanced machine learning models, the landscape is evolving rapidly...",
      author: "Michael Chen",
      date: "2025-12-28",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      tags: ["AI", "Machine Learning", "Tech Trends"],
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Building Scalable Node.js Applications",
      excerpt: "Best practices for creating robust and scalable backend services with Node.js and Express.",
      content: "Node.js has become the go-to choice for building scalable backend applications. In this article, we'll dive deep into architectural patterns and best practices...",
      author: "Emma Rodriguez",
      date: "2025-12-20",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      tags: ["Node.js", "Backend", "JavaScript"],
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "CSS Grid vs Flexbox: When to Use Each",
      excerpt: "A comprehensive comparison of CSS Grid and Flexbox to help you choose the right layout system.",
      content: "CSS Grid and Flexbox are both powerful layout systems, but knowing when to use each can significantly improve your workflow and results...",
      author: "David Kim",
      date: "2025-12-15",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop",
      tags: ["CSS", "Web Design", "Frontend"],
      readTime: "7 min read"
    }
  ]);

  const [currentView, setCurrentView] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Technology', 'Backend', 'Design'];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const viewPost = (post) => {
    setSelectedPost(post);
    setCurrentView('post');
    window.scrollTo(0, 0);
  };

  const Navigation = () => (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                onClick={() => { setCurrentView('home'); setSelectedPost(null); }}>
              TechBlog
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentView('home')} className="flex items-center text-gray-700 hover:text-blue-600 transition">
              <Home className="w-4 h-4 mr-2" /> Home
            </button>
            <button onClick={() => setCurrentView('about')} className="flex items-center text-gray-700 hover:text-blue-600 transition">
              <User className="w-4 h-4 mr-2" /> About
            </button>
            <button onClick={() => setCurrentView('contact')} className="flex items-center text-gray-700 hover:text-blue-600 transition">
              <Mail className="w-4 h-4 mr-2" /> Contact
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }} className="flex items-center w-full text-gray-700 hover:text-blue-600">
              <Home className="w-4 h-4 mr-2" /> Home
            </button>
            <button onClick={() => { setCurrentView('about'); setMobileMenuOpen(false); }} className="flex items-center w-full text-gray-700 hover:text-blue-600">
              <User className="w-4 h-4 mr-2" /> About
            </button>
            <button onClick={() => { setCurrentView('contact'); setMobileMenuOpen(false); }} className="flex items-center w-full text-gray-700 hover:text-blue-600">
              <Mail className="w-4 h-4 mr-2" /> Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Welcome to TechBlog</h2>
        <p className="text-xl mb-8 opacity-90">Explore the latest in web development, technology, and design</p>
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
    </div>
  );

  const CategoryFilter = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full transition ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );

  const BlogGrid = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                   onClick={() => viewPost(post)}>
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                <span className="text-sm text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" /> {post.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  const PostView = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={() => { setCurrentView('home'); setSelectedPost(null); }} 
              className="text-blue-600 hover:text-blue-800 mb-6 flex items-center">
        ← Back to all posts
      </button>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-blue-600">{selectedPost.category}</span>
            <span className="text-sm text-gray-500 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> {selectedPost.readTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{selectedPost.title}</h1>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold text-gray-800">{selectedPost.author}</p>
              <p className="text-sm text-gray-500">{new Date(selectedPost.date).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedPost.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </span>
            ))}
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">{selectedPost.excerpt}</p>
            <p className="text-gray-700 leading-relaxed">{selectedPost.content}</p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This is a demo blog post. In a full implementation, this would contain the complete article content with rich formatting, images, code snippets, and more interactive elements.
            </p>
          </div>
        </div>
      </article>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About TechBlog</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Welcome to TechBlog, your go-to source for the latest insights in web development, technology, and design. 
          We're passionate about sharing knowledge and helping developers stay up-to-date with the rapidly evolving tech landscape.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our team of experienced developers and tech enthusiasts curates high-quality content that ranges from beginner-friendly 
          tutorials to advanced technical deep-dives. Whether you're just starting your coding journey or you're a seasoned 
          professional, you'll find valuable content here.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Join our growing community of tech enthusiasts and never miss an update on the technologies shaping our digital future.
        </p>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    };

    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Get In Touch</h2>
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                rows="5" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">TechBlog</h3>
            <p className="text-gray-400">Your source for cutting-edge tech insights and tutorials.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">Technology</li>
              <li className="hover:text-white cursor-pointer">Backend</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 TechBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {currentView === 'home' && !selectedPost && (
        <>
          <Hero />
          <CategoryFilter />
          <BlogGrid />
        </>
      )}
      {currentView === 'post' && selectedPost && <PostView />}
      {currentView === 'about' && <AboutPage />}
      {currentView === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default BlogWebsite;
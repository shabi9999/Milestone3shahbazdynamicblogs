import React from "react";
import BlogCard from "../components/BlogCard";
import Image from "next/image";




export default function Mega() {
  const posts = [
   {
      id: "1",
      title: "How AI is Changing the World",
      description: "In this blog post, we will explore the many ways that AI is changing the world around us. We will discuss how AI is being used in business, healthcare, education, and more. We will also discuss the potential implications of AI for the future",
      date: "2025-01-03",
      imageUrl: "../images/ai.png",
    },
    {
      id: "2",
      title: "The Benefits of AI",
      description: "In this blog post, we will discuss the many benefits of AI. We will explore how AI can help us to be more productive, make better decisions, and live healthier lives.",
      date: "2025-01-03",
      imageUrl: "../images/slide2.jpg",
    },
    {
      id: "3",
      title: "The Risks of AI",
      description: "In this blog post, we will discuss the potential risks of AI. We will explore how AI could be used to create autonomous weapons, spread misinformation, and even create a new form of inequality",
      date: "2025-01-03",
      imageUrl: "../images/slide3.jpeg",
    },
    {
      id: "4",
      title: "How to Prepare for the AI Revolution",
      description: "In this blog post, we will discuss how to prepare for the AI revolution. We will explore the skills that will be in demand in the future, and how to develop those skills.",
      date: "2025-01-03",
      imageUrl: "../images/slide4.JPG",
    },
    {
      id: "5",
      title: "The Future of AI",
      description: "In this blog post, we will discuss the future of AI. We will explore the potential applications of AI, and how AI could change the world in the years to come.",
      date: "2025-01-03",
      imageUrl: "../images/slide5.png",
    },
    {
      id: "6",
      title: "How to Use AI in Your Business",
      description: "In this blog post, we will discuss how to use AI in your business. We will explore the different AI tools that are available, and how to use them to improve your business processes.",
      date: "2025-01-03",
      imageUrl: "../images/slide6.jpg",
    },
    {
      id: "7",
      title: "How to Use AI to Improve Your Marketing",
      description: "In this blog post, we will discuss how to use AI to improve your marketing. We will explore how AI can help you to target your audience more effectively, and create more engaging content.",
      date: "2025-01-03",
      imageUrl: "../images/slide7.jpeg",
    },
    {
      id: "8",
      title: "How to Use AI to Improve Your Customer Servicet",
      description: "In this blog post, we will discuss how to use AI to improve your customer service. We will explore how AI can help you to provide faster and more accurate support to your customers.",
      date: "2025-01-03",
      imageUrl: "../images/slide8.jpg",
    },
    {
      id: "9",
      title: "How to Use AI to Improve Your Healthcare",
      description: "In this blog post, we will discuss how to use AI to improve your healthcare. We will explore how AI can help to diagnose diseases more accurately, and develop new treatments.",
      date: "2025-01-03",
      imageUrl: "../images/slide9.jpg",
    },
    {
      id: "10",
      title: "How to Use AI to Improve Your Education",
      description: "In this blog post, we will discuss how to use AI to improve your education. We will explore how AI can help to personalize learning, and make education more accessible to everyone.",
      date: "2025-01-03",
      imageUrl: "../images/slide10.jpg",
    },
    {
      id: "11",
      title: "How to Use AI to Improve Your Productivityt",
      description: "In this blog post, we will discuss how to use AI to improve your productivity. We will explore the different AI tools that are available, and how to use them to get more done in less time.",
      date: "2025-01-03",
      imageUrl: "../images/slide11.jpg",
    },
    {
      id: "12",
      title: "How to Use AI to Make Better Decisions",
      description: "In this blog post, we will discuss how to use AI to make better decisions. We will explore how AI can help you to gather and analyze data, and make more informed choices.",
      date: "2025-01-03",
      imageUrl: "../images/slide12.jpg",
    },
    {
      id: "13",
      title: "How to Use AI to Live a Healthier Life",
      description: "Explore the of the HTML, the bacbone of every web page",
      date: "2025-01-03",
      imageUrl: "../images/slide13.jpg",
    },
    {
      id: "14",
      title: "How to Use AI to Stay Safe Online",
      description: "Explore the of the HTML, the bacbone of every web page",
      date: "2025-01-03",
      imageUrl: "../images/slide14.jpg",
    },
    {
      id: "15",
      title: "How to Use AI to Create Art",
      description: "In this blog post, we will discuss how to use AI to create art. We will explore the different AI tools that are available, and how to use them to create beautiful and unique works of art.",
      date: "2025-01-03",
      imageUrl: "../images/slide15.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Exploring the World of AI and Tecnology
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground={index % 2 === 0}/>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

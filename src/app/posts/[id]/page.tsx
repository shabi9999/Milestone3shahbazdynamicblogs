"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AuthoreCard from "@/components/AuthoreCard";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";

// Define the PageProps interface correctly
interface PageProps {
  params: {
    id: string;
  };
}

const posts = [
  {
    id: "1",
    title: "How AI is Changing the World",
    description:
      "In this blog post, we will explore the many ways that AI is changing the world around us. We will discuss how AI is being used in business, healthcare, education, and more. We will also discuss the potential implications of AI for the future",
    image: "../images/ai.png",
  },
  {
    id: "2",
    title: "The Benefits of AI",
    description:"In this blog post, we will discuss the many benefits of AI. We will explore how AI can help us to be more productive, make better decisions, and live healthier lives.",
    image: "../images/slide2.jpg",
  },
  {
    id: "3",
    title: "The Risks of AI",
    description:"In this blog post, we will discuss the potential risks of AI. We will explore how AI could be used to create autonomous weapons, spread misinformation, and even create a new form of inequality",
    image: "../images/slide3.jpeg",
  },
  {
    id: "4",
    title: "How to Prepare for the AI Revolution",
    description:"In this blog post, we will discuss how to prepare for the AI revolution. We will explore the skills that will be in demand in the future, and how to develop those skills.",
    image: "../images/slide4.JPG",
  },
  {
    id: "5",
    title: "The Future of AI",
    description:"In this blog post, we will discuss the future of AI. We will explore the potential applications of AI, and how AI could change the world in the years to come.",
    image: "../images/slide5.png",
  },
  {
    id: "6",
    title: "How to Use AI in Your Business",
    description:"In this blog post, we will discuss how to use AI in your business. We will explore the different AI tools that are available, and how to use them to improve your business processes.",
    image: "../images/slide6.jpg",
  },
  {
    id: "7",
    title: "How to Use AI to Improve Your Marketing",
    description:"In this blog post, we will discuss how to use AI to improve your marketing. We will explore how AI can help you to target your audience more effectively, and create more engaging content.",
    image: "../images/slide7.jpeg",
  },
  {
    id: "8",
    title: "How to Use AI to Improve Your Customer Servicet",
    description:"In this blog post, we will discuss how to use AI to improve your customer service. We will explore how AI can help you to provide faster and more accurate support to your customers.",
    image: "../images/slide8.jpg",
  },
  {
    id: "9",
    title: "How to Use AI to Improve Your Healthcare",
    description:"In this blog post, we will discuss how to use AI to improve your healthcare. We will explore how AI can help to diagnose diseases more accurately, and develop new treatments.",
    image: "../images/slide9.jpg",
  },
  {
    id: "10",
    title: "How to Use AI to Improve Your Education",
    description:"In this blog post, we will discuss how to use AI to improve your education. We will explore how AI can help to personalize learning, and make education more accessible to everyone.",
    image: "../images/slide10.jpg",
  },
  {
    id: "11",
    title: "How to Use AI to Improve Your Productivityt",
    description:"In this blog post, we will discuss how to use AI to improve your productivity. We will explore the different AI tools that are available, and how to use them to get more done in less time.",
    image: "../images/slide11.jpg",
  },
  {
    id: "12",
    title: "How to Use AI to Make Better Decisions",
    description:"In this blog post, we will discuss how to use AI to make better decisions. We will explore how AI can help you to gather and analyze data, and make more informed choices.",
    image: "../images/slide12.jpg",
  },
  {
    id: "13",
    title: "How to Use AI to Live a Healthier Life",
    description: "In this blog post, we will discuss how to use AI to live a healthier life. We will explore how AI can help you to track your fitness, manage your diet, and get better sleep.",
    image: "../images/slide13.jpg",
  },
  {
    id: "14",
    title: "How to Use AI to Stay Safe Online",
    description: "In this blog post, we will discuss how to use AI to stay safe online. We will explore how AI can help you to detect phishing scams, and protect your privacy.",
    image: "../images/slide14.jpg",
  },
  {
    id: "15",
    title: "How to Use AI to Create Art",
    description:"In this blog post, we will discuss how to use AI to create art. We will explore the different AI tools that are available, and how to use them to create beautiful and unique works of art.",
    image: "../images/slide15.jpg",
  },
];

export default function Post({}: PageProps) { 
  const { id } = useParams();
  // ... rest of your component logic 
const post = posts.find((p) => p.id === id);
    if (!post) {
     return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2> 
     );
    }
    const renderParagraphs = (description: string) => {
          return description.split("/n").map((para, index) => (
            <p key={index} className="mt-4 text-justify">
              {para.trim()}
            </p>
          ));
        };
        return (
          <div className="max-w-3xl mx-auto p-5">
            <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
             {post.title}
            </h1>
      
            {post.image && (
              <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-md mt-4"
              />
            )}
            <div className="mt-6 text-lg text-slate-700">
              {renderParagraphs(post.description)}
            </div>
      
            <CommentSection postId={post.id} />
            <AuthoreCard />
            <Footer/>
          </div>
        );
      }
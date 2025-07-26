import { useState, useEffect } from "react";
import './index.css';

// Enhanced candidates data with photos
const initialCandidates = [
  { 
    id: 1, 
    name: "Aswithh", 
    department: "Computer Science", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 2, 
    name: "Sushanth", 
    department: "Computer Science", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 3, 
    name: "Manikanta", 
    department: "Engineering", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 4, 
    name: "Sai Niveed", 
    department: "Engineering", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 5, 
    name: "Jeswanth", 
    department: "Business", 
    position: "President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 6, 
    name: "Vijay", 
    department: "Business", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  { 
    id: 7, 
    name: "Yaswanth", 
    department: "Software", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  {
    
    id: 8, 
    name: "sathwika", 
    department: "Software", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
   
  },
  {
    id: 9, 
    name: "vaishnavi", 
    department: "Innovation", 
    position: "Vice President", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  {
    
    id: 10, 
    name: "kusuma", 
    department: "Innovation", 
    position: "HR", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
  {
    
    id: 11, 
    name: "Sujasree", 
    department: "Creative", 
    position: "HR", 
    votes: 0,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
  },
];
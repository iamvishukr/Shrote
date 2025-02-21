import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Megaphone, Palette } from 'lucide-react';
import JobCard from './JobCard';

const jobListings = [
  {
    title: 'Senior Software Developer',
    description: 'Join our engineering team to build scalable solutions and mentor junior developers.',
    Icon: Briefcase,
    category: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Web Developer Intern',
    description: 'Learn and contribute while working on real-world projects.',
    Icon: GraduationCap,
    category: 'Engineering',
    location: 'Remote',
    type: 'Internship'
  },
  {
    title: 'Marketing Lead',
    description: 'Drive our marketing strategy and lead campaigns across multiple channels.',
    Icon: Megaphone,
    category: 'Marketing',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'UI/UX Designer',
    description: 'Create beautiful and intuitive user experiences for our products.',
    Icon: Palette,
    category: 'Design',
    location: 'Remote',
    type: 'Full-time'
  }
];

const JobList = () => {
  const handleApply = (jobTitle) => {
    // Replace with your actual form URL
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdPkVOaiR8aHrv42zb_fBsZIpx72wnLaVvT7EcXx4LWXyGHMg/viewform?usp=sharing${encodeURIComponent(jobTitle)}`;
    window.open(googleFormUrl, '_blank');
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobListings.map((job, index) => (
        <JobCard
          key={index}
          {...job}
          onApply={handleApply}
        />
      ))}
    </div>
  );
};

export default JobList;
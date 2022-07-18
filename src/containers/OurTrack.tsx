import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Ellipse } from '../assets/icons/ellipse.svg';
import MobileTrackCard from '../components/MobileTrackCard';
import TrackCard from '../components/TrackCard';

const TrackWrapper = styled.div`
  @media (max-width: 1070px) {
    text-align: -webkit-center;
  }
`;

const OurTrack = () => (
  <TrackWrapper className="text-white w-[77.7778%] mx-auto hero:mt-16">
    <div className="border-t-4 border-c-green border-solid max-w-[220px] hero:max-w-[113px] hero:border-t-2" />
    <h2 className="text-[70px] hero:text-[36px] font-bold leading-[87px] hero:leading-[45px] mt-[37px] hero:mt-5 mb-[107px] hero:mb-11">
      Our Tracks
    </h2>
    <div
      style={{
        background:
          'linear-gradient(112.88deg, rgba(217, 217, 217, 0.07) -14.52%, rgba(217, 217, 217, 0) 110.53%)',
      }}
      className="track:hidden relative border-4 flex justify-around border-c-blue border-solid max-w-[1120px] w-full h-[600px] mb-[119px]"
    >
      <Ellipse className="absolute top-[-131px] right-[-82px] mix-blend-color-dodge" />
      <Ellipse className="absolute bottom-[-103px] left-[-70px] mix-blend-color-dodge" />
      <TrackCard
        title="Blockchain Technology"
        body="This track will accelerate your journey to becoming an astute blockchain engineer building DAPPs on the blockchain, DAO initiatives, NFTs and Web3 solutions even if you’re just starting out"
      />
      <TrackCard
        title="Artificial Intelligence"
        body="Companies are automating various tasks with Artificial Intelligence. From building an AI-powered travel advisor to improving business processes and saving millions of dollars, companies are accelerating with AI. This track consists of courses taught by experts in AI and a hands-on project-based approach that spans all levels of expertise."
      />
      <TrackCard
        title="Software Engineering"
        body="With rapid digital innovation, programming skills are becoming more critical in today's economy, and qualified professionals are in short supply. Whether you are a beginner or you want to start a new career in technology, this track has coding courses that can help get you started today."
      />
    </div>
    <div className="hidden track:flex track:flex-col track:justify-center track:items-center track:gap-[86px] mb-[119px]">
      <MobileTrackCard
        title="Blockchain Technology"
        body="This track will accelerate your journey to becoming an astute blockchain engineer building DAPPs on the blockchain, DAO initiatives, NFTs and Web3 solutions even if you’re just starting out"
      />
      <MobileTrackCard
        title="Artificial Intelligence"
        body="Companies are automating various tasks with Artificial Intelligence. From building an AI-powered travel advisor to improving business processes and saving millions of dollars, companies are accelerating with AI. This track consists of courses taught by experts in AI and a hands-on project-based approach that spans all levels of expertise."
      />
      <MobileTrackCard
        title="Software Engineering"
        body="With rapid digital innovation, programming skills are becoming more critical in today's economy, and qualified professionals are in short supply. Whether you are a beginner or you want to start a new career in technology, this track has coding courses that can help get you started today."
      />
    </div>
    <div className="flex justify-end">
      <p className="text-[40px] leading-[49px] hero:text-[20px] hero-leading-[25px] border-c-blue hover:border-c-green border-b-4 border-solid pb-4 hero:pb-2 w-128 hero:w-[236px] text-right self-end cursor-pointer font-medium transition ease-in-out delay-100">
        See all Courses
      </p>
    </div>
  </TrackWrapper>
);
export default OurTrack;

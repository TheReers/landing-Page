import React from 'react';
import WaitlistBtn from './WaitlistBtn';

interface Props {
  title: string;
  body: string;
}

const TrackCard = ({ title, body }: Props) => (
  <div className="border-solid max-w-[346px] w-full p-[45px] hover:bg-[#0446A9] hover:scale-y-125 hover:scale-x-110 hover:backdrop-blur-[13px] hover:z-50 transition ease-in-out delay-150">
    <div className="flex mb-10">
      <div className="w-64">
        <h1 className="font-bold text-[38px] leading-[47px] mb-1">{title}</h1>
      </div>
    </div>
    <p className="text-base min-h-[264px] leading-[22px]">{body}</p>

    <WaitlistBtn btnContent="Join Waitlist" />
  </div>
);

export default TrackCard;

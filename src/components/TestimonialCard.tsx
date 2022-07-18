import React from 'react';

interface Props {
  author: string;
  designation: string;
  avatar: string;
  description: string;
}

const TestimonialCard = ({
  author,
  designation,
  avatar,
  description,
}: Props) => (
  <div className="border-4 border-c-blue border-solid max-w-[346px] w-full hero:min-h-[400px] h-auto p-[45px] hero:p-6">
    <div className="flex mb-10">
      <img
        className="w-[61px] h-[61px] rounded-[50%] mr-[18px]"
        src={avatar}
        alt="avatar"
      />
      <div>
        <h1 className="font-bold text-[24px] hero:text-[20px] leading-[30px] hero:leading-6 mb-1">
          {author}
        </h1>
        <p className="text-c-green text-[16px] leading-6">{designation}</p>
      </div>
    </div>
    <p className="text-[18px] hero:text-[16px] leading-7 hero:leading-[22px]">
      {description}
    </p>
  </div>
);

export default TestimonialCard;

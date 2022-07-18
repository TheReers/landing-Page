import React from 'react';
import WaitlistBtn from './WaitlistBtn';
import { ReactComponent as Ellipse } from '../assets/icons/ellipse-99.svg';
import { ReactComponent as Ellipse1 } from '../assets/icons/ellipse-63.svg';

interface Props {
  title: string;
  body: string;
}

const MobileTrackCard = ({ title, body }: Props) => {
  const [ellipseVisibility, setEllipseVisibility] =
    React.useState<boolean>(true);

  return (
    <div
      onMouseEnter={() => setEllipseVisibility(false)}
      onMouseLeave={() => setEllipseVisibility(true)}
      style={{
        background:
          'linear-gradient(112.88deg, rgba(217, 217, 217, 0.07) -14.52%, rgba(217, 217, 217, 0) 110.53%)',
      }}
      className="hidden relative track:flex flex-col items-center track:border-c-blue border-solid max-w-[346px] w-full p-[45px] hero:p-6 hero:min-h-[422px] border-2 h-auto hover:bg-[#0446A9] hover:scale-y-125 hover:scale-x-110 hover:backdrop-blur-[13px] hover:z-50 transition ease-in-out delay-150"
    >
      <Ellipse
        className={`absolute bottom-[-55px] right-[-38px] ${
          !ellipseVisibility && `hidden`
        }`}
      />
      <Ellipse1
        className={`absolute top-[-31px] left-[-32px] ${
          !ellipseVisibility && `hidden`
        }`}
      />
      <div className="flex mb-10">
        <div className="max-w-[260px]">
          <h1 className="font-bold text-[38px] hero:text-xl leading-[47px] hero:leading-6 mb-1">
            {title}
          </h1>
        </div>
      </div>
      <p className="text-base min-h-[264px] hero:min-h-[254px] leading-[22px] mb-10">
        {body}
      </p>

      <WaitlistBtn btnContent="Join Waitlist" />
    </div>
  );
};

export default MobileTrackCard;

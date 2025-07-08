interface FrameProps {
  className?: string;
}

const Frame = ({ className }: FrameProps) => {
  return (
    <div className={className}>
      <svg
        width="1280"
        height="69"
        viewBox="0 0 1280 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1360 68H857.125H422.875H-80M-80 1H1360"
          stroke="#B2C4FF"
          stroke-width="0.5"
        />
      </svg>
    </div>
  );
};

export default Frame;

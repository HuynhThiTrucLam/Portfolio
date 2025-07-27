interface DecorateStartProps {
  className?: string;
}
const DecorateStart = ({ className }: DecorateStartProps) => {
  return (
    <div className={className}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 17.5L14.5 14L18.5 2L22 14L34 17.5L22 20.5L18.5 33.5L14.5 20.5L2 17.5Z"
          fill="white"
          stroke="black"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default DecorateStart;

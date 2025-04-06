// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconRight = (props: any) => {
  return (
    <svg
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="10" fill="url(#paint0_linear_100_142)" />
      <path
        d="M14 7L8.5 12.5L6 10"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_100_142"
          x1="9.99968"
          y1="0"
          x2="9.99968"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0891B2" />
          <stop offset="1" stopColor="#88CDD4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconRight;

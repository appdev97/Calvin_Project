export const Card = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`border border-white rounded-xl bg-black ${className}`}>
      {children}
    </div>
  );
};

export default Card;

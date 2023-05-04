import { Quote } from "src/types";

export const RenderQuote = ({ item }: { item: Quote }) => {
  return (
    <p title={item.dialog} className="line-clamp-5">
      {item.dialog}
    </p>
  );
};

export default RenderQuote;

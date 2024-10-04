import { GiftCard } from "../ui/GiftCard/GiftCard";
import { useAppSelector } from "../../hooks/redux";

export const GiftList = () => {
  const gift = useAppSelector((state) => state.gift.gift);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, .6fr)",
        gap: "2vh",
      }}
    >
      {gift.map((el, i) => (
        <GiftCard gift={el} key={i} />
      ))}
    </div>
  );
};

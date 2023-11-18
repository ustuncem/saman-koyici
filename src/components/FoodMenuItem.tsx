export interface Product {
  title: string;
  titleEN: string;
  price: string;
  description: string;
  descriptionEN: string;
  containerStyle?: string;
}

export interface Props extends Product {}

export default function FoodMenuItem({
  title,
  titleEN,
  price,
  description,
  descriptionEN,
  containerStyle,
}: Props) {
  return (
    <div className={`${containerStyle}`}>
      <p className="font-secondary font-semibold text-base text-neutral-500 mb-2 pb-2 border-b border-solid flex justify-between gap-x-2">
        <span>
          {title}
          <br /> <span className="italic text-sm">{titleEN}</span>
        </span>
        <span className="font-medium">{price}</span>
      </p>
      <p className="font-secondary font-light text-sm text-neutral-500 mb-2">{description}</p>
      <p className="font-secondary font-light italic text-sm text-neutral-500">{descriptionEN}</p>
    </div>
  );
}

export interface Product {
  title: string;
  titleEN: string;
  price: string;
  description: string;
  descriptionEN: string;
  containerStyle?: string;
  icons?: string;
}

export interface Props extends Product {}

export default function FoodMenuItem({
  title,
  titleEN,
  price,
  description,
  descriptionEN,
  containerStyle,
  icons,
}: Props) {
  return (
    <div className={`${containerStyle}`}>
      <p className="font-secondary font-semibold text-base text-neutral-500 mb-2 pb-2 border-b border-solid flex justify-between gap-x-2">
        <span>
          {title}
          <br /> <span className="italic text-sm">{titleEN}</span>
          <span className="flex gap-x-2">
            {icons &&
              icons
                .split(',')
                .map(icon => (
                  <img src={`/assets/icons/allergen/${icon}.svg`} className="w-6 h-6 mt-2" />
                ))}
          </span>
        </span>
        <span className="font-medium">{price}</span>
      </p>

      <p className="font-secondary font-light text-sm text-neutral-500 mb-2">{description}</p>
      <p className="font-secondary font-light italic text-sm text-neutral-500">{descriptionEN}</p>
    </div>
  );
}

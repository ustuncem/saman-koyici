import {useState, useRef, useEffect} from 'preact/hooks';

import arrow from '@assets/icons/arrow.svg?url';

import type {Product} from './FoodMenuItem';
import FoodMenuItem from './FoodMenuItem';

export interface Props {
  mainTitle: string;
  mainTitleEN: string;
  items: Product[];
  containerStyles?: string;
}

export default function FoodMenuMainItem({mainTitle, mainTitleEN, items, containerStyles}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => setIsOpen(prev => !prev);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [isOpen]);

  return (
    <article className={`w-full overflow-hidden ${containerStyles}`}>
      <div class="flex justify-between gap-x-4 hover:cursor-pointer" onClick={handleClick}>
        <h1 class="font-primary font-bold text-4xl text-primary">
          {mainTitle}
          <br />
          <span class="font-primary font-bold text-2xl text-secondary">{mainTitleEN}</span>
        </h1>
        <img
          src={arrow}
          alt="Down Arrow Icon"
          loading="lazy"
          width="20"
          height="20"
          className={`transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <div
        ref={panelRef}
        className={`transition-all ${isOpen ? 'mt-4' : ''}`}
        style={{height: isOpen ? panelRef.current?.scrollHeight : 0}}
      >
        <div className={`transition-opacity h-0 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {items.map((item, idx) => (
            <FoodMenuItem {...item} containerStyle={idx !== items.length - 1 ? 'mb-8' : ''} />
          ))}
        </div>
      </div>
    </article>
  );
}

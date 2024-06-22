import {useState} from 'preact/hooks';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => setIsOpen(prev => !prev);

  const handleChildWrapperClick = (e: MouseEvent) => e.stopPropagation();
  return (
    isOpen && (
      <div
        className="fixed bg-black/40 inset-0 z-10 px-4 grid place-items-center cursor-pointer"
        onClick={handleOpen}
      >
        <article
          className="max-w-sm mx-auto w-full bg-white p-4 lg:max-w-lg relative z-20 cursor-default"
          onClick={handleChildWrapperClick}
        >
          <h1 className="text-lg sm:text-xl mb-4 text-primary-500 flex justify-between items-center">
            Lezzet Dolu Romantik Anlar
            <button onClick={handleOpen}>
              <img className="w-4" src="/assets/icons/close.svg" />
            </button>
          </h1>
          <div>
            <p className="text-base mb-4 flex justify-between">
              Date Menüsü <span className="text-primary-500">1500 TL</span>
            </p>
            <ul className="marker:text-neutral-300 list-inside mb-4 p-2 border border-dashed border-primary-300">
              <li className="mb-2">
                <span className="text-primary-500">2</span> Makarna veya{' '}
                <span className="text-primary-500">2</span> Pizza
              </li>
              <li className="mb-2">
                <span className="text-primary-500">2</span> Kokteyl veya{' '}
                <span className="text-primary-500">1</span> Şişe Şarap
              </li>
              <li>Meyve ve Peynir Tabağı</li>
            </ul>
            <ul className="list-disc list-inside grid grid-cols-2 mb-2 marker:text-neutral-700">
              <div class="text-[14px]">
                <p className="mb-2 text-primary-500 text-base">Pizzalar</p>
                <li className="mb-2">Margarita</li>
                <li className="mb-2">Alaturka</li>
                <li className="mb-2">Funghi</li>
                <li className="mb-2">Tavuk Cheddar</li>
                <li className="mb-2">Tonbalıklı Pizza</li>
              </div>
              <div class="text-[14px]">
                <p className="mb-2 text-primary-500 text-base">Makarnalar</p>
                <li className="mb-2">Penne Arabiata</li>
                <li className="mb-2">Bolonez</li>
                <li className="mb-2">Fettucini Alfredo </li>
                <li className="mb-2">Penne Pesto</li>
                <li className="mb-2">Linguini</li>
              </div>
            </ul>
            <p className="text-xs text-primary-500">Not: Cumartesi hariç her gün geçerlidir</p>
          </div>
        </article>
      </div>
    )
  );
}

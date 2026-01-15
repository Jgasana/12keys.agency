import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  ctaLabel?: string;
  onClick?: () => void;
  href?: string;
}

export function ServiceCard({
  title,
  image,
  description,
  ctaLabel = 'Learn More',
  onClick,
  href,
}: ServiceCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (href) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      <div className="relative overflow-hidden bg-gray-200 aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
      </div>
      <div className="py-6 space-y-3">
        <h3 className="text-2xl font-light tracking-wider uppercase text-gray-800 group-hover:text-[#8e6d46] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 font-light leading-relaxed">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 text-[#8e6d46] hover:text-[#a2886a] font-light uppercase text-sm tracking-wider transition-colors group-hover:gap-3 duration-300">
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

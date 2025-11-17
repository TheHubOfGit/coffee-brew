import { useState, useEffect } from 'react';

interface NavItem {
  id: string;
  label: string;
  subItems?: NavItem[];
}

interface SidebarNavProps {
  items: NavItem[];
  className?: string;
}

export default function SidebarNav({ items, className = '' }: SidebarNavProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.flatMap(item => 
        item.subItems ? [item.id, ...item.subItems.map(sub => sub.id)] : [item.id]
      );

      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveId(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${className}`}>
      <div className="card-coffee p-4 pr-6">
        <h3 className="text-sm font-semibold text-coffee-espresso mb-4 uppercase tracking-wide">
          On This Page
        </h3>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeId === item.id
                    ? 'bg-coffee-medium text-white font-medium'
                    : 'text-coffee-medium hover:bg-coffee-light/20 hover:text-coffee-espresso'
                }`}
              >
                {item.label}
              </button>
              {item.subItems && item.subItems.length > 0 && (
                <ul className="ml-4 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id}>
                      <button
                        onClick={() => scrollToSection(subItem.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                          activeId === subItem.id
                            ? 'bg-coffee-light text-coffee-espresso font-medium'
                            : 'text-coffee-medium/80 hover:bg-coffee-light/10 hover:text-coffee-espresso'
                        }`}
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


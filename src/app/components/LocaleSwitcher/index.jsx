"use client";

import useLocaleSwitcherItems from "@/app/hooks/useLocaleSwitcherItems";

export default function LocaleSwitcher() {
    const { label, items } = useLocaleSwitcherItems();

    return (
        <div className="relative group">
            <button type="button" className="header__link uppercase text-sm font-medium">
                {label}
            </button>
            <div className="absolute right-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                <div className="bg-linen-white text-forest-ink rounded-md shadow-lg min-w-[120px] overflow-hidden">
                    {items.map((item) => (
                        <button
                            key={item.code}
                            type="button"
                            onClick={item.onClick}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-linen ${item.active ? "font-semibold" : ""}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

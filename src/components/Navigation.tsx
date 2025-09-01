import React, { useState } from 'react';
import { VitrineCultureLogo } from './VitrineCultureLogo';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, Calendar, Users, Image, FileText, Mail, Info, Ticket } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Accueil', icon: Calendar },
    { id: 'about', label: 'À propos', icon: Info },
    { id: 'program', label: 'Programme & Invités', icon: Users },
    { id: 'reservation', label: 'Réservation', icon: Ticket },
    { id: 'gallery', label: 'Galerie', icon: Image },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const handleItemClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b-2 border-orange-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleItemClick('home')}>
            <VitrineCultureLogo variant="creative" size="medium" />
          </div>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-md'
                        : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center p-2 rounded-md border border-orange-300 text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Ouvrir le menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-gradient-to-b from-orange-50 to-red-50">
                <SheetHeader className="mb-6">
                  <SheetTitle>Menu Navigation</SheetTitle>
                  <SheetDescription>
                    Accédez aux différentes sections de Vitrine Culture
                  </SheetDescription>
                  <div className="mt-4">
                    <VitrineCultureLogo variant="creative" size="small" />
                  </div>
                </SheetHeader>
                
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                          currentPage === item.id
                            ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-md'
                            : 'text-slate-700 hover:bg-white hover:shadow-sm'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
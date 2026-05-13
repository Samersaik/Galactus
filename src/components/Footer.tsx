import { Dumbbell, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-galactus-red w-8 h-8" />
              <span className="font-heading text-3xl tracking-wider uppercase text-white">
                Galactus <span className="text-galactus-red">Gym</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your Destination for Personal Training, Nutrition, and Diet Guidance. Let's Crush Those Goals Together!
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/galactusgym" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-galactus-red hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-galactus-red hover:text-white transition-colors">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-galactus-red transition-colors">About Us</a></li>
              <li><a href="#facilities" className="text-gray-400 hover:text-galactus-red transition-colors">Facilities</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-galactus-red transition-colors">Memberships</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-galactus-red transition-colors">Our Trainers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-galactus-red shrink-0" />
                <span className="text-gray-400 text-sm">13, Doctor Ln, Sector 3, DIZ Area, Gole Market, New Delhi, 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-galactus-red shrink-0" />
                <span className="text-gray-400">+91 96507 18460</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Galactus Gym. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

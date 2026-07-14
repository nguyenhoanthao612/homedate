import { 
  Wifi, 
  Utensils, 
  Car, 
  Coffee, 
  Flower2, 
  Sparkles, 
  Heart, 
  Flame, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  MessageSquare, 
  Send, 
  Star, 
  Maximize2, 
  Users, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Menu, 
  Play, 
  Pause,
  Tv,
  Eye,
  Calendar,
  Layers,
  Compass,
  Smile,
  Info,
  Home,
  Map,
  MessageSquareDiff,
  LucideIcon
} from 'lucide-react';

// A map of string names to Lucide Icon components. This is clean and robust.
export const iconMap: Record<string, LucideIcon> = {
  Wifi,
  Utensils,
  Car,
  Coffee,
  Flower2,
  Sparkles,
  Heart,
  Flame,
  Phone,
  Mail,
  MapPin,
  Facebook,
  MessageSquare,
  Send,
  Star,
  Maximize2,
  Users,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Play,
  Pause,
  Tv,
  Eye,
  Calendar,
  Layers,
  Compass,
  Smile,
  Info,
  Home,
  Map,
  MessageSquareDiff
};

export function getIcon(name: string): LucideIcon {
  const normalizedKey = name.trim();
  // Case-insensitive check
  const matchedKey = Object.keys(iconMap).find(
    (key) => key.toLowerCase() === normalizedKey.toLowerCase()
  );
  
  if (matchedKey) {
    return iconMap[matchedKey];
  }
  
  return Sparkles; // Fallback to Sparkles
}

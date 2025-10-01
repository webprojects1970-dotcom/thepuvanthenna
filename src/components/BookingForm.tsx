import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { format } from "date-fns";
import { CalendarIcon, MailIcon, StickyNoteIcon, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { rooms } from '@/lib/hotelData';

// Add WhatsApp number constant
const WHATSAPP_NUMBER = "+94775497458"; // Regit init

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() + 1)));
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
  const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);

  // Calculate minimum stay duration
  const getNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  // Function to send data to WhatsApp
  const sendToWhatsApp = () => {
    const message = `New Booking Request:
    
Name: ${name}
Email: ${email}
Phone: ${phone}
Check-in: ${format(checkInDate, "MMM d, yyyy")}
Check-out: ${format(checkOutDate, "MMM d, yyyy")}
Duration: ${getNights()} ${getNights() === 1 ? 'night' : 'nights'}
No of Guests: ${guests}
Additional Requests: ${additionalNotes || "None"}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    setIsSubmitting(true);

    // Send to WhatsApp
    sendToWhatsApp();

    // Show success message
    toast.success("Booking request received! We'll contact you soon to confirm your reservation.");
    setIsSubmitting(false);
    setName("");
    setEmail("");
    setPhone("");
    setAdditionalNotes("");
  };

  // Ensure dates make sense (check-out is after check-in)
  useEffect(() => {
    if (checkInDate && checkOutDate && checkInDate >= checkOutDate) {
      setCheckOutDate(new Date(new Date(checkInDate).setDate(checkInDate.getDate() + 1)));
    }
  }, [checkInDate]);

  return (
    <div id="booking" className="bg-white rounded-xl shadow-lg overflow-hidden border border-hotel-100 transition-all duration-300 hover:shadow-xl">
      <div className="bg-hotel-100 px-6 py-4 border-b border-hotel-200">
        <h3 className="text-xl font-serif font-medium text-hotel-900">Book Your Stay</h3>
        <p className="text-hotel-600 text-sm">Best rates guaranteed</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="h-4 w-4 text-hotel-500" />
            </div>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="pl-10 border-hotel-200 focus:border-primary focus:ring-primary"
            />
          </div>
          <p className="text-xs text-hotel-500">Please enter your full name</p>
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MailIcon className="h-4 w-4 text-hotel-500" />
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="pl-10 border-hotel-200 focus:border-primary focus:ring-primary"
            />
          </div>
          <p className="text-xs text-hotel-500">We'll send your booking confirmation to this email</p>
        </div>

        {/* Phone Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="h-4 w-4 text-hotel-500" />
            </div>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              required
              className="pl-10 border-hotel-200 focus:border-primary focus:ring-primary"
            />
          </div>
          <p className="text-xs text-hotel-500">We'll contact you on this number to confirm your booking</p>
        </div>

        {/* Check-in Date Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Check-in Date
          </label>
          
          <Popover open={isCheckInCalendarOpen} onOpenChange={setIsCheckInCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkInDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? format(checkInDate, "MMM d, yyyy") : "Select check-in date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="single"
                selected={checkInDate}
                onSelect={(date) => {
                  if (date) {
                    setCheckInDate(date);
                    setIsCheckInCalendarOpen(false);
                  }
                }}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Check-out Date Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Check-out Date
          </label>
          
          <Popover open={isCheckOutCalendarOpen} onOpenChange={setIsCheckOutCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOutDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? format(checkOutDate, "MMM d, yyyy") : "Select check-out date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="single"
                selected={checkOutDate}
                onSelect={(date) => {
                  if (date) {
                    setCheckOutDate(date);
                    setIsCheckOutCalendarOpen(false);
                  }
                }}
                disabled={(date) => 
                  date < new Date(new Date(checkInDate).setHours(0, 0, 0, 0) + 86400000) // +1 day in milliseconds
                }
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
          
          {getNights() > 0 && (
            <div className="flex items-center justify-between p-3 bg-hotel-50 rounded-lg border border-hotel-100">
              <span className="text-sm font-medium text-hotel-700">Duration of Stay:</span>
              <span className="text-lg font-semibold text-primary">
                {getNights()} {getNights() === 1 ? 'night' : 'nights'}
              </span>
            </div>
          )}
        </div>
        
        {/* Guests Selection */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            No of Guests
          </label>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-hotel-700">
            Additional Requests
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <StickyNoteIcon className="h-4 w-4 text-hotel-500" />
            </div>
            <Textarea
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              placeholder="Any special requests or requirements..."
              className="pl-10 min-h-[100px] border-hotel-200 focus:border-primary focus:ring-primary"
            />
          </div>
          <p className="text-xs text-hotel-500">Let us know of any special requirements or requests</p>
        </div>
        
        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-md transition-all duration-300 font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Book Now"}
        </Button>
        
      </form>
    </div>
  );
};

export default BookingForm;

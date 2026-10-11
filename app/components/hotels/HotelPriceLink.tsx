"use client";

import { useMember } from "@/app/components/auth/MemberProvider";

export default function HotelPriceLink({ hotelId, className }: { hotelId: string; className?: string }) {
  const { member, pending, signIn } = useMember();
  const href = `/api/hotel-prices/${hotelId}`;
  return <a href={href} className={className} aria-busy={pending || undefined}
    target={member ? "_blank" : undefined} rel="noopener noreferrer"
    onClick={event => {
      if (member) return;
      event.preventDefault();
      if (!pending) signIn(href, "prices");
    }}>See prices</a>;
}

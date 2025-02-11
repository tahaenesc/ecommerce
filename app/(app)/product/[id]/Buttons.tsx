"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/stores/cart";
import { handlePurchase } from "@/services/stripe";
import { Product } from "@/types/product";
import React from "react";

export default function Buttons({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse xl:flex-row-reverse gap-4">
        <Button className="text-[17px] py-8 w-full " onClick={()=>handlePurchase({...product, count:1 })} >Buy now</Button>
        <Button
          className="text-[17px] py-8 w-full bg-white hover:bg-zinc-100 border shadow-none text-zinc-700 "
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

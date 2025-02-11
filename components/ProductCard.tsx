"use client"
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbShoppingBagPlus } from "react-icons/tb";

type Props = {
  product: Product;
  small?: boolean
};

export default function ProductCard(props: Props) {
  const { product, small } = props;
  return (
    <Link href={`/product/${product._id}`} className="space-y-3 group ">
      <div className={`group relative w-full ${small ? 'h-[200px]' : 'h-[400px]'}  flex justify-center items-center bg-secondary`}>
        <TbShoppingBagPlus className="absolute right-8 top-8 opacity-0 transition-all group-hover:opacity-100 z-[1] text-xl " />
        <Image
          src={product.image}
          alt="image"
          fill
          className="object-contain p-10 group-hover:opacity-65 transition-all "
        />
      </div>
      <p className="font-bold text-primary/80"> 
        {product.title}
      </p>
      <p> {product.price}$ </p>
    </Link>
  );
}
